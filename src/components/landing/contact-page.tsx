import Link from "next/link";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";

export function ContactPage() {
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
                <li className="active">Contact</li>
              </ul>
              <h1 className="title h2">Contact</h1>
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

        <section className="section section-padding">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12 offset-xl-1">
                <div className="contact-info mb--100 mb_md--30 mt_md--0 mt--150">
                  <h4 className="title">Phone</h4>
                  <p>
                    Our person in charge is available from
                    <br />
                    Mon-Fri, 9:00 am to 6:00 pm
                    <br />
                    Sat, 9:00 am to 12:30 pm
                  </p>
                  <h4 className="phone-number">
                    <a href="tel:+601154054256">+601154054256</a>
                  </h4>
                </div>
                <div className="contact-info mb--30">
                  <h4 className="title">Email</h4>
                  <p>Our support team will get back to in 48-h during standard business hours.</p>
                  <h4 className="phone-number">
                    <a href="mailto:ketupartstudio@gmail.com">ketupartstudio@gmail.com</a>
                  </h4>
                </div>
                <div className="contact-info mb--100 mb_md--30 mt_md--0 mt--150">
                  <h4 className="title">Address</h4>
                  <p>Our business located here</p>
                  <h4 className="phone-number">
                    KetupArt Studio,
                    <br />
                    CubeX-03, CubeX Catalyst, Aras 2, Bangunan Pusat Industri
                    <br />
                    Technovation Park, Universiti Teknologi Malaysia
                    <br />
                    81300, Johor Bahru, Johor
                    <br />
                    Malaysia.
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <ul className="list-unstyled shape-group-12">
            <li className="shape shape-1"><img src="/assets/abstract/media/others/bubble-2.png" alt="Bubble" /></li>
            <li className="shape shape-2"><img src="/assets/abstract/media/others/bubble-1.png" alt="Bubble" /></li>
            <li className="shape shape-3"><img src="/assets/abstract/media/others/circle-3.png" alt="Circle" /></li>
          </ul>
        </section>

        <SiteFooter isSubpage />
      </div>
    </main>
  );
}
