import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";
import Link from "next/link";

type ReviewItem = {
  name: string;
  designation: string;
  avatar: string;
};

const reviews: ReviewItem[] = [
  {
    name: "Darrell Steward",
    designation: "Executive Chairman",
    avatar: "/assets/abstract/media/testimonial/testimonial-1.png",
  },
  {
    name: "Savannah Nguyen",
    designation: "Executive Chairman",
    avatar: "/assets/abstract/media/testimonial/testimonial-2.png",
  },
  {
    name: "Floyd Miles",
    designation: "Executive Chairman",
    avatar: "/assets/abstract/media/testimonial/testimonial-3.png",
  },
];

function ReviewSection({
  title,
  subtitle,
  logo,
  social,
  light,
}: {
  title: string;
  subtitle: string;
  logo: string;
  social: string;
  light?: boolean;
}) {
  return (
    <section className={`section section-padding customer-review-area ${light ? "bg-color-dark overflow-hidden" : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="section-heading heading-left">
              <h2 className={`title ${light ? "text-white" : ""}`}>{title}</h2>
              <p className={light ? "color-gray-4" : ""}>{subtitle}</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="review-site-logo">
              <a href="#">
                <img src={logo} alt={social} />
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          {reviews.map((review) => (
            <div className="col-lg-4" key={`${social}-${review.name}`}>
              <div className={`testimonial-grid ${light ? "testimonial-light" : ""}`}>
                <span className="social-media">{social}</span>
                <p>
                  &ldquo; Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi.
                  Vestibulum eget risus velit. &rdquo;
                </p>
                <div className="author-info">
                  <div className="thumb">
                    <img src={review.avatar} alt={`${social} Review`} />
                  </div>
                  <div className="content">
                    <span className="name">{review.name}</span>
                    <span className="designation">{review.designation}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {light ? (
        <ul className="shape-group-11 list-unstyled">
          <li className="shape shape-1">
            <img src="/assets/abstract/media/others/line-6.png" alt="line" />
          </li>
          <li className="shape shape-2">
            <img src="/assets/abstract/media/others/circle-3.png" alt="line" />
          </li>
        </ul>
      ) : null}
    </section>
  );
}

export function TestimonialPage() {
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
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li className="active">Reviews</li>
              </ul>
              <h1 className="title h2">Customer Reviews</h1>
            </div>
          </div>
          <ul className="shape-group-8 list-unstyled">
            <li className="shape shape-1" data-sal="slide-right" data-sal-duration="500" data-sal-delay="100">
              <img src="/assets/abstract/media/others/bubble-9.png" alt="Bubble" />
            </li>
            <li className="shape shape-2" data-sal="slide-left" data-sal-duration="500" data-sal-delay="200">
              <img src="/assets/abstract/media/others/bubble-17.png" alt="Bubble" />
            </li>
            <li className="shape shape-3" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300">
              <img src="/assets/abstract/media/others/line-4.png" alt="Line" />
            </li>
          </ul>
        </div>

        <ReviewSection
          title="Google Reviews"
          subtitle="Nulla facilisi. Nullam in magna id dolor blandit rutrum eget vulputate augue sed eu leo eget risus imperdiet."
          logo="/assets/abstract/media/icon/google.png"
          social="Google"
        />

        <ReviewSection
          title="Facebook Reviews"
          subtitle="Aenean hendrerit laoreet vehicula. Nullam convallis augue at enim gravida pellentesque."
          logo="/assets/abstract/media/icon/fb.png"
          social="Facebook"
          light
        />

        <ReviewSection
          title="Yelp Reviews"
          subtitle="Aenean hendrerit laoreet vehicula. Nullam convallis augue at enim gravida pellentesque."
          logo="/assets/abstract/media/icon/yelp.png"
          social="Yelp"
        />

        <section className="section call-to-action-area">
          <div className="container">
            <div className="call-to-action">
              <div className="section-heading heading-light">
                <span className="subtitle">Let&apos;s Work Together</span>
                <h2 className="title">Need a successful project?</h2>
                <Link href="/#contact" className="axil-btn btn-large btn-fill-white">
                  Estimate Project
                </Link>
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
