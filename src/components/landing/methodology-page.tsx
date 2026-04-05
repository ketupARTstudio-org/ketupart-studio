import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";

const steps = [
  {
    subtitle: "Step One",
    title: "Requirements Elicitation",
    description:
      "This stage involves gathering and documenting the specific needs, goals, and functionalities of the system. It includes conducting interviews, workshops, and surveys with stakeholders to ensure a clear understanding of their requirements.",
    image: "/assets/abstract/media/others/process-1.png",
    reverse: false,
  },
  {
    subtitle: "Step Two",
    title: "System Design",
    description:
      "In this phase, the requirements are transformed into a detailed system design. The architecture, modules, database structure, user interface, and other technical aspects are planned and documented. This stage acts as a blueprint for the development process.",
    image: "/assets/abstract/media/others/process-2.png",
    reverse: true,
  },
  {
    subtitle: "Step Three",
    title: "Development",
    description:
      "The development phase involves writing the code, implementing the system design, and building the required functionalities. Programmers and developers work together to create the software or application according to the defined requirements and design specifications.",
    image: "/assets/abstract/media/others/process-3.png",
    reverse: false,
  },
  {
    subtitle: "Step four",
    title: "Testing",
    description:
      "Once the development is complete, thorough testing is conducted to identify and fix any defects or issues. Different testing techniques, such as unit testing, integration testing, and system testing, are employed to ensure that the system functions correctly and meets the specified requirements.",
    image: "/assets/abstract/media/others/process-4.png",
    reverse: true,
  },
  {
    subtitle: "Step Five",
    title: "Deployment",
    description:
      "After successful testing, the system is deployed to the production environment. This may involve setting up servers, databases, and other necessary infrastructure components. The deployment process ensures that the system is accessible and available to the end-users.",
    image: "/assets/abstract/media/others/process-3.png",
    reverse: false,
  },
  {
    subtitle: "Step Six",
    title: "User Acceptance Testing",
    description:
      "During this stage, the system is tested by end-users to ensure it meets their expectations and fulfills the original requirements. Feedback is gathered, and any necessary adjustments or enhancements are made based on the users' input.",
    image: "/assets/abstract/media/others/process-4.png",
    reverse: true,
  },
  {
    subtitle: "Step Seven",
    title: "System Delivery",
    description:
      "Once the system has passed user acceptance testing and all necessary modifications have been made, it is ready for final delivery. This involves providing the client with the fully functional system, along with any relevant documentation and user manuals.",
    image: "/assets/abstract/media/others/process-3.png",
    reverse: false,
  },
] as const;

export function MethodologyPage() {
  return (
    <main>
      <a href="#top" id="backto-top" className="back-to-top">
        <i className="far fa-angle-double-up" />
      </a>

      <div id="preloader" />

      <div id="main-wrapper" className="main-wrapper">
        <SiteHeader isSubpage />

        <section className="section pb--70" id="top">
          <div className="container">
            <div className="section-heading mb--90">
              <span className="subtitle">Process</span>
              <h2 className="title">Our Development Methodology</h2>
              <p>Our comprehensive system design strategy ensures a perfectly crafted system for your business.</p>
            </div>

            {steps.map((step) => (
              <div
                className={`process-work ${step.reverse ? "content-reverse" : ""}`}
                data-sal={step.reverse ? "slide-left" : "slide-right"}
                data-sal-duration="1000"
                data-sal-delay="100"
                key={step.title}
              >
                <div className="thumbnail paralax-image">
                  <img src={step.image} alt={step.title} />
                </div>
                <div className="content">
                  <span className="subtitle">{step.subtitle}</span>
                  <h3 className="title">{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <ul className="shape-group-17 list-unstyled">
            <li className="shape shape-2"><img src="/assets/abstract/media/others/bubble-23.png" alt="Bubble" /></li>
            <li className="shape shape-3"><img src="/assets/abstract/media/others/line-4.png" alt="Line" /></li>
            <li className="shape shape-4"><img src="/assets/abstract/media/others/line-5.png" alt="Line" /></li>
            <li className="shape shape-5"><img src="/assets/abstract/media/others/line-4.png" alt="Line" /></li>
            <li className="shape shape-6"><img src="/assets/abstract/media/others/line-5.png" alt="Line" /></li>
          </ul>
        </section>

        <SiteFooter isSubpage />
      </div>
    </main>
  );
}
