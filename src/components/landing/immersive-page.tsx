import Link from "next/link";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";

type Benefit = {
  title: string;
  description: string;
};

const virtualReality: Benefit[] = [
  {
    title: "Enhanced Engagement",
    description:
      "Virtual reality offers an immersive and interactive experience that engages users on a deeper level compared to traditional media. By leveraging VR solutions, businesses can captivate their audience, increase user engagement, and leave a lasting impression.",
  },
  {
    title: "Training and Simulation",
    description:
      "VR is a powerful tool for training and simulation across various industries. We can provide a solution of realistic training scenarios, simulations, and interactive learning experiences, leading to better knowledge retention, skill development, and performance improvement among employees.",
  },
  {
    title: "Product Visualization and Prototyping",
    description:
      "VR enables businesses to showcase products and prototypes in a virtual environment, allowing clients and stakeholders to visualize and interact with designs before they are finalized. The solutions can streamline product development, gather valuable feedback, and accelerate decision-making processes.",
  },
  {
    title: "Remote Collaboration and Communication",
    description:
      "In an increasingly digital and remote work environment, VR facilitates seamless collaboration and communication that can bring teams together in virtual spaces, enabling real-time collaboration, brainstorming sessions, and immersive meetings regardless of geographical distances, fostering productivity and creativity.",
  },
];

const augmentedReality: Benefit[] = [
  {
    title: "Enhanced Customer Engagement",
    description:
      "Augmented reality (AR) offers businesses a powerful tool to enhance customer engagement. By overlaying digital content onto the physical world, AR creates interactive and immersive experiences that captivate customers.",
  },
  {
    title: "Improved Product Visualization",
    description:
      "AR enables businesses to showcase products in a dynamic and interactive manner. Boosting customer confidence but also reduces the likelihood of returns and enhances overall customer satisfaction.",
  },
  {
    title: "Efficient Training and Education",
    description:
      "Businesses can use AR to create immersive training simulations, interactive manuals, and on-the-job guidance tools. This enhances employee learning experiences, improves retention of information, and accelerates skill development.",
  },
  {
    title: "Data-Driven Insights and Analytics",
    description:
      "Businesses can gather analytics on how customers interact with AR experiences, track engagement metrics, and gain valuable feedback. This data-driven approach enables businesses to optimize AR experiences and make data-informed decisions to drive business growth.",
  },
];

const mixedReality: Benefit[] = [
  {
    title: "Enhanced Visualization and Collaboration",
    description:
      "Mixed reality enables users to visualize complex data, designs, and concepts in 3D environments, facilitating better understanding and decision-making.",
  },
  {
    title: "Immersive Training and Simulation",
    description:
      "Business can simulate real-world scenarios, environments, and processes, providing hands-on training without the risks associated with traditional methods. This approach improves learning outcomes, reduces training costs, and enhances employee skills and confidence.",
  },
  {
    title: "Innovative Marketing and Customer Engagement",
    description:
      "Business can develop immersive product demonstrations, virtual showrooms, and interactive experiences that captivate audiences and differentiate your brand. This innovative approach to marketing fosters deeper engagement, increases brand awareness, and drives customer loyalty.",
  },
  {
    title: "Streamlined Product Development and Prototyping",
    description:
      "Allow teams to visualize and iterate on designs in a virtual environment, reducing time-to-market and costs associated with physical prototyping. This streamlined approach improves product quality, innovation, and competitiveness in the market.",
  },
];

