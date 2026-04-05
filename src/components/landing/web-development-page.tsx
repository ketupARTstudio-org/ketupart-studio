import Link from "next/link";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";

const capabilities = [
  {
    title: "Custom Web Development",
    description:
      "Tailoring unique and innovative web solutions that meet clients' specific business goals and requirements, from dynamic websites to complex web applications.",
    icon: "/assets/abstract/media/icon/icon-39.png",
  },
  {
    title: "Responsive Design",
    description:
      "Creating responsive and mobile-friendly websites that provide optimal user experiences across devices, ensuring accessibility and usability for all users.",
    icon: "/assets/abstract/media/icon/icon-29.png",
  },
  {
    title: "Cloud Integration and Automation",
    description:
      "Implementing cloud-based solutions and automation tools to streamline workflows, enhance scalability, and improve performance in web applications.",
    icon: "/assets/abstract/media/icon/icon-31.png",
  },
  {
    title: "Performance Optimization",
    description:
      "Optimizing website performance through techniques such as code minification, image optimization, caching strategies, and server-side optimizations, ensuring fast loading times and excellent user experience.",
    icon: "/assets/abstract/media/icon/icon-32.png",
  },
  {
    title: "AI-Based Web Development",
    description:
      "Leveraging artificial intelligence technologies to enhance user interactions, personalize content, and improve decision-making processes on web platforms.",
    icon: "/assets/abstract/media/icon/icon-32.png",
  },
] as const;

const conventionalApps = [
  "Personal Website",
  "To-Do-List App",
  "Blog Platform",
  "Weather App",
  "Recipe Sharing App",
  "Portfolio Tracker",
  "contact Management System",
  "Movie Database",
  "Blog Comment System",
  "Event Countdown",
  "Quiz App",
  "Chat Application",
  "Social Media Profile",
] as const;

const modernApps = [
  "Task Management App",
  "Forum or Bulletin Board",
  "E-commerce Platform",
  "Content Management System",
  "Travel Planner",
  "Fitness Tracking App",
  "Weather Dashboard",
  "Task Scheduling App",
  "Poling/Voting App",
  "Real Estate Listing Site",
  "Social Networking Platform",
  "E-Learning Platform",
  "Job Board",
  "Stock Trading Simulator",
  "Booking and Reservation System",
  "Music Streaming Service",
  "Online Auction Platform",
  "Task Automation Dashboard",
  "AI-powered Chatbot",
  "Blockchain-based Application",
] as const;

const futuristicApps = [
  "Healthcare Management System",
  "Smart Home Control System",
  "Streaming Video Platform",
  "AI-Powered recommendation System",
  "Ride-Sharing Services",
  "Financial Analytics Dashboard",
  "Language Translation Service",
  "Automated Stock Trading Bot",
  "Artificial Intelligence Chat Platform",
  "Predictive Analytics Platform",
  "Cybersecurity Monitoring System",
  "IoT-base Home Automation",
] as const;

const techStack = [
  { src: "/assets/abstract/media/brand/laravel.png", alt: "Laravel", width: 300 },
  { src: "/assets/abstract/media/brand/netcore.png", alt: ".NET Core", width: 200 },
  { src: "/assets/abstract/media/brand/mysql.png", alt: "MySQL", width: 250 },
  { src: "/assets/abstract/media/brand/postgresql.png", alt: "PostgreSQL", width: 400 },
  { src: "/assets/abstract/media/brand/mssql.png", alt: "MSSQL", width: 350 },
  { src: "/assets/abstract/media/brand/redis.png", alt: "Redis", width: 300 },
] as const;

