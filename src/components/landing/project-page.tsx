import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";

type ProjectItem = {
  category: "branding" | "mobile";
  title: string;
  subtitle: string;
  image: string;
};

const projects: ProjectItem[] = [
  {
    category: "branding",
    title: "Creative Agency",
    subtitle: "Full Branding, Website, App",
    image: "/assets/abstract/media/project/project-1.png",
  },
  {
    category: "mobile",
    title: "Digital Marketing",
    subtitle: "Logo, Website & Mobile App",
    image: "/assets/abstract/media/project/project-2.png",
  },
  {
    category: "branding",
    title: "Digital Agency",
    subtitle: "Website, UI/UX",
    image: "/assets/abstract/media/project/project-3.png",
  },
  {
    category: "mobile",
    title: "Plan Management",
    subtitle: "Branding, Website, IOS App",
    image: "/assets/abstract/media/project/project-4.png",
  },
  {
    category: "branding",
    title: "Social Engagement",
    subtitle: "Design, Development",
    image: "/assets/abstract/media/project/project-5.png",
  },
  {
    category: "mobile",
    title: "Web Application",
    subtitle: "Logo, Webapp, App",
    image: "/assets/abstract/media/project/project-6.png",
  },
];

export function ProjectPage() {
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
              <span className="subtitle">Projects</span>
              <h2 className="title">Some of Our Finest Work.</h2>
            </div>

            <div className="axil-isotope-wrapper">
              <div className="isotope-button isotope-project-btn">
                <button className="is-checked"><span className="filter-text">All Works</span></button>
                <button><span className="filter-text">Branding</span></button>
                <button><span className="filter-text">Mobile</span></button>
              </div>

              <div className="row row-35 isotope-list">
                {projects.map((project) => (
                  <div className={`col-md-6 project ${project.category}`} key={project.title}>
                    <div className="project-grid">
                      <div className="thumbnail">
                        <a href="#top">
                          <img src={project.image} alt={project.title} />
                        </a>
                      </div>
                      <div className="content">
                        <h4 className="title"><a href="#top">{project.title}</a></h4>
                        <span className="subtitle">{project.subtitle}</span>
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
