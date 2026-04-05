import Link from "next/link";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";

const cloudStrategy = [
  {
    title: "Cloud Strategy Development",
    description:
      "We work closely with clients to understand their business objectives, challenges, and IT landscape. Our team formulates comprehensive cloud strategies aligned with your business goals, considering factors such as scalability, security, compliance, and cost-effectiveness.",
  },
  {
    title: "Cloud Migration Planning",
    description:
      "We assist in planning and executing seamless migration strategies to move your applications, data, and infrastructure to the cloud. Our approach focuses on minimizing disruption, optimizing performance, and maximizing the benefits of cloud technologies.",
  },
  {
    title: "Optimization and Cost Management",
    description:
      "Our experts analyze your cloud environment to identify opportunities for optimization and cost savings. We help you streamline resources, implement best practices, and leverage cost-effective cloud solutions without compromising performance or security.",
  },
  {
    title: "Security and Compliance",
    description:
      "Ensuring robust security and compliance measures is paramount in our cloud consulting services. We help design and implement security frameworks, data encryption, access controls, and compliance policies to protect your sensitive information and meet regulatory requirements.",
  },
  {
    title: "Hybrid and Multi-Cloud Strategies",
    description:
      "We develop strategies for integrating and managing hybrid and multi-cloud environments, providing flexibility, scalability, and resilience. Our approach enables you to leverage the strengths of different cloud platforms while maintaining interoperability and data consistency.",
  },
  {
    title: "Continuous Improvement and Innovation",
    description:
      "Our consulting services extend beyond initial deployment. We support ongoing monitoring, performance optimization, and continuous improvement initiatives. We also stay abreast of emerging cloud technologies and trends, advising on innovative solutions to drive business growth and competitiveness.",
  },
] as const;

const dataAndAi = [
  {
    title: "Data Management and Governance",
    description:
      "Your company specializes in comprehensive data management solutions on the cloud, including data storage, processing, and governance. This involves designing and implementing data pipelines, ensuring data quality and integrity, and establishing robust governance frameworks to meet regulatory requirements and ensure data privacy and security.",
  },
  {
    title: "Data Analytics and Insights",
    description:
      "Leveraging advanced analytics tools and techniques on cloud platforms, your company helps clients derive actionable insights from their data. This includes data visualization, predictive analytics, and machine learning models that uncover patterns, trends, and opportunities, empowering businesses to make informed decisions and drive growth.",
  },
  {
    title: "AI Solutions Development",
    description:
      "Your company excels in developing customized AI solutions on the cloud, ranging from natural language processing (NLP) and computer vision to recommendation engines and predictive modeling. These AI solutions are tailored to address specific business challenges, automate processes, enhance customer experiences, and unlock new revenue streams.",
  },
  {
    title: "AI Model Deployment and Management",
    description:
      "Beyond development, your company offers expertise in deploying AI models on cloud infrastructure, ensuring scalability, reliability, and performance optimization. This includes continuous monitoring, tuning, and management of AI models to adapt to changing data patterns and maintain effectiveness over time.",
  },
  {
    title: "Integration with Cloud Services",
    description:
      "Your Data & AI services seamlessly integrate with other cloud services and technologies, such as IoT platforms, big data frameworks, and cloud-native applications. This integration enables a holistic approach to data management, analytics, and AI, harnessing the full potential of cloud computing for innovation and competitive advantage.",
  },
] as const;

const modernization = [
  {
    title: "Legacy System Assessment",
    description:
      "We conduct a thorough assessment of your existing applications to identify legacy systems, outdated technologies, and areas for improvement. This assessment forms the basis for our modernization strategy.",
  },
  {
    title: "Cloud Migration Strategy",
    description:
      "We develop a strategic roadmap for migrating your applications to the cloud, considering factors such as scalability, security, compliance, and cost optimization. Our approach ensures a smooth transition with minimal disruption to your business operations.",
  },
  {
    title: "Containerization and Microservices",
    description:
      "Leveraging containerization technologies such as Docker and Kubernetes, we modularize your applications into microservices architecture. This enables flexibility, scalability, and easier management of individual components.",
  },
  {
    title: "API Integration and Modernization",
    description:
      "We modernize your application interfaces by implementing API-driven architectures. This allows seamless integration with other systems, enhances interoperability, and enables rapid development of new features and functionalities.",
  },
  {
    title: "DevOps Automation",
    description:
      "We implement DevOps practices and automation tools to streamline the development, testing, deployment, and monitoring of modernized applications. Continuous integration and delivery (CI/CD) pipelines ensure faster time-to-market and improved collaboration among development teams.",
  },
  {
    title: "Performance Optimization",
    description:
      "Our experts optimize the performance of modernized applications, leveraging cloud-native features such as auto-scaling, load balancing, and caching. This ensures optimal performance, reliability, and cost-efficiency in the cloud environment.",
  },
  {
    title: "Security and Compliance",
    description:
      "We prioritize security in every aspect of application modernization, implementing robust security measures, access controls, encryption, and compliance frameworks. Our solutions adhere to industry best practices and regulatory requirements, ensuring data protection and regulatory compliance.",
  },
] as const;

