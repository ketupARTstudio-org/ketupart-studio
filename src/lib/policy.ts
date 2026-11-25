import { existsSync, readFileSync } from "node:fs";
import path from "node:path";

function resolveMarkdownPath(filename: string): string {
  const candidates = [
    path.join(process.cwd(), "resources", "markdown", filename),
    path.join(process.cwd(), "..", "resources", "markdown", filename),
    path.join(process.cwd(), "archieve", "resources", "markdown", filename),
  ];

  for (const candidate of candidates) {
    if (existsSync(candidate)) {
      return candidate;
    }
  }

  throw new Error(`Policy markdown file not found: ${filename}`);
}

// Inline HTML that policy files use on purpose (e.g. `<b id="...">` anchors and
// `<br>` in postal addresses). Everything else is escaped and shown as text.
const ALLOWED_INLINE_TAG = /<\/?(?:a|b|br|em|i|span|strong|u)(?:\s[^<>]*)?\/?>/gi;

function renderInlineMarkdown(text: string): string {
  const keptTags: string[] = [];
  let html = text.replace(ALLOWED_INLINE_TAG, (tag) => {
    keptTags.push(tag);
    return `\u0000${keptTags.length - 1}\u0000`;
  });
  html = html.replace(/&/g, "&amp;");
  html = html.replace(/</g, "&lt;");
  html = html.replace(/>/g, "&gt;");
  html = html.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/_([^_]+)_/g, "<em>$1</em>");
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
  html = html.replace(/&lt;((?:https?:\/\/|mailto:)[^&]+)&gt;/g, '<a href="$1">$1</a>');
  return html.replace(/\u0000(\d+)\u0000/g, (_, index: string) => keptTags[Number(index)]);
}

