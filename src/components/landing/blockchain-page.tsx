import Link from "next/link";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";

const capabilities = [
  {
    number: "1",
    title: "Blockchain Solutions Design",
    description:
      "We specialize in designing tailored blockchain solutions that align with your business objectives and industry requirements. Whether it's implementing private, public, or hybrid blockchain networks, developing smart contracts, or creating decentralized applications (dApps), we ensure that our blockchain solutions are scalable, secure, and interoperable.",
  },
  {
    number: "2",
    title: "Blockchain Integration Services",
    description:
      "Our team excels in integrating blockchain technology with existing systems and applications seamlessly. We leverage APIs, SDKs, and interoperability protocols to integrate blockchain into your ecosystem, enabling data sharing, transaction processing, and business logic execution across platforms.",
  },
  {
    number: "3",
    title: "Security and Compliance",
    description:
      "We prioritize security and compliance in blockchain development, implementing robust security measures such as cryptographic algorithms, access controls, and data encryption. Our expertise in regulatory compliance ensures that your blockchain solutions adhere to industry standards and legal requirements, mitigating risks and ensuring data privacy.",
  },
  {
    number: "4",
    title: "Blockchain Consulting and Training",
    description:
      "In addition to development services, we offer blockchain consulting and training to empower your teams with the knowledge and skills needed to leverage blockchain effectively. Our consultants provide strategic guidance, feasibility assessments, and roadmaps for blockchain adoption, while our training programs cover blockchain fundamentals, use cases, implementation best practices, and hands-on workshops for developers and stakeholders.",
  },
] as const;

const blockchainSolutions = [
  {
    title: "Blockchain Development and Integration",
    description:
      "We can develop custom blockchain solutions tailored to clients' specific needs, including decentralized applications (dApps), smart contracts, and blockchain-based platforms. We can integrate blockchain technology with existing systems to enhance security, transparency, and efficiency.",
  },
  {
    title: "Supply Chain Traceability",
    description:
      "Utilize blockchain to enable end-to-end traceability and transparency in supply chains. Implement blockchain solutions that track and authenticate products, streamline logistics, reduce counterfeit risks, and ensure compliance with regulatory standards.",
  },
  {
    title: "Digital Asset Management",
    description:
      "Offer digital asset management solutions leveraging blockchain technology. This includes tokenization of assets, creation of digital currencies or tokens, and implementation of asset-backed tokens for various industries such as real estate, finance, and art.",
  },
  {
    title: "Identity Management and Authentication",
    description:
      "Develop blockchain-based identity management solutions to enhance security and privacy. Enable business to verify and authenticate digital identities securely, reducing the risk of identity theft and fraud while ensuring data integrity and user consent.",
  },
] as const;

const securityFeatures = [
  {
    title: "Immutability and Data Integrity",
    description:
      "Blockchain's decentralized and distributed nature ensures immutability, making it nearly impossible to alter or tamper with data once recorded on the blockchain. This feature enhances data integrity and reduces the risk of fraud or unauthorized changes.",
    icon: "/assets/abstract/media/icon/icon-39.png",
  },
  {
    title: "Cryptography",
    description:
      "Blockchain relies on cryptographic techniques such as hashing, digital signatures, and encryption to secure transactions and data. Hash functions ensure data integrity by generating unique identifiers (hashes) for each block, while digital signatures authenticate transactions and verify participants' identities without revealing sensitive information.",
    icon: "/assets/abstract/media/icon/icon-29.png",
  },
  {
    title: "Consensus Mechanisms",
    description:
      "Consensus algorithms like Proof of Work (PoW), Proof of Stake (PoS), and others ensure network security and consensus among participants in validating and adding new blocks to the blockchain. These mechanisms prevent malicious actors from manipulating the blockchain and maintain network reliability.",
    icon: "/assets/abstract/media/icon/icon-31.png",
  },
  {
    title: "Access Control and Privacy Features",
    description:
      "Blockchain platforms often include access control mechanisms and privacy-enhancing features to protect sensitive information. Smart contracts can enforce access permissions, encryption can secure data at rest and in transit, and zero-knowledge proofs (ZKPs) can enable selective disclosure of information without revealing the underlying data.",
    icon: "/assets/abstract/media/icon/icon-32.png",
  },
] as const;

const ecosystem = [
  "/assets/abstract/media/brand/hyperledger_fabric.webp",
  "/assets/abstract/media/brand/hyperledger_explorer.png",
  "/assets/abstract/media/brand/ipfs.jpg",
] as const;

