import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";

export function AccreditationPage() {
  return (
    <main>
      <a href="#top" id="backto-top" className="back-to-top">
        <i className="far fa-angle-double-up" />
      </a>

      <div id="preloader" />

      <div id="main-wrapper" className="main-wrapper">
        <SiteHeader isSubpage />

        <div className="breadcrum-area breadcrumb-banner" id="top">
          <div className="container">
            <div className="section-heading heading-left" data-sal="slide-right" data-sal-duration="1000" data-sal-delay="300">
              <h1 className="title h2">Accreditation</h1>
              <p>
                Our accreditation details will be published here. We are preparing complete certification and
                compliance information in this section.
              </p>
            </div>
            <div className="banner-thumbnail thumbnail-1" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="400">
              <img className="paralax-image" src="/assets/abstract/media/banner/banner-thumb-1.png" alt="Illustration" />
            </div>
          </div>
          <ul className="shape-group-8 list-unstyled">
            <li className="shape shape-1" data-sal="slide-right" data-sal-duration="500" data-sal-delay="100">
              <img src="/assets/abstract/media/others/bubble-9.png" alt="Bubble" />
            </li>
            <li className="shape shape-2" data-sal="slide-left" data-sal-duration="500" data-sal-delay="200">
              <img src="/assets/abstract/media/others/bubble-21.png" alt="Bubble" />
            </li>
          </ul>
        </div>

        <section className="section section-padding-equal bg-color-dark">
          <div className="container">
            <div className="section-heading heading-light text-center">
              <span className="subtitle">In Progress</span>
              <h2 className="title">Accreditation Information Coming Soon</h2>
              <p className="opacity-75">
                This page is active and ready in Next.js. We can now fill it with your full accreditation content
                whenever you are ready.
              </p>
            </div>
          </div>
        </section>

        <SiteFooter isSubpage />
      </div>
    </main>
  );
}
