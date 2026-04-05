import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";
import Link from "next/link";

type BlogAuthor = {
  name: string;
  avatar?: string;
  date: string;
  readTime: string;
};

type BlogCard = {
  title: string;
  excerpt?: string;
  image?: string;
  quote?: string;
  gallery?: string[];
  videoUrl?: string;
  variant?: "normal" | "no-thumb" | "quote" | "gallery" | "video";
  author: BlogAuthor;
};

const blogCards: BlogCard[] = [
  {
    title: "How to Increase Your ROI Through scientific SEM?",
    excerpt:
      "Want to know the one thing that every successful digital marketer does first to ensure they get the biggest return on their marketing budget? It is simple: goal-setting. This is an absolutely essential practice for any digital marketer who knows how to execute their campaigns.",
    image: "/assets/abstract/media/blog/blog-3.png",
    author: {
      name: "Theresa Underwood",
      avatar: "/assets/abstract/media/blog/author-1.png",
      date: "Sep 10, 2021",
      readTime: "9 min to read",
    },
  },
  {
    title: "Twice Profit Than Before You Ever Got",
    variant: "no-thumb",
    author: {
      name: "Theresa Underwood",
      date: "Sep 9, 2021",
      readTime: "15 min to read",
    },
  },
  {
    title: "Cloud Hosting Growing Faster Ever",
    excerpt:
      "Want to know the one thing that every successful digital marketer does first to ensure they get the biggest return on their marketing budget? It is simple: goal-setting. This is an absolutely essential practice for any digital marketer who knows how to execute their campaigns...",
    image: "/assets/abstract/media/blog/blog-4.png",
    author: {
      name: "Theresa Underwood",
      avatar: "/assets/abstract/media/blog/author-2.png",
      date: "Sep 7, 2021",
      readTime: "5 min to read",
    },
  },
  {
    title:
      "The goal of a designer is to listen, observe, understand, sympathize, empathize, synthesize, and glean insights that enable him or her to make the invisible visible",
    variant: "quote",
    author: {
      name: "Theresa Underwood",
      date: "Sep 12, 2021",
      readTime: "10 min to read",
    },
  },
  {
    title: "eCommerce Marketing Statistics You Should Know in 2021.",
    excerpt:
      "Above all, think of life as a prototype. We can conduct experiments, make discoveries, and change our perspectives. We can look for opportunities to turn processes into projects that have tangible outcomes.",
    variant: "gallery",
    gallery: [
      "/assets/abstract/media/blog/blog-3.png",
      "/assets/abstract/media/blog/blog-4.png",
    ],
    author: {
      name: "Theresa Underwood",
      avatar: "/assets/abstract/media/blog/author-2.png",
      date: "Sep 15, 2021",
      readTime: "8 min to read",
    },
  },
  {
    title: "Follow your own design process, whatever gets you to the outcome.",
    excerpt:
      "Above all, think of life as a prototype. We can conduct experiments, make discoveries, and change our perspectives. We can look for opportunities to turn processes into projects that have tangible outcomes.",
    image: "/assets/abstract/media/blog/blog-4.png",
    videoUrl: "https://www.youtube.com/watch?v=1iIZeIy7TqM",
    variant: "video",
    author: {
      name: "Theresa Underwood",
      avatar: "/assets/abstract/media/blog/author-2.png",
      date: "Sep 10, 2021",
      readTime: "9 min to read",
    },
  },
];

const categories = [
  "Agency news",
  "Digital Marketing",
  "Information technology",
  "New ideas",
  "Uncategorized",
  "Marketing & branding",
];

const recentPosts = [
  {
    image: "/assets/abstract/media/blog/blog-5.png",
    title: "Take ownership and question the status quo in.",
    date: "Sep 10, 2021",
    readTime: "9 min to read",
  },
  {
    image: "/assets/abstract/media/blog/blog-6.png",
    title: "Take ownership and question the status quo in.",
    date: "Sep 15, 2021",
    readTime: "15 min to read",
  },
  {
    image: "/assets/abstract/media/blog/blog-7.png",
    title: "Take ownership and question the status quo in.",
    date: "Sep 5, 2021",
    readTime: "8 min to read",
  },
];

