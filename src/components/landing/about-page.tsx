import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";

export function AboutPage() {
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
              <h1 className="title h2">About KetupArt Studio</h1>
              <p>
                KetupArt Studio start the journey in 2023 and begin to provide robust solution to clients.
                At KetupArtStudio, we specialize in creating innovative and customized digital experiences
                that empower businesses to thrive in the digital landscape. With a team of skilled
                professionals and a passion for pushing boundaries, we deliver exceptional results that
                exceed client expectations.
              </p>
            </div>
            <div className="banner-thumbnail thumbnail-3" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="400">
              <img src="/assets/abstract/media/banner/ketupat.png" alt="Illustration" />
            </div>
          </div>
          <ul className="shape-group-8 list-unstyled">
            <li className="shape shape-1" data-sal="slide-right" data-sal-duration="500" data-sal-delay="100">
              <img src="/assets/abstract/media/others/bubble-9.png" alt="Bubble" />
            </li>
            <li className="shape shape-2" data-sal="slide-left" data-sal-duration="500" data-sal-delay="200">
              <img src="/assets/abstract/media/others/bubble-22.png" alt="Bubble" />
            </li>
            <li className="shape shape-3" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300">
              <img src="/assets/abstract/media/others/line-4.png" alt="Line" />
            </li>
          </ul>
        </div>

        <section className="section section-padding case-study-featured-area">
          <div className="container">
            <div className="row">
              <div className="col-xl-6">
                <div className="case-study-featured-thumb h-100 d-flex align-items-center">
                  <img src="/assets/abstract/media/banner/data-management.png" alt="travel" />
                </div>
              </div>
              <div className="col-xl-6">
                <div className="case-study-featured">
                  <div className="section-heading heading-left">
                    <span className="subtitle">Who we are</span>
                    <h2 className="title">Provide Solution for Better Future</h2>
                    <p>
                      We build robust solution using the latest technologies and best practices. Our expertise in
                      state-of-the-art technologies enables you to stay ahead infront of the market. Our developers
                      create user-centric solution with seamless functionality and intuitive design across platforms.
                    </p>
                    <p>
                      Experience immersive engagement with augmented and virtual reality. We deliver memorable
                      experiences by leveraging AR/VR technology.
                    </p>
                    <p>
                      Collaboration is at the core of our approach. We provide tailored solutions that drive business
                      growth and elevate brand experiences.
                    </p>
                    <p>Discover how our solutions can transform your business. Start your digital journey with us today.</p>
                  </div>
                  <div className="case-study-counterup">
                    <div className="single-counterup">
                      <h2 className="count-number">
                        <span className="number count" data-count="2">
                          2
                        </span>
                        <span className="symbol">+</span>
                      </h2>
                      <span className="counter-title">Years on the market</span>
                    </div>
                    <div className="single-counterup">
                      <h2 className="count-number">
                        <span className="number count" data-count="3">
                          3
                        </span>
                        <span className="symbol">+</span>
                      </h2>
                      <span className="counter-title">Projects delivered so far</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-padding bg-color-dark pb--80 pb_lg--40 pb_md--20">
          <div className="container">
            <div className="section-heading heading-light-left mb--100">
              <span className="subtitle">Our Values</span>
              <h2 className="title w-100">Why should you work with us?</h2>
              <p className="opacity-50 w-100">
                Working with us means collaborating with a team that is dedicated to your success. We prioritize
                communication, transparency, and delivering results that exceed expectations. With our expertise,
                personalized approach, and commitment to innovation, we are confident that we can provide the
                solutions you need to thrive in the digital landscape.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="about-quality active">
                  <h3 className="sl-number">I</h3>
                  <h5 className="title">Expertise and Innovation</h5>
                  <p>
                    When you choose to work with us, you gain access to a team of highly skilled professionals who are
                    at the forefront of their fields. We bring years of experience and a deep understanding of web
                    development, microservices and APIs, mobile development, and augmented and virtual reality.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="about-quality">
                  <h3 className="sl-number">II</h3>
                  <h5 className="title">Customized Solutions</h5>
                  <p>
                    We believe in the power of tailored solutions. We take the time to understand your unique
                    requirements, goals, and challenges. By doing so, we can create customized strategies and
                    applications that align with your business objectives.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="about-quality">
                  <h3 className="sl-number">III</h3>
                  <h5 className="title">Seamless Integration and Scalability</h5>
                  <p>
                    Our expertise in microservices and APIs allows us to develop applications that seamlessly integrate
                    with your existing systems. This promotes flexibility, scalability, and ease of future expansion.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <ul className="list-unstyled shape-group-10">
            <li className="shape shape-1"><img src="/assets/abstract/media/others/circle-1.png" alt="Circle" /></li>
            <li className="shape shape-2"><img src="/assets/abstract/media/others/line-3.png" alt="Circle" /></li>
            <li className="shape shape-3"><img src="/assets/abstract/media/others/bubble-5.png" alt="Circle" /></li>
          </ul>
        </section>

        <SiteFooter isSubpage />
      </div>
    </main>
  );
}
