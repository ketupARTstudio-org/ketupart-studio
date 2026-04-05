import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";

type CaseStudyItem = {
  categoryClass: string;
  categoryLabel: string;
  title: string;
  description: string;
  image: string;
  link: string;
};

const caseStudies: CaseStudyItem[] = [
  {
    categoryClass: "education",
    categoryLabel: "Education",
    title: "Beyond Limits: How We Handled 30,000 Participants in an Online National Drone Tournament",
    description:
      "This case study highlights our success in managing a 30,000-participant online drone tournament. Explore how we overcame challenges and optimized performance to deliver a seamless experience for all participants.",
    image: "/assets/abstract/media/casestudies/dec4irtournament.png",
    link: "https://www.linkedin.com/company/ketupart-studio/",
  },
  {
    categoryClass: "education",
    categoryLabel: "Education",
    title: "3D Drone View Application",
    description:
      "This case study is the development of mobile and desktop applications to teach the students about the component of drones. The 3D Drone View application is based on the request of UTM's lecturer to provide a means to teach the students during the drone setup workshop.",
    image: "/assets/abstract/media/casestudies/dronevr.png",
    link: "https://www.linkedin.com/company/ketupart-studio/",
  },
  {
    categoryClass: "engineering",
    categoryLabel: "Education",
    title: "VR Welding Kit",
    description:
      "We have researched and created VR Welding Kit, an affordable VR welding training simulation for mobile smartphones to train the student regarding basic welding's psychomotor skills.",
    image: "/assets/abstract/media/casestudies/vrweldingkit.png",
    link: "https://www.linkedin.com/company/ketupart-studio/",
  },
  {
    categoryClass: "manufacturing",
    categoryLabel: "Manufacturing",
    title: "UMW Aerospace VR Showcase",
    description:
      "This case study highlights our success in managing a 30,000-participant online drone tournament. Explore how we overcame challenges and optimized performance to deliver a seamless experience for all participants.",
    image: "/assets/abstract/media/casestudies/umwaerospace.png",
    link: "https://www.linkedin.com/company/ketupart-studio/",
  },
  {
    categoryClass: "healthcare",
    categoryLabel: "Healthcare",
    title: "Pelvic AR Mobile Application",
    description:
      "This case study is Pelvic AR, a mobile application that utilises an AR-based model target method to teach students about the human's pelvic structure. It is also a collaboration project with UTM's lecturer.",
    image: "/assets/abstract/media/casestudies/vrpelvic.png",
    link: "https://www.linkedin.com/company/ketupart-studio/",
  },
];

export function CaseStudyPage() {
  return (
    <main>
      <a href="#top" id="backto-top" className="back-to-top">
        <i className="far fa-angle-double-up" />
      </a>

      <div id="preloader" />

      <div id="main-wrapper" className="main-wrapper">
        <SiteHeader isSubpage />

        <section className="section" id="top">
          <div className="container">
            <div className="section-heading heading-left mb--40">
              <span className="subtitle">Case Studies</span>
              <h2 className="title">Case Study From The Field</h2>
            </div>

              <div className="axil-isotope-wrapper">
                <div className="isotope-button isotope-project-btn">
                  <button data-filter="*" className="is-checked"><span className="filter-text">All Case Studies</span></button>
                  <button data-filter=".education"><span className="filter-text">Education</span></button>
                  <button data-filter=".engineering"><span className="filter-text">Engineering</span></button>
                  <button data-filter=".manufacturing"><span className="filter-text">Manufacturing</span></button>
                  <button data-filter=".healthcare"><span className="filter-text">Healthcare</span></button>
                </div>

              <div className="row row-35 isotope-list">
                {caseStudies.map((study) => (
                  <div className={`col-md-6 project ${study.categoryClass}`} key={study.title}>
                    <div className="project-grid">
                      <div className="thumbnail">
                        <a href={study.link} target="_blank" rel="noreferrer">
                          <img src={study.image} alt={study.title} />
                        </a>
                      </div>
                      <div className="content d-flex flex-column justify-content-between" style={{ height: 350 }}>
                        <div>
                          <small className="fw-bold text-primary">{study.categoryLabel}</small>
                          <h5 className="title">
                            <a href={study.link} target="_blank" rel="noreferrer">
                              {study.title} &nbsp;<i className="fas fa-external-link-alt fs-6" />
                            </a>
                          </h5>
                          <span className="subtitle">{study.description}</span>
                        </div>
                        <div className="text-end">
                          <a href={study.link} target="_blank" rel="noreferrer" className="text-primary fw-bold">
                            Find out more <i className="fas fa-external-link-alt" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <ul className="shape-group-7 list-unstyled">
            <li className="shape shape-1"><img src="/assets/abstract/media/others/circle-2.png" alt="circle" /></li>
            <li className="shape shape-2"><img src="/assets/abstract/media/others/bubble-2.png" alt="line" /></li>
            <li className="shape shape-3"><img src="/assets/abstract/media/others/bubble-1.png" alt="line" /></li>
          </ul>
        </section>

        <SiteFooter isSubpage />
      </div>
    </main>
  );
}
