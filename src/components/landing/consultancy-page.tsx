import Link from "next/link";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";

const capabilities = [
  {
    number: "1",
    title: "Digital Strategy Development",
    items: [
      "Crafting tailored digital strategies aligned with your business objectives and market dynamics.",
      "Identifying opportunities for digital innovation and growth.",
      "Conducting thorough assessments and audits to define strategic roadmaps.",
    ],
  },
  {
    number: "2",
    title: "Technology Consulting",
    items: [
      "Providing counsel on the implementation and assimilation of state-of-the-art technologies including artificial intelligence, the Internet of Things, blockchain, cloud computing, and data analytics.",
      "Assessing current technological infrastructures and proposing improvements in terms of efficacy and scalability.",
      "Offering counsel on the selection of digital solutions and technology investments.",
    ],
  },
  {
    number: "3",
    title: "Customer Experience Enhancement",
    items: [
      "Customer journey design and optimization throughout digital channels.",
      "Customer engagement and personalized marketing strategy implementation.",
      "Utilizing data analytics to generate insights that contribute to enhanced consumer experiences.",
    ],
  },
  {
    number: "4",
    title: "Digital Transformation Execution",
    items: [
      "Managing digital transformation initiatives from inception to completion, including planning and execution.",
      "The effective management of change and the preparedness of organizations for digital initiatives.",
      "Guaranteeing the smooth incorporation of digital solutions into pre-existing business operations.",
    ],
  },
  {
    number: "5",
    title: "Data and Analytics Services",
    items: [
      "Developing predictive analytics models and data-driven strategies.",
      "Utilizing data to optimize performance, decision-making, and actionable insights.",
      "Ensuring data compliance and security while implementing frameworks for data governance.",
    ],
  },
  {
    number: "6",
    title: "Cybersecurity and Risk Management",
    items: [
      "Developing comprehensive security strategies and evaluating cybersecurity threats.",
      "Developing and deploying cybersecurity protocols and solutions to defend against threats.",
      "In order to mitigate hazards, audits and compliance assessments are performed.",
    ],
  },
  {
    number: "7",
    title: "Training and Capability Building",
    items: [
      "Providing workshops and training programs pertaining to digital best practices and competencies.",
      "Constructing organizational internal capabilities to facilitate sustainable digital transformation.",
      "To empower teams, provide ongoing support and knowledge transfer.",
    ],
  },
  {
    number: "8",
    title: "Performance Monitoring and Optimization",
    items: [
      "KPIs and metrics for monitoring and analyzing digital performance.",
      "Ongoing refinement of digital technologies, campaigns, and strategies.",
      "Agile methodology implementation for iterative innovation and enhancement.",
    ],
  },
] as const;

const impacts = [
  {
    title: "Business Growth and Market Expansion",
    description:
      "Helped business expand their market reach, enter new markets, and capture growth opportunities",
  },
  {
    title: "Cost Savings and Efficiency Improvements",
    description:
      "Savings achieved in areas like reduced operational costs, optimized processes, and streamlined workflows.",
  },
  {
    title: "Innovation and Agility",
    description:
      "Business become more agile, adaptive, and responsive to market changes, gaining a competitive edge.",
  },
  {
    title: "Data-Driven Insights and Decision-Making",
    description:
      "Business gained value from data analytics and insights in driving informed decision-making and strategic initiatives.",
  },
] as const;

