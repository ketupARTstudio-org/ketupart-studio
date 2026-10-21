import Link from "next/link";
import type { ReactNode } from "react";

type SiteFooterProps = {
  isSubpage?: boolean;
};

type SmartLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

function SmartLink({ href, children, className }: SmartLinkProps) {
  if (href.startsWith("#")) {
    return <a href={href} className={className}>{children}</a>;
  }
  return <Link href={href} className={className}>{children}</Link>;
}

export function SiteFooter({ isSubpage = false }: SiteFooterProps) {
  const aboutHref = isSubpage ? "/aboutus" : "#about";
  const teamHref = "/team";
  const consultancyHref = "/consultancy";
  const immersiveHref = "/immersive";
  const vrClassroomHref = "/vr-classroom";
  const gameDevelopmentHref = "/gamedevelopment";
  const mobileDevelopmentHref = "/mobiledevelopment";
  const webDevelopmentHref = "/webdevelopment";
  const cloudComputingHref = "/cloudcomputing";
  const servicesHref = isSubpage ? "/#services" : "#services";
  const methodologyHref = "/methodology";
  const caseStudyHref = "/casestudy";
  const portfolioHref = isSubpage ? "/#portfolio" : "#portfolio";
  const clientsHref = "/ourclient";
  const generalPrivacyHref = "/privacy-policy";
  const generalTermsHref = "/terms-of-service";
  const productPrivacyHref = "/product/privacy-policy";
  const productShippingHref = "/product/shipping-policy";
  const productRefundHref = "/product/refund-policy";
  const goflyPrivacyHref = "/gofly/privacy-policy";
  const goflyTermsHref = "/gofly/terms-of-services";
  const foundlyPrivacyHref = "/foundly/privacy-policy";
  const foundlyTermsHref = "/foundly/terms-of-services";

  return (
    <footer className="footer-area pt-5" id="contact">
      <div className="container">
        <div className="footer-main">
          <div className="row">
            <div className="col-xl-3" data-sal="slide-right" data-sal-duration="800" data-sal-delay="100">
              <div className="d-flex flex-column">
                <img src="/assets/images/logo/Logo V4 for black background.png" alt="KetupArt Studio" />
                <p className="mb-1">© 2022 - 2024 KetupArt Studio <br /> All Rights Reserved</p>
                <p>Registration No: 202203172936 (003414323-D)</p>
                <a
                  href="https://www.linkedin.com/company/ketupart-studio/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white"
                >
                  LinkedIn | <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
            <div className="col-xl-3" data-sal="slide-right" data-sal-duration="800" data-sal-delay="100">
              <div className="d-flex flex-column">
                <h5>Get In Touch</h5>
                <p>
                  KetupArt Studio, CubeX-03, CubeX Catalyst, Aras 2, Bangunan Pusat Industri,
                  Technovation Park, Universiti Teknologi Malaysia, 81300, Johor Bahru, Johor
                </p>
                <p>ketupartstudio@gmail.com</p>
              </div>
            </div>
            <div className="col-xl-6" data-sal="slide-left" data-sal-duration="800" data-sal-delay="100">
              <div className="row">
                <div className="col-sm-4">
                  <div className="footer-widget">
                    <h6 className="widget-title">Services</h6>
                    <div className="footer-menu-link">
                      <ul className="list-unstyled">
                        <li><SmartLink href={consultancyHref}><small>Digital Consultancy</small></SmartLink></li>
                        <li><SmartLink href={immersiveHref}><small>Immersive Technology</small></SmartLink></li>
                        <li><SmartLink href={vrClassroomHref}><small>VR Classroom Setup</small></SmartLink></li>
                        <li><SmartLink href={cloudComputingHref}><small>Cloud Computing</small></SmartLink></li>
                        <li><SmartLink href={gameDevelopmentHref}><small>Game Development</small></SmartLink></li>
                        <li><SmartLink href={webDevelopmentHref}><small>Web Development</small></SmartLink></li>
                        <li><SmartLink href={mobileDevelopmentHref}><small>Mobile Development</small></SmartLink></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="footer-widget">
                    <h6 className="widget-title">About us</h6>
                    <div className="footer-menu-link">
                      <ul className="list-unstyled">
                        <li><SmartLink href={aboutHref}><small>KetupArt</small></SmartLink></li>
                        <li><SmartLink href={teamHref}><small>Team</small></SmartLink></li>
                        <li><SmartLink href={clientsHref}><small>Our Clients</small></SmartLink></li>
                      </ul>
                    </div>

                    <h6 className="widget-title pt-5">Portfolio</h6>
                    <div className="footer-menu-link">
                      <ul className="list-unstyled">
                        <li><SmartLink href={methodologyHref}><small>Work Methodology</small></SmartLink></li>
                        <li><SmartLink href={caseStudyHref}><small>Case Study</small></SmartLink></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-5" id="policy">
                  <div className="footer-widget">
                    <h6 className="widget-title">Policy</h6>
                    <div className="footer-menu-link">
                      <b><u>General Policy</u></b>
                      <ul className="list-unstyled" style={{ paddingTop: 10 }}>
                        <li><SmartLink href={generalPrivacyHref}>Privacy Policy</SmartLink></li>
                        <li><SmartLink href={generalTermsHref}>Terms of Use</SmartLink></li>
                      </ul>
                    </div>
                    <br />
                    <br />
                    <div className="footer-menu-link">
                      <b><u>Products Policy</u></b>
                      <details style={{ paddingTop: 10 }}>
                        <summary className="btn btn-sm btn-outline-light">Select Product Policy</summary>
                        <ul className="list-unstyled mt-2 mb-0">
                          <li><SmartLink href={goflyPrivacyHref}>GoFly Privacy Policy</SmartLink></li>
                          <li><SmartLink href={goflyTermsHref}>GoFly Terms of Services</SmartLink></li>
                          <li><SmartLink href={foundlyPrivacyHref}>Foundly Privacy Policy</SmartLink></li>
                          <li><SmartLink href={foundlyTermsHref}>Foundly Terms of Services</SmartLink></li>
                          <li><SmartLink href={productPrivacyHref}>Product Privacy Policy</SmartLink></li>
                          <li><SmartLink href={productShippingHref}>Product Shipping Policy</SmartLink></li>
                          <li><SmartLink href={productRefundHref}>Product Refund Policy</SmartLink></li>
                        </ul>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom" data-sal="slide-up" data-sal-duration="500" data-sal-delay="100">
          <div className="row">
            <div className="col-md-6">
              <div className="footer-copyright">
                <span className="copyright-text">Copyright © 2022 - 2024 KetupArt Studio</span>
              </div>
            </div>
            <div className="col-md-6">
              <div className="footer-bottom-link">
                <ul className="list-unstyled">
                  <li><SmartLink href={generalPrivacyHref}>Privacy Policy</SmartLink></li>
                  <li><SmartLink href={generalTermsHref}>Terms of Use</SmartLink></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
