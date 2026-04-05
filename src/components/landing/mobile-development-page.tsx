import Link from "next/link";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";

type Capability = {
  title: string;
  description: string;
};

const capabilities: Capability[] = [
  {
    title: "Strategize",
    description:
      "Strategizes by understanding business objectives, market trends, and user needs to formulate a clear roadmap for mobile app development. This involves defining project goals, target audience, and key performance indicators (KPIs) to ensure alignment with business objectives.",
  },
  {
    title: "Planning",
    description:
      "Through meticulous planning, we outlines the project scope, timeline, resource allocation, and budgeting requirements. This phase involves creating detailed project plans, defining milestones, and establishing communication channels to keep stakeholders informed throughout the development lifecycle.",
  },
  {
    title: "Design",
    description:
      "We create captivating and user-centric mobile app designs. This includes UI/UX design, prototyping, wireframing, and visual design elements that enhance user experience, usability, and brand identity, ensuring that the app resonates with the target audience.",
  },
  {
    title: "App Development",
    description:
      "Transforms design concepts into functional mobile applications. This involves frontend and backend development, coding, integration of features, APIs, and third-party services, ensuring scalability, performance, and functionality across platforms.",
  },
  {
    title: "Testing",
    description:
      "Testing processes ensure app quality, functionality, and performance. This includes unit testing, integration testing, user acceptance testing (UAT), and quality assurance (QA) testing to identify and resolve bugs, glitches, and compatibility issues, ensuring a seamless user experience.",
  },
  {
    title: "Deployment",
    description:
      "Deployment ensures a smooth launch and deployment of mobile apps. This involves app configuration, deployment to app stores (e.g., Apple App Store, Google Play Store), version management, and post-launch support, ensuring that the app reaches its intended audience and performs optimally in the market.",
  },
];