export function BlockchainPage() {
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
              <h1 className="title h2">Blockchain Technology</h1>
              <p>
                Unlocking the Potential of Blockchain for Enhanced Efficiency, Trust, and
                Decentralization in Today&apos;s Digital Landscape.
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
                <li className="nav-item"><a className="nav-link" href="#section3">Blockchain Solution</a></li>
                <li className="nav-item"><a className="nav-link" href="#section4">Security and Privacy</a></li>
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
                    <span className="subtitle">Empowering Trust in a Digital World with Blockchain</span>
                  </div>
                  <p>
                    We provide ground-breaking solutions that transform entire industries with
                    blockchain technology. Blockchain, a decentralized ledger technology,
                    facilitates transparent and tamper-proof record-keeping, improves security, and
                    guarantees data integrity. By utilizing decentralized and immutable systems,
                    our blockchain solutions enable organizations to optimize operations, decrease
                    expenditures, and cultivate confidence among stakeholders. Blockchain technology
                    is applied to supply chain management, digital identity verification, smart
                    contracts, and other processes to promote innovation, transparency, and
                    efficiency. We aid clients in capitalizing on new opportunities, mitigating
                    risks, and transforming their businesses for the digital age by leveraging our
                    blockchain expertise.
                  </p>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="team-details-thumb">
                    <img className="paralax-image" src="/assets/abstract/media/banner/blockchain.jpg" alt="Blockchain" />
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
              <div className="row">
                {capabilities.map((item) => (
                  <div className="col-12 col-lg-3" key={item.number}>
                    <div className="about-quality">
                      <div className="d-flex align-items-center">
                        <h4 className="sl-number">{item.number}</h4>
                        <h6 className="title">{item.title}</h6>
                      </div>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="row">
                <div className="col-12">
                  <p className="text-center opacity-50">
                    &quot;Unlock the power of blockchain technology with KetupArt Studio, where
                    innovation meets security, transparency, and efficiency to revolutionize your
                    business operations and drive sustainable growth in the digital era.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="section section-padding" id="section3">
            <div className="container">
              <div className="section-heading heading-left mb--20 mb_md--70">
                <span className="subtitle">Service</span>
                <h2 className="title">Blockchain Solution</h2>
              </div>
              <div className="row">
                {blockchainSolutions.map((item) => (
                  <div className="col-lg-6" key={item.title}>
                    <div className="blog-grid blog-without-thumb mb-3">
                      <div className="content">
                        <h5 className="title"><a href="#section3">{item.title}</a></h5>
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

          <div className="section section-padding bg-color-light" id="section4">
            <div className="container">
              <div className="row">
                <div className="col-12 col-lg-5">
                  <div className="section-heading heading-left mb-3">
                    <h2 className="title">Security and Privacy</h2>
                    <span className="subtitle">Safeguarding Data with Unbreakable Security and Unrivaled Privacy</span>
                  </div>
                  <p>
                    Blockchain technology offers robust security and privacy features that make it
                    an ideal choice for various applications, from financial transactions to supply
                    chain management and data sharing. Its decentralized and distributed nature
                    ensures data integrity and reduces the risk of fraud, while cryptographic
                    techniques secure transactions and authenticate participants. Consensus
                    mechanisms maintain network security, and access control and privacy features
                    protect sensitive information, making blockchain a trusted solution for secure
                    and transparent operations in the digital era.
                  </p>
                </div>
                <div className="col-12 col-lg-7">
                  <div className="row">
                    {securityFeatures.map((item) => (
                      <div className="col-12 col-lg-6" key={item.title}>
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

          <div className="section section-padding" id="section5">
            <div className="container">
              <div className="section-heading">
                <span className="subtitle">Service</span>
                <h2 className="title">Ecosystem</h2>
                <p className="w-100">
                  In our comprehensive blockchain ecosystem, we harness the power of Hyperledger,
                  a leading enterprise blockchain platform, alongside advanced cryptographic
                  algorithms, robust smart contracts, and decentralized consensus mechanisms. This
                  synergy of cutting-edge technologies ensures not only the utmost security and
                  privacy but also transparency and efficiency in every transaction, empowering
                  businesses to thrive in the digital age with trust and reliability at the core
                  of their operations.
                </p>
              </div>
              <div className="row">
                {ecosystem.map((src) => (
                  <div className="col-lg-4 h-100" data-sal="slide-up" data-sal-duration="500" key={src}>
                    <div className="brand-grid d-flex justify-content-center align-items-center">
                      <img src={src} alt="Blockchain Ecosystem" className="p-5" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center">
              <strong>Our Ecosystem of Blockchain</strong>
            </div>
          </div>
        </div>

        <section className="section py-5 bg-color-dark">
          <div className="container">
            <div className="section-heading heading-light">
              <span className="subtitle">Let&apos;s Work Together</span>
              <h3 className="title">Need a successful Blockchain Technology?</h3>
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