const managedServices = [
  {
    title: "Infrastructure Management",
    description:
      "Describe how your company handles the complete infrastructure management, including server provisioning, configuration, and maintenance, ensuring optimal performance and reliability.",
  },
  {
    title: "Monitoring and Optimization",
    description:
      "Highlight your proactive monitoring approach to detect issues early, optimize resource utilization, and ensure smooth operations while minimizing costs.",
  },
  {
    title: "Security and Compliance",
    description:
      "Emphasize your robust security measures, including data encryption, access controls, regular audits, and compliance with industry standards and regulations to protect sensitive information.",
  },
  {
    title: "Backup and Disaster Recovery",
    description:
      "Explain your backup strategies, data redundancy measures, and disaster recovery plans to ensure data integrity, minimize data loss, and quickly recover from unforeseen events.",
  },
  {
    title: "24/7 Support and SLA",
    description:
      "Mention your round-the-clock support services, Service Level Agreements (SLAs), and dedicated support teams to provide prompt assistance, resolve issues, and meet service commitments.",
  },
  {
    title: "Cost Optimization",
    description:
      "Discuss how your managed services help clients optimize costs by providing scalable solutions, efficient resource allocation, and transparent pricing models tailored to their needs and budget.",
  },
  {
    title: "Performance Monitoring and Reporting",
    description:
      "Describe your performance monitoring tools, regular performance assessments, and detailed reporting mechanisms to keep clients informed about their system's performance and improvements.",
  },
] as const;