export function MobileDevelopmentPage() {
  return (
    <main>
      <a href="#top" id="backto-top" className="back-to-top">
        <i className="far fa-angle-double-up" />
      </a>

      <div id="preloader" />

      <div id="main-wrapper" className="main-wrapper">
        <SiteHeader isSubpage />

        <div
          className="breadcrum-area breadcrumb-banner"
          id="top"
          style={{
            backgroundImage: "url('/assets/abstract/media/banner/banner3.webp')",
            backgroundSize: "cover",
          }}
        >
          <div className="container">
            <div
              className="section-heading heading-left"
              data-sal="slide-right"
              data-sal-duration="1000"
              data-sal-delay="300"
            >
              <h1 className="title h2">Mobile Development</h1>
              <p>
                Unlocking the full potential of mobile technology to drive your business forward
                with innovative solutions that enhance customer engagement, streamline operations,
                and accelerate growth.
              </p>
            </div>
          </div>
        </div>

        <div className="service-scroll-navigation-area">
          <nav id="onepagenav" className="service-scroll-nav navbar onepagefixed">
            <div className="container">
              <ul className="nav nav-pills">
                <li className="nav-item"><a className="nav-link" href="#section1">Overview</a></li>
                <li className="nav-item"><a className="nav-link" href="#section2">Our Capabilities</a></li>
                <li className="nav-item"><a className="nav-link" href="#section3">Cross Platforms</a></li>
                <li className="nav-item"><a className="nav-link" href="#section4">Technology Stack</a></li>
                <li className="nav-item"><a className="nav-link" href="#section5">Ecosystem</a></li>
              </ul>
            </div>
          </nav>

          <div className="section section-padding" id="section1">
            <div className="container">
              <div className="row">
                <div className="col-12 col-lg-6">
                  <div className="section-heading heading-left mb-3">
                    <h2 className="title">Overview</h2>
                    <span className="subtitle">Crafting Virtual Worlds, Unleash Your Imagination</span>
                  </div>
                  <p>
                    Our company specializes in mobile development services, crafting high-quality
                    applications for various platforms.We create user-centric mobile applications
                    that prioritize seamless functionality, intuitive design, and optimal
                    performance.
                  </p>
                  <p>
                    Our expert mobile development team leverages the latest technologies and
                    industry best practices to deliver exceptional results. From concept to
                    deployment, we work closely with clients to understand their unique needs and
                    ensure the mobile app exceeds their expectations.
                  </p>
                  <p>
                    With our mobile development services, we help businesses reach and captivate
                    their target audiences in the ever-expanding mobile landscape.
                  </p>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="team-details-thumb">
                    <img
                      className="paralax-image"
                      src="/assets/abstract/media/banner/mobiledev.gif"
                      alt="Mobile development"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section section-padding bg-color-light" id="section2">
            <div className="container">
              <div className="section-heading heading-left mb--20 mb_md--70">
                <span className="subtitle">Service</span>
                <h2 className="title">Our Capabilitites</h2>
              </div>
              <div className="row">
                {capabilities.map((capability) => (
                  <div className="col-lg-6" key={capability.title}>
                    <div className="blog-grid blog-without-thumb mb-3">
                      <div className="content">
                        <h5 className="title">
                          <a href="#section2">{capability.title}</a>
                        </h5>
                        <p className="mb-0">{capability.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <ul className="shape-group-7 list-unstyled">
              <li className="shape shape-1"><img src="/assets/abstract/media/others/circle-2.png" alt="circle" /></li>
              <li className="shape shape-2"><img src="/assets/abstract/media/others/bubble-2.png" alt="line" /></li>
              <li className="shape shape-3"><img src="/assets/abstract/media/others/bubble-1.png" alt="line" /></li>
            </ul>
          </div>

          <div className="section section-padding" id="section3">
            <div className="container">
              <div className="section-heading">
                <span className="subtitle">Service</span>
                <h2 className="title">Cross Platforms</h2>
                <p className="w-100">
                  &quot;We specialize in diverse mobile development approaches to meet your unique
                  needs. Our cross-platform development expertise ensures that your app functions
                  seamlessly across iOS and Android devices, maximizing accessibility for your user
                  base. With hybrid-web applications, we blend the power of web technologies with
                  native components, delivering feature-rich apps that are easy to maintain and
                  update. Additionally, our proficiency in Progressive Web Applications (PWAs)
                  brings you web-based apps with native app-like experiences, including offline
                  functionality and push notifications, all accessible without the need for app
                  store downloads. These three approaches offer versatility, cost-effectiveness,
                  and broad compatibility, ensuring that your mobile presence is robust, engaging,
                  and accessible to a wide audience.&quot;
                </p>
              </div>
            </div>
          </div>

          <div className="section section-padding bg-color-light" id="section4">
            <div className="container">
              <div className="section-heading heading-left">
                <span className="subtitle">Service</span>
                <h2 className="title">Technology Stack</h2>
                <p className="w-100">
                  &quot;Building mobile apps encompasses essential components such as frontend
                  frameworks and UI Library. This ecosystem prioritizes efficiency, scalability,
                  and reliability, ensuring seamless system development and operation.&quot;
                </p>
              </div>
              <div className="d-flex flex-wrap justify-content-center">
                <div className="h-100" data-sal="slide-up" data-sal-duration="500">
                  <div className="d-flex justify-content-center align-items-center">
                    <img src="/assets/abstract/media/brand/flutter.png" alt="Flutter" className="p-5" style={{ width: 400 }} />
                  </div>
                </div>
                <div className="h-100" data-sal="slide-up" data-sal-duration="500" data-sal-delay="100">
                  <div className="d-flex justify-content-center align-items-center">
                    <img src="/assets/abstract/media/brand/vue.png" alt="Vue" className="p-5" style={{ width: 400 }} />
                  </div>
                </div>
                <div className="h-100" data-sal="slide-up" data-sal-duration="500" data-sal-delay="200">
                  <div className="d-flex justify-content-center align-items-center">
                    <img src="/assets/abstract/media/brand/angular.png" alt="Angular" className="p-5" style={{ width: 400 }} />
                  </div>
                </div>
              </div>
              <div className="text-center">
                <strong>Our Development Stack</strong>
              </div>
            </div>
          </div>

          <div className="section section-padding" id="section5">
            <div className="container">
              <div className="section-heading">
                <span className="subtitle">Service</span>
                <h2 className="title">Ecosystem</h2>
                <p className="w-100">All apps will be ready to be deploy at play store and app store.</p>
              </div>
              <div className="d-flex flex-wrap justify-content-center">
                <div className="h-100" data-sal="slide-up" data-sal-duration="500">
                  <div className="d-flex justify-content-center align-items-center">
                    <img src="/assets/abstract/media/brand/playstore.png" alt="Play Store" className="p-5" style={{ width: 500 }} />
                  </div>
                </div>
                <div className="h-100" data-sal="slide-up" data-sal-duration="500" data-sal-delay="100">
                  <div className="d-flex justify-content-center align-items-center">
                    <img src="/assets/abstract/media/brand/appstore.png" alt="App Store" className="p-5" style={{ width: 300 }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="section py-5 bg-color-dark">
          <div className="container">
            <div className="section-heading heading-light">
              <span className="subtitle">Let&apos;s Work Together</span>
              <h2 className="title">Need a successful project?</h2>
              <Link href="/#contact" className="axil-btn btn-fill-primary btn-large">
                Kick Start Project
              </Link>
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

        <SiteFooter isSubpage />
      </div>
    </main>
  );
}
