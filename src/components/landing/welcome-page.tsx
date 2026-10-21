import { deliverables, services, stats } from "@/components/landing/data";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";
import Link from "next/link";

export function WelcomePage() {
  return (
    <main>
      <a href="#home" id="backto-top" className="back-to-top">
        <i className="far fa-angle-double-up" />
      </a>

      <div id="preloader" />

      <div id="main-wrapper" className="main-wrapper">
        <SiteHeader />

        <section className="banner banner-style-4">
          <div className="container">
            <div className="banner-content">
              <h1 className="title" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="100">
                Providing Solution for Immersive World
              </h1>
              <p data-sal="slide-up" data-sal-duration="1000">
                We provide a bunch of technology services, with latest technology and security frameworks to
                regulate your business and being on track with global standards with the vision in Empowering
                Industries, SMEs, and Education through cutting-edge technology solutions that unleash
                productivity, efficiency, and innovation for a brighter future.
              </p>
              <div data-sal="slide-up" data-sal-duration="1000" data-sal-delay="200">
                <a href="#services" className="axil-btn btn-fill-primary btn-large">
                  View Services
                </a>
              </div>
            </div>
            <div className="banner-thumbnail">
              <div className="large-thumb text-end" data-sal="slide-left" data-sal-duration="800" data-sal-delay="400">
                <img className="paralax-image w-100 w-lg-50 me-20 me-lg-0" src="/assets/abstract/media/banner/immersive.jpg" alt="Shape" />
              </div>
            </div>
            <div className="banner-social" data-sal="slide-up" data-sal-duration="800">
              <div className="border-line" />
              <ul className="list-unstyled social-icon">
                <li>
                  <a href="https://www.linkedin.com/">
                    <i className="fab fa-linkedin-in " /> Linkedin
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <ul className="list-unstyled shape-group-19">
            <li className="shape shape-1" data-sal="slide-down" data-sal-duration="500" data-sal-delay="100">
              <img src="/assets/abstract/media/others/bubble-29.png" alt="Bubble" />
            </li>
            <li className="shape shape-2" data-sal="slide-left" data-sal-duration="500" data-sal-delay="200">
              <img src="/assets/abstract/media/others/line-7.png" alt="Bubble" />
            </li>
          </ul>
        </section>

        <section className="section section-padding-2 bg-color-dark" id="services">
          <div className="container">
            <div className="section-heading ">
              <span className="subtitle">What We Can Do For You</span>
              <h2 className="title">Services we can help you with</h2>
              <p className="opacity-50 w-100">
                &quot;The software development process is a journey of continuous improvement, where imagination meets
                reality through the power of code and collaboration, creating innovative solutions that shape the
                world we live in.&quot;
              </p>
            </div>
            <div className="row">
              {services.map((service, index) => (
                <div
                  className="col-xl-4 col-md-6"
                  data-sal="slide-up"
                  data-sal-duration="800"
                  data-sal-delay={service.delay}
                  key={service.title}
                >
                  <div className={`services-grid ${index === 0 ? "active" : ""}`} style={{ padding: 20 }}>
                    <div className="content">
                      <img src={service.icon} alt="icon" />
                      <h5 className="title">
                        <Link href={service.href}>{service.title}</Link>
                      </h5>
                      <p>{service.description}</p>
                      <Link href={service.href} className="more-btn">View service</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <ul className="list-unstyled shape-group-10">
            <li className="shape shape-1"><img src="/assets/abstract/media/others/line-9.png" alt="Circle" /></li>
            <li className="shape shape-2"><img src="/assets/abstract/media/others/bubble-42.png" alt="Circle" /></li>
            <li className="shape shape-3"><img src="/assets/abstract/media/others/bubble-43.png" alt="Circle" /></li>
          </ul>
        </section>

        <section className="section section-padding-equal bg-color-light" id="about">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12" data-sal="slide-up" data-sal-duration="800">
                <div className="about-us">
                  <div className="section-heading heading-left mb-0">
                    <span className="subtitle">Our Core Work</span>
                    <h2 className="title mb--40">We do design, code, develop, test & maintenance.</h2>
                    <p>
                      We delivering user-friendly and aesthetically pleasing products that meet your business goals
                      and exceed your expectations, every step of the way. Our team of experts combines creativity
                      and technical expertise to bring your ideas to life, delivering solutions that are both
                      functional and visually appealing.
                    </p>
                    <p>
                      At every stage of the development process, we work closely with you to ensure that your needs
                      and requirements are met, and that the final product meets your expectations. Whether you need a
                      simple system or a complex system, our team is equipped with the skills and experience to
                      deliver the best results. Our focus on quality and attention to detail ensures that the end
                      product is not only functional but also secure, scalable, and user-friendly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ul className="shape-group-6 list-unstyled">
            <li className="shape shape-1"><img src="/assets/abstract/media/others/bubble-7.png" alt="Bubble" /></li>
            <li className="shape shape-2"><img src="/assets/abstract/media/others/line-4.png" alt="line" /></li>
            <li className="shape shape-3"><img src="/assets/abstract/media/others/line-5.png" alt="line" /></li>
          </ul>
        </section>

        <section className="section section-padding-equal case-study-featured-area" id="portfolio">
          <div className="container">
            <div className="row">
              <div className="col-xl-5 col-lg-6" data-sal="slide-right" data-sal-duration="800">
                <div
                  className="slick-slider slick-dot-nav featured-content"
                  data-slick='{"infinite": true,"arrows": false, "dots": true, "slidesToShow": 1, "asNavFor": ".featured-thumbnail"}'
                >
                  {deliverables.map((item) => (
                    <div className="slick-slide" key={item.title}>
                      <div className="case-study-featured">
                        <div className="section-heading heading-left">
                          <span className="subtitle">{item.label}</span>
                          <h2 className="title">{item.title}</h2>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-xl-7 col-lg-6 d-none d-lg-block" data-sal="slide-left" data-sal-duration="800">
                <div
                  className="slick-slider slick-dot-nav featured-thumbnail"
                  data-slick='{"infinite": true,"arrows": false, "dots": false, "fade": true, "slidesToShow": 1, "asNavFor": ".featured-content"}'
                >
                  {deliverables.map((item) => (
                    <div className="slick-slide" key={item.label}>
                      <div className="case-study-featured-thumb">
                        <img src={item.image} alt="travel" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-padding bg-color-dark">
          <div className="container">
            <div className="section-heading heading-light">
              <span className="subtitle">Featured Case Study</span>
              <h2 className="title">Design startup movement</h2>
              <p>
                &quot;The design startup movement is a catalyst for change, where creativity and technology converge to
                solve problems, drive innovation, and change the world for the better.&quot;
              </p>
            </div>
            <div className="row">
              {stats.map((item, index) => (
                <div
                  className="col-lg-3 col-6"
                  data-sal="slide-up"
                  data-sal-duration="800"
                  data-sal-delay={item.delay}
                  key={item.title}
                >
                  <div className={`counterup-progress ${index === 0 ? "active" : ""}`}>
                    <div className="icon">
                      <img src={item.icon} alt="Apple" />
                    </div>
                    <div className="h2">
                      <span className="number">{item.value}</span>
                      <span className="symbol">{item.suffix}</span>
                    </div>
                    <h6 className="title">{item.title}</h6>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <ul className="list-unstyled shape-group-10">
            <li className="shape shape-2"><img src="/assets/abstract/media/others/bubble-42.png" alt="Circle" /></li>
            <li className="shape shape-3"><img src="/assets/abstract/media/others/bubble-43.png" alt="Circle" /></li>
          </ul>
        </section>

        <section className="section py-5 bg-color-dark">
          <div className="container">
            <div className="section-heading heading-light">
              <span className="subtitle">Let&apos;s Work Together</span>
              <h2 className="title">Need a successful project?</h2>
              <a href="#contact" className="axil-btn btn-fill-primary btn-large">
                Kick Start Project
              </a>
            </div>
          </div>
          <ul className="list-unstyled shape-group-9">
            <li className="shape shape-2"><img src="/assets/abstract/media/others/bubble-16.png" alt="Comments" /></li>
            <li className="shape shape-3"><img src="/assets/abstract/media/others/bubble-13.2.png" alt="Comments" /></li>
            <li className="shape shape-4"><img src="/assets/abstract/media/others/bubble-14.png" alt="Comments" /></li>
            <li className="shape shape-5"><img src="/assets/abstract/media/others/bubble-16.png" alt="Comments" /></li>
            <li className="shape shape-6"><img src="/assets/abstract/media/others/bubble-15.2.png" alt="Comments" /></li>
            <li className="shape shape-7"><img src="/assets/abstract/media/others/bubble-16.png" alt="Comments" /></li>
          </ul>
        </section>

        <SiteFooter />
      </div>
    </main>
  );
}
