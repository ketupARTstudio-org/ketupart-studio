import Link from "next/link";
import type { ReactNode } from "react";

type SiteHeaderProps = {
  isSubpage?: boolean;
};

type SmartLinkProps = {
  href: string;
  children: ReactNode;
};

function SmartLink({ href, children }: SmartLinkProps) {
  if (href.startsWith("#")) {
    return <a href={href}>{children}</a>;
  }
  return <Link href={href}>{children}</Link>;
}

export function SiteHeader({ isSubpage = false }: SiteHeaderProps) {
  const homeHref = isSubpage ? "/" : "#home";
  const aboutHref = "/aboutus";
  const teamHref = "/team";
  const clientsHref = "/ourclient";
  const consultancyHref = "/consultancy";
  const immersiveHref = "/immersive";
  const gameDevelopmentHref = "/gamedevelopment";
  const mobileDevelopmentHref = "/mobiledevelopment";
  const webDevelopmentHref = "/webdevelopment";
  const cloudComputingHref = "/cloudcomputing";
  const servicesHref = isSubpage ? "/#services" : "#services";
  const methodologyHref = "/methodology";
  const caseStudyHref = "/casestudy";
  const portfolioHref = isSubpage ? "/#portfolio" : "#portfolio";
  const productsHref = isSubpage ? "/#products" : "#products";
  const goflyHref = "/gofly";
  const contactHref = "/contact";

  return (
    <>
      <header className="header axil-header header-style-1" id="home">
        <div id="axil-sticky-placeholder" />
        <div className="axil-mainmenu">
          <div className="container">
            <div className="header-navbar">
              <div className="header-logo">
                <SmartLink href={homeHref}>
                  <img className="light-version-logo" src="/assets/abstract/media/logo.png" alt="logo" />
                </SmartLink>
                <SmartLink href={homeHref}>
                  <img className="dark-version-logo" src="/assets/abstract/media/logo-3.png" alt="logo" />
                </SmartLink>
                <SmartLink href={homeHref}>
                  <img className="sticky-logo" src="/assets/abstract/media/logo-2.png" alt="logo" />
                </SmartLink>
              </div>
              <div className="header-main-nav">
                <nav
                  className="mainmenu-nav"
                  id="mobilemenu-popup"
                  tabIndex={-1}
                  data-bs-scroll="true"
                  data-bs-backdrop="false"
                >
                  <div className="d-block d-lg-none">
                    <div className="mobile-nav-header">
                      <div className="mobile-nav-logo">
                        <SmartLink href={homeHref}>
                          <img className="light-mode" src="/assets/abstract/media/logo-2.png" alt="Site Logo" />
                          <img className="dark-mode" src="/assets/abstract/media/logo-3.png" alt="Site Logo" />
                        </SmartLink>
                      </div>
                      <button type="button" className="mobile-menu-close" data-bs-dismiss="offcanvas">
                        <i className="fas fa-times" />
                      </button>
                    </div>
                  </div>
                  <ul className="mainmenu">
                    <li>
                      <SmartLink href={homeHref}>Home</SmartLink>
                    </li>
                    <li className="menu-item-has-children">
                      <SmartLink href={aboutHref}>About</SmartLink>
                      <ul className="axil-submenu">
                        <li>
                          <SmartLink href={aboutHref}>KetupArt</SmartLink>
                        </li>
                        <li>
                          <SmartLink href={teamHref}>Team</SmartLink>
                        </li>
                        <li>
                          <SmartLink href={clientsHref}>Our Clients</SmartLink>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <SmartLink href={servicesHref}>Services</SmartLink>
                      <ul className="axil-submenu">
                        <li><SmartLink href={consultancyHref}>Digital Consultancy</SmartLink></li>
                        <li><SmartLink href={immersiveHref}>Immersive Technology</SmartLink></li>
                        <li><SmartLink href={gameDevelopmentHref}>Game Development</SmartLink></li>
                        <li><SmartLink href={cloudComputingHref}>Cloud Computing</SmartLink></li>
                        <li><SmartLink href={webDevelopmentHref}>Web Development</SmartLink></li>
                        <li><SmartLink href={mobileDevelopmentHref}>Mobile Apps Development</SmartLink></li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <SmartLink href={portfolioHref}>Portfolio</SmartLink>
                      <ul className="axil-submenu">
                        <li><SmartLink href={methodologyHref}>Work Methodology</SmartLink></li>
                        <li><SmartLink href={caseStudyHref}>Case Study</SmartLink></li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <SmartLink href={productsHref}>Products</SmartLink>
                      <ul className="axil-submenu">
                        <li>
                          <SmartLink href={goflyHref}>
                            <b>Go Fly</b> - VR Drone Training
                          </SmartLink>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <SmartLink href={contactHref}>Contact</SmartLink>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="header-action">
                <ul className="list-unstyled">
                  <li className="sidemenu-btn d-lg-block d-none">
                    <button className="btn-wrap" data-bs-toggle="offcanvas" data-bs-target="#offcanvasMenuRight">
                      <span />
                      <span />
                      <span />
                    </button>
                  </li>
                  <li className="mobile-menu-btn sidemenu-btn d-lg-none d-block">
                    <button className="btn-wrap" data-bs-toggle="offcanvas" data-bs-target="#mobilemenu-popup">
                      <span />
                      <span />
                      <span />
                    </button>
                  </li>
                  <li className="my_switcher d-block d-lg-none">
                    <ul>
                      <li title="Light Mode">
                        <button type="button" className="setColor light" data-theme="light">
                          <i className="fal fa-lightbulb-on" />
                        </button>
                      </li>
                      <li title="Dark Mode">
                        <button type="button" className="setColor dark" data-theme="dark">
                          <i className="fas fa-moon" />
                        </button>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="offcanvas offcanvas-end header-offcanvasmenu" tabIndex={-1} id="offcanvasMenuRight">
        <div className="offcanvas-header">
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
        </div>
        <div className="offcanvas-body">
          <div className="row">
            <div className="col-lg-7 col-xl-6">
              <div className="contact-info-wrap">
                <div className="contact-inner">
                  <address className="address">
                    <span className="title">Contact Information</span>
                    <p>ketupartstudio@gmail.com</p>
                  </address>
                  <address className="address">
                    <span className="title">We&apos;re Available 24/7.</span>
                  </address>
                </div>
                <div className="contact-inner">
                  <h5 className="title">Find us here</h5>
                  <div className="contact-social-share">
                    <ul className="social-share list-unstyled">
                      <li>
                        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