function BlogAuthorRow({ author }: { author: BlogAuthor }) {
  return (
    <div className="author">
      {author.avatar ? (
        <div className="author-thumb">
          <img src={author.avatar} alt={author.name} />
        </div>
      ) : null}
      <div className="info">
        <h6 className="author-name">{author.name}</h6>
        <ul className="blog-meta list-unstyled">
          <li>{author.date}</li>
          <li>{author.readTime}</li>
        </ul>
      </div>
    </div>
  );
}

export function BlogPage() {
  return (
    <main>
      <a href="#top" id="backto-top" className="back-to-top">
        <i className="far fa-angle-double-up" />
      </a>

      <div id="preloader" />

      <div id="main-wrapper" className="main-wrapper">
        <SiteHeader isSubpage />

        <div className="breadcrum-area" id="top">
          <div className="container">
            <div className="breadcrumb">
              <ul className="list-unstyled">
                <li><Link href="/">Home</Link></li>
                <li className="active">Blog</li>
              </ul>
              <h1 className="title h2">Blog</h1>
            </div>
          </div>
          <ul className="shape-group-8 list-unstyled">
            <li className="shape shape-1" data-sal="slide-right" data-sal-duration="500" data-sal-delay="100">
              <img src="/assets/abstract/media/others/bubble-9.png" alt="Bubble" />
            </li>
            <li className="shape shape-2" data-sal="slide-left" data-sal-duration="500" data-sal-delay="200">
              <img src="/assets/abstract/media/others/bubble-10.png" alt="Bubble" />
            </li>
            <li className="shape shape-3" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300">
              <img src="/assets/abstract/media/others/line-4.png" alt="Line" />
            </li>
          </ul>
        </div>

        <section className="section-padding-equal">
          <div className="container">
            <div className="row row-40">
              <div className="col-lg-8">
                {blogCards.map((post, index) => {
                  const variant = post.variant ?? "normal";
                  const classNames = [
                    "blog-grid",
                    variant === "no-thumb" ? "blog-without-thumb" : "",
                    variant === "gallery" ? "blog-thumb-slide" : "",
                    index === blogCards.length - 1 ? "mb-0" : "",
                  ]
                    .filter(Boolean)
                    .join(" ");

                  if (variant === "quote") {
                    return (
                      <div className={classNames} key={post.title}>
                        <blockquote>
                          <h5 className="title"><a href="#top">&ldquo;{post.title}&rdquo;</a></h5>
                        </blockquote>
                        <BlogAuthorRow author={post.author} />
                      </div>
                    );
                  }

                  return (
                    <div className={classNames} key={post.title}>
                      <h3 className="title"><a href="#top">{post.title}</a></h3>
                      <BlogAuthorRow author={post.author} />

                      {variant === "gallery" && post.gallery ? (
                        <div className="post-thumbnail">
                          <div
                            className="slick-slider slick-arrow-nav slick-dot-nav"
                            data-slick='{"infinite": true, "autoplay": true, "arrows": true, "dots": true, "slidesToShow": 1}'
                          >
                            {post.gallery.map((image) => (
                              <div className="slick-slide" key={image}>
                                <a href="#top"><img src={image} alt={post.title} /></a>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : null}

                      {variant !== "gallery" && post.image ? (
                        <div className="post-thumbnail">
                          <a href="#top"><img src={post.image} alt={post.title} /></a>
                          {variant === "video" && post.videoUrl ? (
                            <div className="popup-video">
                              <a href={post.videoUrl} className="play-btn popup-youtube" target="_blank" rel="noreferrer">
                                <i className="fas fa-play" />
                              </a>
                            </div>
                          ) : null}
                        </div>
                      ) : null}

                      {post.excerpt ? <p>{post.excerpt}</p> : null}
                      {variant !== "no-thumb" ? <a href="#top" className="axil-btn btn-borderd btn-large">Read More</a> : null}
                    </div>
                  );
                })}

                <div className="pagination">
                  <ul>
                    <li><a className="prev page-numbers" href="#top"><i className="fal fa-arrow-left" /></a></li>
                    <li><a href="#top" className="page-numbers current">1</a></li>
                    <li><a className="page-numbers" href="#top">2</a></li>
                    <li><a className="page-numbers" href="#top">3</a></li>
                    <li><a className="page-numbers" href="#top">4</a></li>
                    <li><a className="page-numbers" href="#top">5</a></li>
                    <li><a className="next page-numbers" href="#top"><i className="fal fa-arrow-right" /></a></li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="axil-sidebar">
                  <div className="widget widget-search">
                    <h4 className="widget-title">Search</h4>
                    <form action="#" className="blog-search">
                      <input type="text" placeholder="Search..." />
                      <button className="search-button" type="button"><i className="fal fa-search" /></button>
                    </form>
                  </div>

                  <div className="widget widget-categories">
                    <h4 className="widget-title">Categories</h4>
                    <ul className="category-list list-unstyled">
                      {categories.map((category) => (
                        <li key={category}>
                          <a href="#top">{category}</a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="widget widge-social-share">
                    <div className="blog-share">
                      <h5 className="title">Follow:</h5>
                      <ul className="social-list list-unstyled">
                        <li><a href="https://facebook.com/" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f" /></a></li>
                        <li><a href="https://twitter.com/" target="_blank" rel="noreferrer"><i className="fab fa-twitter" /></a></li>
                        <li><a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><i className="fab fa-instagram" /></a></li>
                        <li><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in" /></a></li>
                        <li><a href="https://www.youtube.com/" target="_blank" rel="noreferrer"><i className="fab fa-youtube" /></a></li>
                      </ul>
                    </div>
                  </div>

                  <div className="widget widget-recent-post">
                    <h4 className="widget-title">Recent post</h4>
                    <div className="post-list-wrap">
                      {recentPosts.map((post) => (
                        <div className="single-post" key={`${post.title}-${post.date}`}>
                          <div className="post-thumbnail">
                            <a href="#top"><img src={post.image} alt={post.title} /></a>
                          </div>
                          <div className="post-content">
                            <h6 className="title"><a href="#top">{post.title}</a></h6>
                            <ul className="blog-meta list-unstyled">
                              <li>{post.date}</li>
                              <li>{post.readTime}</li>
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="widget widget-banner-ad">
                    <a href="#top">
                      <img src="/assets/abstract/media/banner/widget-banner.png" alt="banner" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section call-to-action-area">
          <div className="container">
            <div className="call-to-action">
              <div className="section-heading heading-light">
                <span className="subtitle">Let&apos;s Work Together</span>
                <h2 className="title">Need a successful project?</h2>
                <Link href="/#contact" className="axil-btn btn-large btn-fill-white">Estimate Project</Link>
              </div>
              <div className="thumbnail">
                <div className="larg-thumb" data-sal="zoom-in" data-sal-duration="600" data-sal-delay="100">
                  <img className="paralax-image" src="/assets/abstract/media/others/chat-group.png" alt="Chat" />
                </div>
                <ul className="list-unstyled small-thumb">
                  <li className="shape shape-1" data-sal="slide-right" data-sal-duration="800" data-sal-delay="400">
                    <img className="paralax-image" src="/assets/abstract/media/others/laptop-poses.png" alt="Laptop" />
                  </li>
                  <li className="shape shape-2" data-sal="slide-left" data-sal-duration="800" data-sal-delay="300">
                    <img className="paralax-image" src="/assets/abstract/media/others/bill-pay.png" alt="Bill" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <ul className="list-unstyled shape-group-9">
            <li className="shape shape-1"><img src="/assets/abstract/media/others/bubble-12.png" alt="Comments" /></li>
            <li className="shape shape-2"><img src="/assets/abstract/media/others/bubble-16.png" alt="Comments" /></li>
            <li className="shape shape-3"><img src="/assets/abstract/media/others/bubble-13.png" alt="Comments" /></li>
            <li className="shape shape-4"><img src="/assets/abstract/media/others/bubble-14.png" alt="Comments" /></li>
            <li className="shape shape-5"><img src="/assets/abstract/media/others/bubble-16.png" alt="Comments" /></li>
            <li className="shape shape-6"><img src="/assets/abstract/media/others/bubble-15.png" alt="Comments" /></li>
            <li className="shape shape-7"><img src="/assets/abstract/media/others/bubble-16.png" alt="Comments" /></li>
          </ul>
        </section>

        <SiteFooter isSubpage />
      </div>
    </main>
  );
}
