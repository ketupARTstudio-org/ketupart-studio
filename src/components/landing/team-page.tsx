import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";

export type TeamMember = {
  key: string;
  name: string;
  role: string;
  specialty: string;
  certifications: string[];
  image: string;
  modalId: string;
  bio: string;
};

export const teamMembers: TeamMember[] = [
  {
    key: "ismail",
    name: "Muhammad Ismail Mat Isham",
    role: "Founder / Director",
    specialty: "Immersive Tech Specialist",
    certifications: ["Unity Certified Associate: Game Developer"],
    image: "/assets/abstract/media/team/ismail.png",
    modalId: "ismailModal",
    bio: "Mr. Muhammad Ismail received his Master of Philosophy in Computer Science from UTM, with his research focused on psychomotor skills training using VR technology. He also has produced various 3D and VR applications for educational purposes.",
  },
  {
    key: "siang",
    name: "Chan Vei Siang",
    role: "Founder / Director",
    specialty: "Data Scientist / Data Analyst",
    certifications: [
      "Microsoft Certified: Power BI Data Analyst Associate",
      "Unity Certified Associate: Programmer",
      "Microsoft Certified: Azure AI Fundamentals",
      "Microsoft Certified: Power Platform Fundamentals",
      "Microsoft Certified: Azure Fundamentals",
    ],
    image: "/assets/abstract/media/team/chanveisiang.jpeg",
    modalId: "siangModal",
    bio: "Mr. Chan Vei Siang received his Master of Philosophy in Computer Science from UTM. His research focuses on Data Visualisation and Human-Computer Interaction. He also has expertise in web design and business analytics design.",
  },
  {
    key: "zulzayn",
    name: "Zulwaqar Zain Mohtar",
    role: "Co-Founder / Technical Partner",
    specialty: "Cloud Specialist / Full Stack Specialist",
    certifications: [
      "AWS Certified Solutions Architect",
      "AWS Certified Cloud Practitioner",
      "Microsoft Certified: Azure AI Fundamentals",
      "Microsoft Certified: Azure Data Fundamental",
      "Microsoft Certified: Azure Fundamentals",
      "Unity Certified User: Programmer",
    ],
    image: "/assets/abstract/media/team/zulzayn.jpeg",
    modalId: "zulZaynModal",
    bio: "Mr. Zulwaqar Zain received his Master of Philosophy in Software Engineering from UTM and is proficient in Web Technologies, Cloud Computing and Software Engineering. He has participated in various high-profile projects, including Digital Transformation of Health, Safety and Environment (HSE) for UMW Holdings, Digital Twin Offshore Pipeline for PETRONAS and Enterprise Resource Planning (ERP) for G&P Professionals Group.",
  },
];

export function TeamPage() {
  return (
    <main>
      <a href="#top" id="backto-top" className="back-to-top">
        <i className="far fa-angle-double-up" />
      </a>

      <div id="preloader" />

      <div id="main-wrapper" className="main-wrapper">
        <SiteHeader isSubpage />

        <div className="breadcrum-area breadcrumb-banner" id="top">
          <div className="container">
            <div className="section-heading heading-left" data-sal="slide-right" data-sal-duration="1000" data-sal-delay="300">
              <h1 className="title h2">Team</h1>
              <p>
                Build your solution with us and revolutionize the way forward with state-of-the-art technology
                that help people life.
              </p>
            </div>
            <div className="banner-thumbnail thumbnail-2" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="400">
              <img className="paralax-image" src="/assets/images/world-connect.png" alt="Illustration" />
            </div>
          </div>
          <ul className="shape-group-8 list-unstyled">
            <li className="shape shape-1" data-sal="slide-right" data-sal-duration="500" data-sal-delay="100">
              <img src="/assets/abstract/media/others/bubble-9.png" alt="Bubble" />
            </li>
            <li className="shape shape-2" data-sal="slide-left" data-sal-duration="500" data-sal-delay="200">
              <img src="/assets/abstract/media/others/bubble-21.png" alt="Bubble" />
            </li>
            <li className="shape shape-3" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300">
              <img src="/assets/abstract/media/others/line-4.png" alt="Line" />
            </li>
          </ul>
        </div>

        <section className="section-padding-equal">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12" data-sal="slide-left" data-sal-duration="800" data-sal-delay="100">
                <div className="about-team">
                  <div className="section-heading heading-left">
                    <span className="subtitle">Our Team</span>
                    <h2>Alone we can do so little; together we can do so much.</h2>
                    <p>&quot;Our team believes that alone, we can do so little, but together, we can achieve so much.&quot;</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-padding bg-color-dark pb--70 pb_lg--20 pb_md--0">
          <div className="container">
            <div className="section-heading heading-light">
              <span className="subtitle">Strategic Leadership</span>
              <h2 className="title mb--50">Meet The Team</h2>
            </div>
            <div className="row">
              {teamMembers.map((member) => (
                <div className="col-12 col-lg-4" key={member.key}>
                  <div className="team-grid">
                    <div className="thumbnail">
                      <a href="#" data-bs-toggle="modal" data-bs-target={`#${member.modalId}`}>
                        <img src={member.image} alt={member.name} style={{ width: 200 }} />
                      </a>
                    </div>
                    <div className="content">
                      <h4 className="title">
                        <a href="#" data-bs-toggle="modal" data-bs-target={`#${member.modalId}`}>
                          {member.name}
                        </a>
                      </h4>
                      <span className="designation fw-bold">{member.role}</span>
                      <span className="designation">{member.specialty}</span>
                      <br />
                      <span className="designation">
                        <b>Professional Certified</b>
                      </span>
                      {member.certifications.map((cert) => (
                        <span className="designation" key={cert}>
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <ul className="list-unstyled shape-group-10">
            <li className="shape shape-1"><img src="/assets/abstract/media/others/circle-1.png" alt="Circle" /></li>
            <li className="shape shape-2"><img src="/assets/abstract/media/others/line-3.png" alt="Circle" /></li>
            <li className="shape shape-3"><img src="/assets/abstract/media/others/bubble-5.png" alt="Circle" /></li>
          </ul>
        </section>

        {teamMembers.map((member) => (
          <div className="modal fade" id={member.modalId} tabIndex={-1} aria-hidden="true" key={`${member.key}-modal`}>
            <div className="modal-dialog modal-dialog-centered modal-xl">
              <div className="modal-content bg-color-dark">
                <div className="modal-body p-0">
                  <a href="#" className="float-end text-white p-4" data-bs-dismiss="modal" aria-label="Close">
                    <i className="far fa-times-circle h5 mb-0" />
                  </a>
                  <div className="row">
                    <div className="col-12 col-lg-4">
                      <img src={member.image} alt={member.name} className="w-100" />
                    </div>
                    <div className="col-12 col-lg-8">
                      <div className="content d-flex flex-column h-100 justify-content-center">
                        <h4 className="title">{member.name}</h4>
                        <span className="designation fw-bold">{member.role}</span>
                        <span className="designation">{member.specialty}</span>
                        <p>{member.bio}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <SiteFooter isSubpage />
      </div>
    </main>
  );
}