export function ConsultancyPage() {
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
            backgroundImage: "url('/assets/abstract/media/banner/banner1.webp')",
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
              <h1 className="title h2">Digital Consultancy</h1>
              <p>
                Facilitating the connection between business and technology to achieve strategic
                results
              </p>
            </div>
          </div>
        </div>

        <div className="service-scroll-navigation-area">
          <nav id="onepagenav" className="service-scroll-nav navbar onepagefixed">
            <div className="container">
              <ul className="nav nav-pills">
                <li className="nav-item">
                  <a className="nav-link" href="#section1">
                    Overview
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#section2">
                    Digital Transformation
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#section3">
                    Our Capabilities
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#section4">
                    Customer Experience
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#section5">
                    Impact Created
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <div className="section section-padding" id="section1">
            <div className="container">
              <div className="row">
                <div className="col-12 col-lg-6">
                  <div className="section-heading heading-left mb-3">
                    <h2 className="title">Overview</h2>
                    <span className="subtitle">Navigate the Digital Landscape with Confidence</span>
                  </div>
                  <p>
                    Our expertise is in facilitating the integration of business and technology to
                    expedite the achievement of digital transformation goals for businesses of all
                    sizes. By providing strategic counsel, leveraging technological expertise,
                    offering change management assistance, and promoting continuous improvement, we
                    enable you to successfully traverse the challenges of digital transformation,
                    streamline the process, and achieve the desired business benefit.
                  </p>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="team-details-thumb">
                    <img
                      className="paralax-image"
                      src="/assets/abstract/media/banner/handshake.jpg"
                      alt="Handshake"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section section-padding bg-color-dark" id="section2">
            <div className="container">
              <div className="row">
                <div className="col-12 col-lg-5">
                  <div className="section-heading heading-left mb-3">
                    <h2 className="title">Digital Transformation</h2>
                    <span className="subtitle">
                      Reimagining business processes, empowering employees, and engaging customers
                    </span>
                  </div>
                  <p>
                    Digital transformation is no longer a mere trendy term in the contemporary
                    business environment; rather, it has evolved into a critical strategic necessity
                    for organizations that wish to prosper in the era of digitalization. KetupArt
                    Studio specializes in providing guidance to businesses as they navigate this
                    process of transformation by implementing innovative strategies and
                    state-of-the-art technologies to stimulate expansion, optimize operations, and
                    enhance client contentment.
                  </p>
                  <p>
                    Integrating digital technologies into every aspect of business operations
                    constitutes digital transformation, which profoundly alters the way in which
                    organizations function and provide value to their clients. Remaining agile in a
                    digital-first world requires more than simply implementing new tools or systems;
                    it also entails reimagining business processes, empowering employees, and
                    engaging customers.
                  </p>
                </div>
                <div className="col-12 col-lg-7">
                  <div className="row">
                    <div className="col-12 col-lg-6">
                      <img src="/assets/abstract/media/icon/icon-39.png" alt="Strategy and Vision" />
                      <h5>Strategy and Vision</h5>
                      <p>
                        We collaborate extensively with your executive team in order to establish a
                        distinct digital strategy that is in harmony with your organization&apos;s
                        objectives and the demands of your clientele. Our consultants aid you in
                        conceptualizing your organization&apos;s future state and developing a strategic
                        plan to achieve that vision.
                      </p>
                    </div>
                    <div className="col-12 col-lg-6">
                      <img src="/assets/abstract/media/icon/icon-29.png" alt="Technology Integration" />
                      <h5>Technology Integration</h5>
                      <p>
                        We assist you in capitalizing on the potential of nascent technologies
                        including data analytics, cloud computing, artificial intelligence, and the
                        Internet of Things. Our team of specialists guarantees a smooth
                        incorporation of these technologies into your current infrastructure,
                        thereby augmenting productivity and ingenuity.
                      </p>
                    </div>
                    <div className="col-12 col-lg-6">
                      <img src="/assets/abstract/media/icon/icon-31.png" alt="Change Management" />
                      <h5>Change Management</h5>
                      <p>
                        Digital transformation necessitates organizational and cultural shifts. We
                        facilitate change management processes for your teams, cultivate a mindset
                        that is prepared for the digital age, and encourage employees to adopt
                        novel approaches to work.
                      </p>
                    </div>
                    <div className="col-12 col-lg-6">
                      <img
                        src="/assets/abstract/media/icon/icon-32.png"
                        alt="Customer Experience Enhancement"
                      />
                      <h5>Customer Experience Enhancement</h5>
                      <p>
                        A fundamental aspect of digital transformation is the provision of
                        outstanding client experiences. We assist in the development and execution
                        of digital strategies that prioritize the consumer, utilizing data-driven
                        insights to tailor interactions and foster enduring connections.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section section-padding pb-4" id="section3">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="section-heading">
                    <h2 className="title">Our Capabilities</h2>
                    <span className="subtitle">Among our most significant capabilities:</span>
                  </div>
                </div>
              </div>
              <div className="row">
                {capabilities.map((capability) => (
                  <div className="col-12 col-lg-3" key={capability.number}>
                    <div className="about-quality">
                      <div className="d-flex align-items-center">
                        <h4 className="sl-number">{capability.number}</h4>
                        <h6 className="title">{capability.title}</h6>
                      </div>
                      <ul>
                        {capability.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
              <div className="row">
                <div className="col-12">
                  <p className="text-center opacity-50">
                    &quot;Whether you&apos;re embarking on a digital transformation journey, seeking
                    to enhance customer experiences, or looking to leverage data for strategic
                    insights, KetupArt Studio is your trusted partner in digital consultancy.
                    Contact us today to explore how we can unlock new opportunities and drive your
                    business forward in the digital era.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="section py-5 bg-color-dark" id="section4">
            <div className="container">
              <div className="section-heading">
                <span className="subtitle">Service</span>
                <h2 className="title">Customer Experience</h2>
                <p className="w-100 pb-0">
                  &quot;At KetupArt Studio, we enhance customer experience through personalized
                  interactions, tailoring our offerings to meet individual needs and preferences.
                  Our omni-channel engagement ensures a seamless experience across various
                  platforms, from websites to mobile apps, providing consistency and convenience.
                  User-centric design is at the core of our approach, creating intuitive interfaces
                  that enhance usability and satisfaction. Our responsive customer support team is
                  dedicated to addressing inquiries promptly, ensuring a positive customer service
                  experience. Proactive communication keeps customers informed and engaged, while
                  feedback mechanisms gather valuable insights to drive continuous improvement. This
                  commitment to enhancing customer experience has led to increased loyalty and
                  satisfaction among our customers, contributing to our success in the digital
                  landscape.&quot;
                </p>
              </div>
            </div>
          </div>

          <div className="section section-padding pb-4" id="section5">
            <div className="container">
              <div className="section-heading heading-left mb--20 mb_md--70">
                <span className="subtitle">Value Delivered</span>
                <h2 className="title">Impact Created</h2>
              </div>
              <div className="row">
                {impacts.map((impact, index) => (
                  <div className={`col-lg-3 ${index % 2 === 1 ? "mt--100 mt_md--0" : ""}`} key={impact.title}>
                    <div className="blog-grid blog-without-thumb">
                      <div className="content">
                        <h5 className="title">
                          <a href="#section5">{impact.title}</a>
                        </h5>
                        <p>{impact.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <ul className="shape-group-7 list-unstyled">
              <li className="shape shape-1">
                <img src="/assets/abstract/media/others/circle-2.png" alt="circle" />
              </li>
              <li className="shape shape-2">
                <img src="/assets/abstract/media/others/bubble-2.png" alt="Line" />
              </li>
              <li className="shape shape-3">
                <img src="/assets/abstract/media/others/bubble-1.png" alt="Line" />
              </li>
            </ul>
          </div>
        </div>

        <section className="section py-5 bg-color-dark">
          <div className="container">
            <div className="section-heading heading-light">
              <span className="subtitle">Let&apos;s Work Together</span>
              <h3 className="title">Need a successful Digital Consultancy?</h3>
              <Link href="/#contact" className="axil-btn btn-fill-primary btn-large">
                Kick Start Project
              </Link>
            </div>
          </div>
          <ul className="list-unstyled shape-group-9">
            <li className="shape shape-2">
              <img src="/assets/abstract/media/others/bubble-16.png" alt="Comments" />
            </li>
            <li className="shape shape-3">
              <img src="/assets/abstract/media/others/bubble-13.2.png" alt="Comments" />
            </li>
            <li className="shape shape-4">
              <img src="/assets/abstract/media/others/bubble-14.png" alt="Comments" />
            </li>
            <li className="shape shape-5">
              <img src="/assets/abstract/media/others/bubble-16.png" alt="Comments" />
            </li>
            <li className="shape shape-6">
              <img src="/assets/abstract/media/others/bubble-15.2.png" alt="Comments" />
            </li>
            <li className="shape shape-7">
              <img src="/assets/abstract/media/others/bubble-16.png" alt="Comments" />
            </li>
          </ul>
        </section>

        <SiteFooter isSubpage />
      </div>
    </main>
  );
}
