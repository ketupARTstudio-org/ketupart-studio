import Link from "next/link";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";

const capabilities = [
  {
    title: "Microservices Architecture Design",
    description:
      "Expertise in designing scalable and resilient microservices architectures tailored to clients' business needs, ensuring agility, flexibility, and optimal performance.",
  },
  {
    title: "Microservices Development and Integration",
    description:
      "Proficiency in developing and integrating microservices using cutting-edge technologies, enabling rapid development cycles, seamless communication between services, and simplified maintenance.",
  },
  {
    title: "Microservices Deployment and Management",
    description:
      "Experience in deploying and managing microservices in cloud-native environments, leveraging automation and DevOps practices for continuous integration, delivery, and monitoring.",
  },
  {
    title: "Microservices Consulting and Strategy",
    description:
      "Consultative approach to help clients adopt microservices effectively, including assessing legacy systems, defining migration strategies, and providing guidance on best practices, governance, and security aspects.",
  },
] as const;

const techStack = [
  { src: "/assets/abstract/media/brand/laravel.png", alt: "Laravel", width: 300 },
  { src: "/assets/abstract/media/brand/netcore.png", alt: ".NET Core", width: 200 },
  { src: "/assets/abstract/media/brand/mysql.png", alt: "MySQL", width: 250 },
  { src: "/assets/abstract/media/brand/postgresql.png", alt: "PostgreSQL", width: 400 },
  { src: "/assets/abstract/media/brand/mssql.png", alt: "MSSQL", width: 350 },
  { src: "/assets/abstract/media/brand/redis.png", alt: "Redis", width: 300 },
] as const;

export function MicroservicePage() {
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
            backgroundImage: "url('/assets/abstract/media/banner/banner5.webp')",
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
              <h1 className="title h2">Microservices</h1>
              <p>
                Transform IT landscape with advanced microservice strategies, optimizing resource
                utilization, reducing time-to-market, and elevating overall business resilience.
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
                <li className="nav-item"><a className="nav-link" href="#section3">Architecture</a></li>
                <li className="nav-item"><a className="nav-link" href="#section4">Technology Stack</a></li>
              </ul>
            </div>
          </nav>

          <div className="section section-padding" id="section1">
            <div className="container">
              <div className="row">
                <div className="col-12 col-lg-6">
                  <div className="section-heading heading-left mb-3">
                    <h2 className="title">Overview</h2>
                    <span className="subtitle">Microservices: Driving Agile Innovation for Modern Businesses</span>
                  </div>
                  <p>
                    Microservices are a modular architectural style where applications are composed
                    of small, independent services that can be developed, deployed, and scaled
                    independently. Each service focuses on a specific business function, allowing
                    for rapid development, seamless integration, and easier maintenance.
                  </p>
                  <p>
                    We specialize in designing, implementing, and managing microservices
                    architectures tailored to your business needs. Our experienced team leverages
                    industry best practices, cutting-edge technologies, and agile methodologies to
                    deliver scalable, resilient, and future-ready solutions.
                  </p>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="team-details-thumb">
                    <img className="paralax-image" src="/assets/abstract/media/banner/cloud2.gif" alt="Microservices" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section section-padding bg-color-light" id="section2">
            <div className="container">
              <div className="section-heading heading-left mb--20 mb_md--70">
                <span className="subtitle">Service</span>
                <h2 className="title">Our Capabilities</h2>
              </div>
              <div className="row">
                {capabilities.map((item) => (
                  <div className="col-lg-6" key={item.title}>
                    <div className="blog-grid blog-without-thumb mb-3">
                      <div className="content">
                        <h5 className="title"><a href="#section2">{item.title}</a></h5>
                        <p className="mb-0">{item.description}</p>
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
                <span className="subtitle">Monolith VS Microservices</span>
                <h2 className="title">Architecture</h2>
              </div>
              <div className="row">
                <div className="col-12">
                  <p className="w-100">
                    Monolithic architecture represents a traditional approach where an entire
                    application is built as a single, tightly integrated unit. In contrast,
                    microservices architecture breaks down the application into smaller,
                    independent services that can be developed, deployed, and scaled independently.
                  </p>
                </div>
                <div className="col-12 col-lg-6">
                  <p className="w-100">
                    In a monolithic architecture, changes to one part of the application often
                    require rebuilding and redeploying the entire monolith, leading to longer
                    development cycles and increased risk. Scaling a monolith can also be
                    challenging, as the entire application needs to be scaled even if only a
                    specific component requires more resources.
                  </p>
                  <p className="w-100">
                    On the other hand, microservices architecture promotes agility, scalability,
                    and fault isolation. Each microservice focuses on a specific business function
                    and communicates with other services via APIs, allowing for parallel
                    development, faster deployment cycles, and better resource utilization.
                    Microservices can be scaled horizontally, meaning specific services can be
                    scaled independently based on demand, leading to improved performance and
                    cost-efficiency. Failures in one microservice are isolated, reducing the impact
                    on the overall application and improving fault tolerance. Overall, microservices
                    architecture offers a more flexible, resilient, and scalable approach to
                    building and managing modern applications.
                  </p>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="project branding">
                    <div className="project-grid">
                      <div className="thumbnail">
                        <div>
                          <img src="/assets/abstract/media/banner/microservice.png" alt="Monolith and Microservices" />
                        </div>
                      </div>
                      <div className="content p-3 text-center">
                        <h5 className="title">Monolith and Microservices</h5>
                        <p className="m-0">Go agile with microservices</p>
                      </div>
                    </div>
                  </div>
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
        </div>

        <section className="section py-5">
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
