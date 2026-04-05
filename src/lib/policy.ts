import { existsSync, readFileSync } from "node:fs";
import path from "node:path";

function resolveMarkdownPath(filename: string): string {
  const candidates = [
    path.join(process.cwd(), "resources", "markdown", filename),
    path.join(process.cwd(), "..", "resources", "markdown", filename),
  ];

  for (const candidate of candidates) {
    if (existsSync(candidate)) {
      return candidate;
    }
  }

  throw new Error(`Policy markdown file not found: ${filename}`);
}

function renderInlineMarkdown(text: string): string {
  let html = text;
  html = html.replace(/&/g, "&amp;");
  html = html.replace(/</g, "&lt;");
  html = html.replace(/>/g, "&gt;");
  html = html.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/_([^_]+)_/g, "<em>$1</em>");
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
  html = html.replace(/&lt;((?:https?:\/\/|mailto:)[^&]+)&gt;/g, '<a href="$1">$1</a>');
  return html;
}

function flushParagraph(buffer: string[], out: string[]): void {
  if (buffer.length === 0) {
    return;
  }
  out.push(`<p>${renderInlineMarkdown(buffer.join(" "))}</p>`);
  buffer.length = 0;
}

export function markdownToHtml(markdown: string): string {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const out: string[] = [];
  const paragraph: string[] = [];
  let inUl = false;
  let inOl = false;

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

  for (const rawLine of lines) {
    const line = rawLine.trim();

    if (!line) {
      flushParagraph(paragraph, out);
      closeLists();
      continue;
    }

    if (line.startsWith("<") && line.endsWith(">")) {
      flushParagraph(paragraph, out);
      closeLists();
      out.push(line);
      continue;
    }

    const heading = line.match(/^(#{1,6})\s+(.*)$/);
    if (heading) {
      flushParagraph(paragraph, out);
      closeLists();
      const level = heading[1].length;
      out.push(`<h${level}>${renderInlineMarkdown(heading[2])}</h${level}>`);
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

  flushParagraph(paragraph, out);
  closeLists();

  return out.join("\n");
}

export function getPolicyHtml(filename: string): string {
  const markdown = readFileSync(resolveMarkdownPath(filename), "utf-8");
  return markdownToHtml(markdown);
}
