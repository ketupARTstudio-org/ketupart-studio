import Link from "next/link";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";

const relatedPosts = [
  {
    image: "/assets/abstract/media/blog/blog-1.png",
    title: "How To Use a Remarketing Strategy To Get More",
    description:
      "Demand generation is a constant struggle for any business. Each marketing strategy you employ has...",
  },
  {
    image: "/assets/abstract/media/blog/blog-2.png",
    title: "SEO Statistics You Should Know in 2021",
    description:
      "Organic search has the potential to capture more than 40 percent of your gross revenue...",
  },
  {
    image: "/assets/abstract/media/blog/blog-1.png",
    title: "How To Use a Remarketing Strategy To Get More",
    description:
      "Demand generation is a constant struggle for any business. Each marketing strategy you employ has...",
  },
] as const;

export function CaseStudyShowPage() {
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
            <div className="breadcrumb section-heading heading-left">
              <ul className="list-unstyled">
                <li><Link href="/">Home</Link></li>
                <li className="active">Case Study</li>
              </ul>
              <h1 className="title h2">eCommerce Marketing Statistics You Should Know in 2021.</h1>
              <p>sdgfsdgsdg sdfafaegfwe fgqe fqwegfqw egfwefwqefwef</p>
            </div>
          </div>
          <ul className="shape-group-8 list-unstyled">
            <li className="shape shape-1" data-sal="slide-right" data-sal-duration="500" data-sal-delay="100">
              <img src="/assets/abstract/media/others/bubble-9.png" alt="Bubble" />
            </li>
            <li className="shape shape-2" data-sal="slide-left" data-sal-duration="500" data-sal-delay="200">
              <img src="/assets/abstract/media/others/bubble-11.png" alt="Bubble" />
            </li>
            <li className="shape shape-3" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300">
              <img src="/assets/abstract/media/others/line-4.png" alt="Line" />
            </li>
          </ul>
        </div>

        <section className="section-padding-equal pb-0">
          <div className="container">
            <div className="row row-40">
              <div className="col-lg-12">
                <div className="single-blog single-blog-gallery">
                  <div className="single-blog-content blog-grid blog-thumb-slide">
                    <div className="post-thumbnail">
                      <div className="slick-slider slick-arrow-nav slick-dot-nav">
                        <div className="slick-slide">
                          <img src="/assets/abstract/media/blog/blog-3.png" alt="Blog" className="w-100" />
                        </div>
                        <div className="slick-slide">
                          <img src="/assets/abstract/media/blog/blog-4.png" alt="Blog" className="w-100" />
                        </div>
                      </div>
                    </div>
                    <div className="author">
                      <div className="author-thumb">
                        <img src="/assets/abstract/media/blog/author-1.png" alt="Blog Author" />
                      </div>
                      <div className="info">
                        <h6 className="author-name">Theresa Underwood</h6>
                        <ul className="blog-meta list-unstyled">
                          <li>Sep 10, 2021</li>
                          <li>9 min to read</li>
                        </ul>
                      </div>
                    </div>

                    <p>
                      Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel
                      hendrerit nisi. Vestibulum eget risus velit. Aliquam tristique libero at dui
                      sodales, et placerat orci lobortis. Maecenas ipsum neque, elementum id
                      dignissim et, imperdiet vitae mauris.
                    </p>
                    <p>
                      Habitasse per feugiat aliquam luctus accumsan curae, suspendisse aliquam
                      taciti eros neque, aenean sit iaculis risus commodo ut sociosqu rhoncus
                      potenti tristique placerat sit tempus, duis erat feugiat cras sociosqu porta
                      ut praesent, fermentum donec convallis tellus vulputate duis nibh rhoncus
                      phasellus dui massa nisl.
                    </p>
                    <p>
                      Whether you&apos;re kicking off a new campaign or looking to revamp your
                      strategy, the lessons you&apos;ll learn will be universal to all small business
                      email marketing.
                    </p>
                    <p className="mb--80">
                      MailChimp is an email marketing service provider founded in 2001. It has 9
                      million users that collectively send over 15 billion emails through the
                      service each month.
                    </p>

                    <h3 className="title mb--30">Habitasse per feugiat aliquam luctus</h3>
                    <p>
                      Email is a crucial channel in any marketing mix, and never has this been
                      truer than for today&apos;s entrepreneur. Curious what to say? How to say it?
                      How often to hit &quot;send&quot;? Each bite-sized lesson delivers core concepts,
                      guiding questions, and tactical how-to resources.
                    </p>
                    <p>
                      Whether you&apos;re kicking off a new campaign or looking to revamp your
                      strategy, the lessons you&apos;ll learn will be universal to all small business
                      email marketing.
                    </p>

                    <div className="blog-grid blog-without-thumb mt--80">
                      <blockquote>
                        <h5 className="title">
                          <a href="#top">
                            &quot; Donec metus lorem, vulputate at sapien sit amet, auctor iaculis
                            lorem. In vel hendrerit nisi. Vestibulum eget risus velit. &quot;
                          </a>
                        </h5>
                      </blockquote>
                      <div className="author">
                        <div className="info">
                          <h6 className="author-name">Theresa Underwood</h6>
                          <ul className="blog-meta list-unstyled">
                            <li>Aug 27, 2019</li>
                            <li>9 min to read</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <h3 className="title mb--30">Habitasse per feugiat aliquam luctus accumsan curae</h3>
                    <p>
                      Email is a crucial channel in any marketing mix, and never has this been
                      truer than for today&apos;s entrepreneur. Curious what to say? How to say it?
                      How often to hit &quot;send&quot;? Each bite-sized lesson delivers core concepts,
                      guiding questions, and tactical how-to resources. Email is a crucial channel
                      in any marketing mix, and never has this been truer than for today&apos;s
                      entrepreneur.
                    </p>
                    <p>
                      Curious what to say? How to say it? How often to hit &quot;send&quot;? Each
                      bite-sized lesson delivers core concepts, guiding questions, and tactical
                      how-to resources.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-padding-equal pt-0 related-blog-area pb-0">
          <div className="container">
            <div className="section-heading heading-left">
              <h3 className="title">Related Case Studies</h3>
            </div>
            <div className="recent-post-slide">
              <div className="row row-35">
                {relatedPosts.map((post, index) => (
                  <div className="col-lg-6" key={`${post.title}-${index}`}>
                    <div className="blog-list">
                      <div className="post-thumbnail">
                        <a href="#top"><img src={post.image} alt="Blog Post" /></a>
                      </div>
                      <div className="post-content">
                        <h5 className="title"><a href="#top">{post.title}</a></h5>
                        <p>{post.description}</p>
                        <a href="#top" className="more-btn">
                          Learn more<i className="far fa-angle-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <SiteFooter isSubpage />
      </div>
    </main>
  );
}