/** Text of an HTML fragment without tags or entities, for ids and labels. */
function plainText(html: string): string {
  return html
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function slugify(text: string): string {
  return (
    plainText(text)
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "section"
  );
}

// "**_In Short:_**" / "_**In Short:**_" summaries become highlighted callouts.
const IN_SHORT = /^(?:\*\*_|_\*\*)In Short:/;

function flushParagraph(buffer: string[], out: string[]): void {
  if (buffer.length === 0) {
    return;
  }
  const text = buffer.join(" ");
  const className = IN_SHORT.test(text) ? ' class="policy-callout"' : "";
  out.push(`<p${className}>${renderInlineMarkdown(text)}</p>`);
  buffer.length = 0;
}

function splitTableRow(line: string): string[] {
  return line
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((cell) => cell.trim());
}

/** Renders a GitHub-style Markdown table (header row, separator, body). */
function renderTable(rows: string[]): string {
  const [headerLine, separator, ...bodyLines] = rows;
  if (!separator || !/^\|?\s*:?-{3,}/.test(separator.trim())) {
    return rows.map((row) => `<p>${renderInlineMarkdown(row)}</p>`).join("\n");
  }
  const header = splitTableRow(headerLine)
    .map((cell) => `<th>${renderInlineMarkdown(cell)}</th>`)
    .join("");
  const body = bodyLines
    .map(
      (line) =>
        `<tr>${splitTableRow(line)
          .map((cell) => `<td>${renderInlineMarkdown(cell)}</td>`)
          .join("")}</tr>`,
    )
    .join("\n");
  return `<div class="policy-table"><table><thead><tr>${header}</tr></thead><tbody>\n${body}\n</tbody></table></div>`;
}

const STANDALONE_LINK = /^<a\s[^>]*>.*<\/a>$/;

export function markdownToHtml(markdown: string): string {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const out: string[] = [];
  const paragraph: string[] = [];
  const usedIds = new Set<string>();
  let inUl = false;
  let inOl = false;
  let tableRows: string[] = [];
  let tocLinks: string[] = [];

  const uniqueId = (base: string) => {
    let id = base;
    for (let n = 2; usedIds.has(id); n++) {
      id = `${base}-${n}`;
    }
    usedIds.add(id);
    return id;
  };

  const closeLists = () => {
    if (inUl) {
      out.push("</ul>");
      inUl = false;
    }
    if (inOl) {
      out.push("</ol>");
      inOl = false;
    }
  };

  const flushTable = () => {
    if (tableRows.length === 0) {
      return;
    }
    out.push(renderTable(tableRows));
    tableRows = [];
  };

  // A run of lines that are each just a link (a hand-written table of
  // contents) becomes a proper list instead of one long line of links.
  const flushTocLinks = () => {
    if (tocLinks.length === 0) {
      return;
    }
    out.push(
      `<nav class="policy-inline-toc"><ol>${tocLinks
        .map((link) => `<li>${link}</li>`)
        .join("")}</ol></nav>`,
    );
    tocLinks = [];
  };

  const flushBlocks = () => {
    flushParagraph(paragraph, out);
    closeLists();
    flushTable();
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();

    if (STANDALONE_LINK.test(line)) {
      flushBlocks();
      tocLinks.push(line);
      continue;
    }
    if (!line) {
      flushBlocks();
      continue;
    }
    flushTocLinks();

    if (line.startsWith("|")) {
      flushParagraph(paragraph, out);
      closeLists();
      tableRows.push(line);
      continue;
    }
    flushTable();

    if (line.startsWith("<") && line.endsWith(">")) {
      flushParagraph(paragraph, out);
      closeLists();
      const rawHeading = line.match(/^<h([1-6])\s+id="([^"]+)"/);
      if (rawHeading) {
        usedIds.add(rawHeading[2]);
      }
      out.push(line);
      continue;
    }

    const heading = line.match(/^(#{1,6})\s+(.*)$/);
    if (heading) {
      flushParagraph(paragraph, out);
      closeLists();
      const level = heading[1].length;
      const content = renderInlineMarkdown(heading[2]);
      const id = uniqueId(slugify(content));
      out.push(`<h${level} id="${id}">${content}</h${level}>`);
      continue;
    }

    const ulItem = line.match(/^[-*]\s+(.*)$/);
    if (ulItem) {
      flushParagraph(paragraph, out);
      if (inOl) {
        out.push("</ol>");
        inOl = false;
      }
      if (!inUl) {
        out.push("<ul>");
        inUl = true;
      }
      out.push(`<li>${renderInlineMarkdown(ulItem[1])}</li>`);
      continue;
    }

    const olItem = line.match(/^\d+\.\s+(.*)$/);
    if (olItem) {
      flushParagraph(paragraph, out);
      if (inUl) {
        out.push("</ul>");
        inUl = false;
      }
      if (!inOl) {
        out.push("<ol>");
        inOl = true;
      }
      out.push(`<li>${renderInlineMarkdown(olItem[1])}</li>`);
      continue;
    }

    paragraph.push(line);
  }

  flushBlocks();
  flushTocLinks();

  return out.join("\n");
}

export function getPolicyHtml(filename: string): string {
  const markdown = readFileSync(resolveMarkdownPath(filename), "utf-8");
  return markdownToHtml(markdown);
}

export type PolicySection = { id: string; label: string };

export type PreparedPolicy = {
  html: string;
  lastUpdated: string | null;
  sections: PolicySection[];
};

const letters = (text: string) => plainText(text).toLowerCase().replace(/[^a-z0-9]/g, "");

/**
 * Prepares rendered policy HTML for the policy page layout: drops a leading
 * heading that only repeats the page [title], pulls out the "Last updated"
 * date for the page header, and lists the main sections for navigation.
 */
export function preparePolicy(html: string, title: string): PreparedPolicy {
  let body = html.trimStart();

  const leadingHeading = body.match(/^<h([1-6])[^>]*>([\s\S]*?)<\/h\1>\s*/);
  if (leadingHeading) {
    const heading = letters(leadingHeading[2]);
    const pageTitle = letters(title);
    if (heading && (pageTitle.includes(heading) || heading.includes(pageTitle))) {
      body = body.slice(leadingHeading[0].length);
    }
  }

  let lastUpdated: string | null = null;
  const updated = body.match(
    /<p>(?:\s*<(?:strong|em)>)*\s*Last updated:?\s*([^<]+?)\s*(?:<\/(?:strong|em)>\s*)*<\/p>\s*/i,
  );
  if (updated && updated.index !== undefined && updated.index < 400) {
    lastUpdated = updated[1].trim();
    body = body.slice(0, updated.index) + body.slice(updated.index + updated[0].length);
  }

  // Navigate by the highest heading level that structures the document.
  let sections: PolicySection[] = [];
  for (const level of [2, 3, 4]) {
    const found = [...body.matchAll(new RegExp(`<h${level}\\s+id="([^"]+)"[^>]*>([\\s\\S]*?)</h${level}>`, "g"))]
      .filter((match) => match[1] !== "toc")
      .map((match) => ({ id: match[1], label: plainText(match[2]) }))
      .filter((section) => section.label.length > 0);
    if (found.length >= 2) {
      sections = found;
      break;
    }
  }

  return { html: body, lastUpdated, sections };
}