function ServiceCards({ items }: { items: Benefit[] }) {
  return (
    <div className="row">
      {items.map((item) => (
        <div className="col-lg-6" key={item.title}>
          <div className="blog-grid blog-without-thumb mb-3">
            <div className="content">
              <h5 className="title">
                <a href="#section1">{item.title}</a>
              </h5>
              <p className="mb-0">{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function ImmersivePage() {
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
              <h1 className="title h2">Immersive Technology</h1>
              <p>
                Embark on a Journey of Innovation and Discovery with Our Immersive Technology
                Solutions, Redefining Reality to Create Unforgettable Experiences.
              </p>
            </div>
          </div>
        </div>

        <div className="service-scroll-navigation-area">
          <nav id="onepagenav" className="service-scroll-nav navbar onepagefixed">
            <div className="container">
              <ul className="nav nav-pills">
                <li className="nav-item"><a className="nav-link" href="#section1">Overview</a></li>
                <li className="nav-item"><a className="nav-link" href="#section2">Virtual Reality</a></li>
                <li className="nav-item"><a className="nav-link" href="#section3">Augmented Reality</a></li>
                <li className="nav-item"><a className="nav-link" href="#section4">Mixed Reality</a></li>
                <li className="nav-item"><a className="nav-link" href="#section5">Immersive Experiences</a></li>
              </ul>
            </div>
          </nav>

          <div className="section section-padding" id="section1">
            <div className="container">
              <div className="row">
                <div className="col-12 col-lg-6">
                  <div className="section-heading heading-left mb-3">
                    <h2 className="title">Overview</h2>
                    <span className="subtitle">Experience Beyond Boundaries with Immersive Tech</span>
                  </div>
                  <p>
                    At KetupArt Studio, we excel in AR/VR development, crafting immersive
                    experiences that push the boundaries of technology. Our dedicated team of
                    developers and designers combines expertise with industry best practices to
                    create captivating applications and simulations. Whether it&apos;s immersive
                    virtual reality experiences or augmented reality integrations in real-world
                    settings, we bring your visions to life. With a strong focus on user-centric
                    design and optimal performance, our AR/VR solutions engage users, enhance brand
                    experiences, and drive business growth.
                  </p>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="team-details-thumb">
                    <img
                      className="paralax-image"
                      src="/assets/abstract/media/banner/immersive.jpg"
                      alt="Immersive technology"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section section-padding bg-color-light pb-5" id="section2">
            <div className="container">
              <div className="section-heading heading-left mb--20 mb_md--70">
                <span className="subtitle">Service</span>
                <h2 className="title">Virtual Reality</h2>
              </div>
              <ServiceCards items={virtualReality} />
            </div>
            <ul className="shape-group-7 list-unstyled">
              <li className="shape shape-1"><img src="/assets/abstract/media/others/circle-2.png" alt="circle" /></li>
              <li className="shape shape-2"><img src="/assets/abstract/media/others/bubble-2.png" alt="line" /></li>
              <li className="shape shape-3"><img src="/assets/abstract/media/others/bubble-1.png" alt="line" /></li>
            </ul>
          </div>

          <div className="section section-padding pb-5" id="section3">
            <div className="container">
              <div className="section-heading heading-left mb--20 mb_md--70">
                <span className="subtitle">Service</span>
                <h2 className="title">Augmented Reality</h2>
              </div>
              <ServiceCards items={augmentedReality} />
            </div>
            <ul className="shape-group-7 list-unstyled">
              <li className="shape shape-1"><img src="/assets/abstract/media/others/circle-2.png" alt="circle" /></li>
              <li className="shape shape-2"><img src="/assets/abstract/media/others/bubble-2.png" alt="line" /></li>
              <li className="shape shape-3"><img src="/assets/abstract/media/others/bubble-1.png" alt="line" /></li>
            </ul>
          </div>

          <div className="section section-padding bg-color-light pb-5" id="section4">
            <div className="container">
              <div className="section-heading heading-left mb--20 mb_md--70">
                <span className="subtitle">Service</span>
                <h2 className="title">Mixed Reality</h2>
              </div>
              <ServiceCards items={mixedReality} />
            </div>
            <ul className="shape-group-7 list-unstyled">
              <li className="shape shape-1"><img src="/assets/abstract/media/others/circle-2.png" alt="circle" /></li>
              <li className="shape shape-2"><img src="/assets/abstract/media/others/bubble-2.png" alt="line" /></li>
              <li className="shape shape-3"><img src="/assets/abstract/media/others/bubble-1.png" alt="line" /></li>
            </ul>
          </div>

          <div className="section section-padding" id="section5">
            <div className="container">
              <div className="section-heading">
                <span className="subtitle">Service</span>
                <h2 className="title">Immersive Experiences</h2>
                <p className="w-100">
                  &quot;Clients should choose KetupArt Studio to embark on their journey in immersive
                  technology because we offer cutting-edge solutions that combine creativity,
                  expertise, and innovation, ensuring a transformative experience that captivates
                  audiences, enhances collaboration, and drives measurable results, ultimately
                  positioning them as leaders in their industry.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>

        <section className="section py-5 bg-color-dark">
          <div className="container">
            <div className="section-heading heading-light">
              <span className="subtitle">Let&apos;s Work Together</span>
              <h3 className="title">Need a successful Immersive Technology?</h3>
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