const transformationBenefits = [
  {
    title: "Accelerated Digital Transformation and Innovation",
    description:
      "By adopting cloud technologies, clients can accelerate their digital transformation initiatives. They gain the agility to innovate faster, launch new products and services, and respond swiftly to market changes and customer demands.",
    icon: "/assets/abstract/media/icon/icon-39.png",
  },
  {
    title: "Improved Agility, Scalability, and Flexibility",
    description:
      "Cloud transformation enables clients to scale their resources up or down based on demand, ensuring optimal performance and cost-efficiency. They can quickly provision resources, experiment with new ideas, and adapt to evolving business needs without major infrastructure investments or limitations.",
    icon: "/assets/abstract/media/icon/icon-29.png",
  },
  {
    title: "Enhanced Data-Driven Decision-Making and Business Insights",
    description:
      "Leveraging cloud-based data platforms and advanced analytics, clients can derive actionable insights from their data. They gain a deeper understanding of customer behavior, market trends, and operational performance, empowering informed decision-making and strategic planning.",
    icon: "/assets/abstract/media/icon/icon-31.png",
  },
  {
    title: "Strengthened Security Posture and Compliance Adherence",
    description:
      "Your company's emphasis on cloud security ensures that clients' data and applications are protected against cyber threats. Robust security measures, encryption protocols, and access controls mitigate risks and ensure compliance with industry regulations and standards, enhancing trust and reputation.",
    icon: "/assets/abstract/media/icon/icon-32.png",
  },
  {
    title: "Cost Optimization and Operational Efficiency",
    description:
      "Cloud transformation optimizes IT costs by eliminating the need for extensive infrastructure maintenance and upgrades. Clients benefit from pay-as-you-go models, where they only pay for the resources they use, leading to cost savings and improved operational efficiency.",
    icon: "/assets/abstract/media/icon/icon-32.png",
  },
  {
    title: "Seamless User Experiences and Customer Satisfaction",
    description:
      "Cloud-native applications and services deliver seamless user experiences across devices and platforms. Clients can provide responsive, personalized services to their customers, driving satisfaction, loyalty, and competitive advantage in the market.",
    icon: "/assets/abstract/media/icon/icon-32.png",
  },
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

function CapabilityGroup({ title, items }: { title: string; items: readonly { title: string; description: string }[] }) {
  return (
    <blockquote className="wp-block-quote mt-0">
      <h4 className="mb-4">{title}</h4>
      <div className="row">
        {items.map((item) => (
          <div className="col-12 col-lg-6 mb-4" key={item.title}>
            <h5>{item.title}</h5>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </blockquote>
  );
}

export function CloudComputingPage() {
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
            backgroundImage: "url('/assets/abstract/media/banner/banner4.webp')",
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
              <h1 className="title h2">Cloud Computing</h1>
              <p>Experience the power of cloud computing: optimizing performance, reducing costs, and accelerating innovation.</p>
            </div>
          </div>
        </div>

        <div className="service-scroll-navigation-area">
          <nav id="onepagenav" className="service-scroll-nav navbar onepagefixed">
            <div className="container">
              <ul className="nav nav-pills">
                <li className="nav-item"><a className="nav-link" href="#section1">Overview</a></li>
                <li className="nav-item"><a className="nav-link" href="#section2">Our Capabilities</a></li>
                <li className="nav-item"><a className="nav-link" href="#section4">Cloud Transformation</a></li>
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
                    <span className="subtitle">Elevate Your Business with Cloud Computing Excellence</span>
                  </div>
                  <p>
                    With a focus on delivering comprehensive cloud computing solutions designed to empower businesses with agility, scalability, and efficiency. Our cloud services encompass a wide range of offerings, including Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS). From cloud infrastructure deployment and management to cloud-based application development and deployment, we tailor our services to meet the unique needs of each client. Our expertise in cloud technologies such as AWS, Azure, and Google Cloud ensures seamless migration, robust security, and optimized performance for your applications and data. Whether you&apos;re looking to optimize costs, improve flexibility, or enhance collaboration, our cloud solutions empower you to innovate and grow in the digital landscape.
                  </p>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="team-details-thumb">
                    <img className="paralax-image" src="/assets/abstract/media/banner/cloud5.gif" alt="Cloud Computing" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section section-padding bg-color-light" id="section2">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="section-heading">
                    <h2 className="title">Our Capabilities</h2>
                    <span className="subtitle">Among our most significant capabilities:</span>
                  </div>
                </div>
              </div>
              <div className="axil-isotope-wrapper">
                <div className="isotope-button isotope-project-btn text-center">
                  <button data-filter=".strategy" className="is-checked"><span className="filter-text">Cloud Strategy &amp; Consulting</span></button>
                  <button data-filter=".data"><span className="filter-text">Data &amp; AI on Cloud</span></button>
                  <button data-filter=".modern"><span className="filter-text">Application Modernization</span></button>
                  <button data-filter=".managed"><span className="filter-text">Managed Cloud Services</span></button>
                </div>
                <div className="row row-35 isotope-list">
                  <div className="col-md-12 project strategy"><CapabilityGroup title="Cloud Strategy & Consulting" items={cloudStrategy} /></div>
                  <div className="col-md-12 project data"><CapabilityGroup title="Data & AI on Cloud" items={dataAndAi} /></div>
                  <div className="col-md-12 project modern"><CapabilityGroup title="Application Modernization" items={modernization} /></div>
                  <div className="col-md-12 project managed"><CapabilityGroup title="Managed Cloud Services" items={managedServices} /></div>
                </div>
              </div>
            </div>
          </div>

          <div className="section section-padding" id="section4">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="section-heading mb-3">
                    <h2 className="title">Cloud Transformation</h2>
                    <span className="subtitle">Transform resiliency through cloud adoption</span>
                  </div>
                  <p>
                    In today&apos;s dynamic business landscape, harnessing the power of cloud technology is not just advantageous but imperative for staying competitive and agile. Our cloud transformation services are designed to revolutionize how businesses operate, innovate, and grow in the digital era.
                  </p>
                </div>
                <div className="col-12">
                  <div className="row">
                    {transformationBenefits.map((item) => (
                      <div className="col-12 col-lg-4" key={item.title}>
                        <img src={item.icon} alt={item.title} />
                        <h5>{item.title}</h5>
                        <p>{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section section-padding bg-color-light" id="section5">
            <div className="container">
              <div className="section-heading">
                <span className="subtitle">Service</span>
                <h2 className="title">Ecosystem</h2>
                <p className="w-100">KetupArt Studio advises, curates and orchestrates technologies from market-leading partners and innovators. Together, we provide scalable, fully integrated cloud solutions that deliver next-level results.</p>
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
