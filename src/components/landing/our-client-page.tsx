import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";

export const clientLogos = [
  "/assets/abstract/media/brand/logo-DEC4IR-2.png",
  "/assets/abstract/media/brand/logo_utm.png",
  "/assets/abstract/media/brand/logo_mranti.png",
  "/assets/abstract/media/brand/logo-kpm.png",
];

export function OurClientPage() {
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
              <h1 className="title h2">Our Clients</h1>
              <p>
                We work closely with our clients in order to deliver the best results. As a startup,
                we believe building client centric experience is our most important goal.
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

        <div className="section brand-wrap-area bg-color-dark">
          <div className="container">
            <div className="row">
              {clientLogos.map((logo, index) => (
                <div
                  className="col-lg-3 col-6 h-100"
                  data-sal="slide-up"
                  data-sal-duration="500"
                  data-sal-delay={String(index * 100)}
                  key={logo}
                >
                  <div className="d-flex justify-content-center align-items-center">
                    <img src={logo} alt="Brand" className="p-5" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center">
            <strong>Our Top Client</strong>
          </div>
        </div>

        <SiteFooter isSubpage />
      </div>
    </main>
  );
}