const ecosystem = [
  { src: "/assets/abstract/media/brand/awswhite.avif", alt: "AWS", width: 250 },
  { src: "/assets/abstract/media/brand/azure.png", alt: "Azure", width: 300 },
  { src: "/assets/abstract/media/brand/gcp.png", alt: "GCP", width: 500 },
  { src: "/assets/abstract/media/brand/do.png", alt: "DigitalOcean", width: 300 },
  { src: "/assets/abstract/media/brand/hetzner.png", alt: "Hetzner", width: 300 },
  { src: "/assets/abstract/media/brand/vultr.png", alt: "Vultr", width: 300 },
  { src: "/assets/abstract/media/brand/linode.png", alt: "Linode", width: 300 },
] as const;

export function WebDevelopmentPage() {
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
            backgroundImage: "url('/assets/abstract/media/banner/banner2.webp')",
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
              <h1 className="title h2">Web Development</h1>
              <p>
                Empowering Businesses with Innovative Web Solutions: Where Creativity, Technology,
                and Strategy Converge to Build Exceptional Online Experiences for Lasting Impact
                and Sustainable Growth.
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
                <li className="nav-item"><a className="nav-link" href="#section3">System Type</a></li>
                <li className="nav-item"><a className="nav-link" href="#section4">Technology Stack</a></li>
                <li className="nav-item"><a className="nav-link" href="#section5">Ecosystem</a></li>
              </ul>
            </div>
          </nav>

          <div className="section section-padding" id="section1">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="section-heading heading-left mb-3">
                    <h2 className="title">Overview</h2>
                    <span className="subtitle">Crafting Solutions, Unleash Your Imagination</span>
                  </div>
                  <div className="row">
                    <div className="col-12 col-lg-6">
                      <p>
                        Our company specializes in professional web development services, delivering
                        high-quality websites that are visually appealing, user-friendly, and
                        optimized for performance. With a team of skilled developers and designers,
                        we offer comprehensive web development solutions tailored to meet your
                        specific business needs and objectives.
                      </p>
                      <p>
                        From custom website design to responsive web development, we leverage the
                        latest technologies and industry best practices to create engaging online
                        experiences that leave a lasting impression on your target audience. Our
                        expertise in front-end and back-end development ensures seamless
                        functionality, intuitive user interfaces, and robust backend systems that
                        power your website&apos;s performance.
                      </p>
                      <p>
                        Whether you require an e-commerce platform, a content management system, or
                        a corporate website, our web development services encompass a wide range of
                        solutions to help you establish a strong online presence and drive business
                        growth.
                      </p>
                    </div>
                    <div className="col-12 col-lg-6">
                      <div className="team-details-thumb">
                        <img
                          className="paralax-image"
                          src="/assets/abstract/media/banner/webdevelopment.gif"
                          alt="Web development"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section section-padding bg-color-light" id="section2">
            <div className="container">
              <div className="row">
                <div className="col-12 col-lg-5">
                  <div className="section-heading heading-left mb-3">
                    <h2 className="title">Our Capabilities</h2>
                    <span className="subtitle">
                      Your Vision, Our Expertise: Transforming Ideas into Digital Reality
                    </span>
                  </div>
                  <p>
                    As organizations deal with the increasing complexity of the digital
                    environment, KetupArt Studio stands ready to provide support. The convergence
                    of AI, the proliferation of mobility solutions, and the emergence of
                    cloud-based applications are compelling organizations across industries to
                    pursue accelerated, scalable application development solutions that are tailored
                    to their specific requirements.
                  </p>
                  <p>
                    At KetupArt Studio, we specialize in providing adaptable and individualized
                    solutions to assist organizations in the efficient management of their
                    application portfolios. We enable our clients to achieve significant
                    improvements by utilizing a blend of our validated implementation strategies and
                    benchmarks in the industry.
                  </p>
                  <p>
                    In addition to cost optimization, our Application Development and Maintenance
                    Services prioritize the creation of genuine value, the improvement of customer
                    experiences, and the promotion of innovation.
                  </p>
                </div>
                <div className="col-12 col-lg-7">
                  <div className="row">
                    {capabilities.map((capability) => (
                      <div className="col-12 col-lg-6" key={capability.title}>
                        <img src={capability.icon} alt={capability.title} />
                        <h5>{capability.title}</h5>
                        <p>{capability.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section section-padding" id="section3">
            <div className="container">
              <div className="section-heading heading-left">
                <h2 className="title">System Type</h2>
                <span className="subtitle">Some example system that you can work on with us</span>
                <div style={{ overflow: "scroll" }}>
                  <table className="w-100 table table-bordered text-white">
                    <tbody>
                      <tr>
                        <td style={{ width: "33.333%" }}><h5 className="mb-0 fw-bold">Conventional App</h5></td>
                        <td style={{ width: "33.333%" }}><h5 className="mb-0 fw-bold">Modern App</h5></td>
                        <td style={{ width: "33.333%" }}><h5 className="mb-0 fw-bold">Futuristic App</h5></td>
                      </tr>
                      <tr>
                        <td style={{ verticalAlign: "top" }}>
                          <div className="pricing-table active">
                            <div className="pricing-body">
                              <ul className="list-unstyled">
                                {conventionalApps.map((item) => (<li key={item}>{item}</li>))}
                              </ul>
                            </div>
                          </div>
                        </td>
                        <td style={{ verticalAlign: "top" }}>
                          <div className="pricing-table active">
                            <div className="pricing-body">
                              <ul className="list-unstyled">
                                {modernApps.map((item) => (<li key={item}>{item}</li>))}
                              </ul>
                            </div>
                          </div>
                        </td>
                        <td style={{ verticalAlign: "top" }}>
                          <div className="pricing-table active">
                            <div className="pricing-body">
                              <ul className="list-unstyled">
                                {futuristicApps.map((item) => (<li key={item}>{item}</li>))}
                              </ul>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="section section-padding bg-color-light" id="section4">
            <div className="container">
              <div className="section-heading heading-left">
                <span className="subtitle">Service</span>
                <h2 className="title">Technology Stack</h2>
                <p className="w-100">
                  &quot;Building microservices encompasses essential components such as
                  containerization, orchestration, backend development tools, API communication
                  frameworks, and database management systems. This ecosystem prioritizes
                  efficiency, scalability, and reliability, ensuring seamless system development
                  and operation.&quot;
                </p>
              </div>
              <div className="d-flex flex-wrap justify-content-center">
                {techStack.map((item) => (
                  <div className="h-100" data-sal="slide-up" data-sal-duration="500" key={item.alt}>
                    <div className="d-flex justify-content-center align-items-center">
                      <img src={item.src} alt={item.alt} className="p-5" style={{ width: item.width }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <strong>Our Ecosystem of Microservices</strong>
              </div>
            </div>
          </div>

          <div className="section section-padding" id="section5">
            <div className="container">
              <div className="section-heading">
                <span className="subtitle">Service</span>
                <h2 className="title">Ecosystem</h2>
                <p className="w-100">
                  KetupArt Studio advises, curates and orchestrates technologies from market-leading
                  partners and innovators. Together, we provide scalable, fully integrated cloud
                  solutions that deliver next-level results.
                </p>
              </div>
              <div className="d-flex flex-wrap justify-content-center">
                {ecosystem.map((item) => (
                  <div className="h-100" data-sal="slide-up" data-sal-duration="500" key={item.alt}>
                    <div className="d-flex justify-content-center align-items-center">
                      <img src={item.src} alt={item.alt} className="p-5" style={{ width: item.width }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center">
              <strong>Our Ecosystem of Cloud Computing</strong>
            </div>
          </div>
        </div>

        <section className="section py-5 bg-color-dark">
          <div className="container">
            <div className="section-heading heading-light">
              <span className="subtitle">Let&apos;s Work Together</span>
              <h2 className="title">Need a successful project?</h2>
              <Link href="/#contact" className="axil-btn btn-fill-primary btn-large">
                Estimate Project
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
