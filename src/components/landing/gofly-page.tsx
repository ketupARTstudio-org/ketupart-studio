import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";

type VideoCard = {
  src: string;
  title: string;
  subtitle?: string;
};

const basicControl: VideoCard[] = [
  { src: "/assets/images/basic_control.mp4", title: "THROTTLE | YAW" },
  { src: "/assets/images/pitch_roll.mp4", title: "PITCH | ROLL" },
  { src: "/assets/images/combined.mp4", title: "COMBINATIONAL" },
];

const shotTechnique: VideoCard[] = [
  { src: "/assets/images/poi_room.mp4", title: "Point of Interest", subtitle: "(Room)" },
  { src: "/assets/images/8pattern_room.mp4", title: "8 Pattern Technique", subtitle: "(Room)" },
  { src: "/assets/images/poi.mp4", title: "Point of Interest" },
  { src: "/assets/images/8_patern.mp4", title: "8 Pattern Technique" },
];

const partners = [
  {
    href: "https://ketupartstudio.com/",
    image: "/assets/images/logo-ketupart.png",
    label: "KetupArt Studio",
  },
  {
    href: "https://dec4ir.com",
    image: "/assets/images/logo-DEC4IR.png",
    label: "Drone Edu Challenge IR 4.0",
  },
  {
    href: "https://mdec.my",
    image: "/assets/images/logo-mdec.png",
    label: "Malaysia Digital Economy Corporation",
  },
] as const;

export function GoFlyPage() {
  return (
    <main>
      <a href="#top" id="backto-top" className="back-to-top">
        <i className="far fa-angle-double-up" />
      </a>

      <div id="preloader" />

      <div id="main-wrapper" className="main-wrapper">
        <SiteHeader isSubpage />

        <section
          className="banner banner-style-2 d-flex align-items-center"
          id="op-home"
          style={{ height: "60vh", position: "relative", overflow: "hidden" }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: -2,
            }}
          >
            <source src="/assets/images/bg-gofly.mp4" type="video/mp4" />
          </video>
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: -1,
            }}
          />

          <div className="content" style={{ zIndex: 1, width: "100%" }}>
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-lg-12">
                  <div className="banner-content" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="100">
                    <h1 className="title">GoFly <br /> VR Drone Training</h1>

                    <a
                      href="#download-gofly"
                      className="axil-btn btn-fill-primary btn-large p-3"
                      style={{ backgroundColor: "#69696900", border: "1px solid #a1a1a1" }}
                    >
                      <div className="d-flex flex-row align-items-center justify-content-center">
                        <img
                          src="/assets/images/logo_gofly.png"
                          className="me-3"
                          style={{ width: 100, borderRadius: 10 }}
                          alt="GoFly"
                        />
                        <h4 className="mb-0"><i className="fa-solid fa-play" /> &nbsp;&nbsp;Start Playing</h4>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <ul className="list-unstyled shape-group-18">
              <li className="shape shape-2" data-sal="slide-right" data-sal-duration="1000" data-sal-delay="100">
                <img src="/assets/abstract/media/banner/banner-shape-2.png" alt="Shape" />
              </li>
              <li className="shape shape-3" data-sal="zoom-in" data-sal-duration="500" data-sal-delay="600">
                <img src="/assets/abstract/media/others/bubble-16.png" alt="Shape" />
              </li>
              <li className="shape shape-4" data-sal="zoom-in" data-sal-duration="500" data-sal-delay="600">
                <img src="/assets/abstract/media/others/bubble-14.png" alt="Shape" />
              </li>
              <li className="shape shape-5" data-sal="zoom-in" data-sal-duration="500" data-sal-delay="600">
                <img src="/assets/abstract/media/others/bubble-16.png" alt="Shape" />
              </li>
              <li className="shape shape-6" data-sal="zoom-in" data-sal-duration="500" data-sal-delay="600">
                <img src="/assets/abstract/media/others/bubble-16.png" alt="Shape" />
              </li>
              <li className="shape shape-7" data-sal="slide-down" data-sal-duration="500" data-sal-delay="600">
                <img src="/assets/abstract/media/others/bubble-16.png" alt="Shape" />
              </li>
            </ul>
          </div>
        </section>

        <section className="section section-padding-equal pb-0" id="download-gofly">
          <div className="container">
            <div className="section-heading heading-light-left">
              <div className="row">
                <div className="col-12 col-lg-6">
                  <h2>Train Like a Pro, Play Like a Champ</h2>
                  <p className="w-100">
                    Welcome to the ultimate drone simulation experience! Dive into a world where fun meets learning and take your skills to new heights.
                  </p>
                  <p className="w-100">Take control of your drone journey-start playing and training today!</p>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="thumbnail text-right">
                    <img src="/assets/images/meta-quest-3.png" alt="Meta Quest 3" />
                  </div>
                </div>
              </div>

              <div className="d-flex flex-column flex-lg-row mb-5">
                <a
                  href="https://sidequestvr.com/app/41261"
                  target="_blank"
                  rel="noreferrer"
                  className="axil-btn btn-fill-primary btn-large me-0 me-lg-3 mb-3"
                  style={{ backgroundColor: "#101227", border: "1px solid #101227" }}
                >
                  <h4 className="mb-0">
                    <img src="/assets/images/sidequest-white.webp" alt="SideQuest" style={{ width: 70 }} /> Get on Side Quest
                  </h4>
                </a>
                <a
                  href="https://sidequestvr.com/app/41261"
                  target="_blank"
                  rel="noreferrer"
                  className="axil-btn btn-fill-primary btn-large me-0 me-lg-3 mb-3"
                  style={{ backgroundColor: "#dc3545", border: "1px solid #dc3545" }}
                >
                  <h4 className="mb-0">
                    <img src="/assets/images/itchio.png" alt="itch.io" style={{ width: 80 }} /> Get on itch.io
                  </h4>
                </a>
                <a
                  href="#download-gofly"
                  className="axil-btn btn-fill-primary btn-large mb-3 d-flex flex-column align-items-center"
                  style={{ backgroundColor: "#0082fb", border: "1px solid #0082fb" }}
                >
                  <h4 className="mb-0">
                    <i className="fa-brands fa-meta" /> Get on Meta Store
                  </h4>
                  <small>(Coming Soon)</small>
                </a>
              </div>
            </div>
          </div>
          <ul className="list-unstyled shape-group-10">
            <li className="shape shape-1"><img src="/assets/abstract/media/others/circle-1.png" alt="Circle" /></li>
            <li className="shape shape-2"><img src="/assets/abstract/media/others/line-3.png" alt="Circle" /></li>
            <li className="shape shape-3"><img src="/assets/abstract/media/others/bubble-5.png" alt="Circle" /></li>
          </ul>
        </section>

        <section className="section section-padding" style={{ backgroundImage: "url('/assets/images/bg-gofly.png')", backgroundSize: "cover" }}>
          <div className="container">
            <div className="section-heading">
              <h2 className="title">Gameplay</h2>

              <span className="subtitle">BASIC DRONE CONTROL</span>
              <div className="d-flex flex-column flex-lg-row">
                {basicControl.map((item) => (
                  <div className="card bg-color-dark mb-2 me-lg-2" key={item.src}>
                    <div className="card-body p-0">
                      <video autoPlay muted loop playsInline style={{ width: "100%", height: "100%", objectFit: "cover", minWidth: 300, maxWidth: 450 }}>
                        <source src={item.src} type="video/mp4" />
                      </video>
                    </div>
                    <div className="card-footer"><h4 className="mb-0">{item.title}</h4></div>
                  </div>
                ))}
              </div>

              <br />
              <span className="subtitle">DRONE SHOT TECHNIQUE</span>
              <div className="d-flex flex-column flex-lg-row justify-content-center">
                {shotTechnique.map((item) => (
                  <div className="card me-lg-2 bg-color-dark mb-2" key={item.src}>
                    <div className="card-body p-0">
                      <video autoPlay muted loop playsInline style={{ width: "100%", height: "100%", objectFit: "cover", minWidth: 300, maxWidth: 450 }}>
                        <source src={item.src} type="video/mp4" />
                      </video>
                    </div>
                    <div className="card-footer">
                      <h4 className="mb-0">{item.title}</h4>
                      {item.subtitle ? <small>{item.subtitle}</small> : null}
                    </div>
                  </div>
                ))}
              </div>

              <br />
              <span className="subtitle">FREE FLY MODE</span>
              <div className="d-flex flex-row justify-content-center">
                <div className="card me-2 bg-color-dark">
                  <div className="card-body p-0">
                    <video autoPlay muted loop playsInline style={{ width: "100%", height: "100%", objectFit: "cover", minWidth: 300, maxWidth: 450 }}>
                      <source src="/assets/images/freefly.mp4" type="video/mp4" />
                    </video>
                  </div>
                  <div className="card-footer"><h4 className="mb-0">Free-Fly Mode</h4></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-padding" id="op-blog">
          <div className="container">
            <div className="section-heading">
              <span className="subtitle">Brought to you by</span>
            </div>
            <div className="d-flex flex-column flex-lg-row justify-content-between">
              {partners.map((partner) => (
                <div key={partner.href}>
                  <div className="card me-2 h-100">
                    <div className="card-body d-flex flex-row align-items-center justify-content-center">
                      <a href={partner.href} className="zoom-effect" target="_blank" rel="noreferrer">
                        <img src={partner.image} alt={partner.label} style={{ width: 200 }} />
                      </a>
                    </div>
                  </div>
                  <p className="text-center">{partner.label}</p>
                </div>
              ))}
            </div>
          </div>
          <ul className="shape-group-1 list-unstyled">
            <li className="shape shape-1"><img src="/assets/abstract/media/others/bubble-1.png" alt="bubble" /></li>
            <li className="shape shape-2"><img src="/assets/abstract/media/others/line-1.png" alt="bubble" /></li>
            <li className="shape shape-3"><img src="/assets/abstract/media/others/line-2.png" alt="bubble" /></li>
            <li className="shape shape-4"><img src="/assets/abstract/media/others/bubble-2.png" alt="bubble" /></li>
          </ul>
        </section>

        <div className="section section-padding-equal bg-color-light">
          <div className="container">
            <div className="about-expert">
              <div className="thumbnail">
                <img src="/assets/images/bg_drone.gif" alt="Thumbnail" style={{ width: "100vw" }} />
                <div className="popup-video">
                  <a href="https://www.youtube.com/watch?v=v1ADPXHMi3Q" className="play-btn popup-youtube" target="_blank" rel="noreferrer">
                    <i className="fas fa-play" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <ul className="shape-group-16 list-unstyled">
            <li className="shape shape-1"><img src="/assets/abstract/media/others/circle-2.png" alt="circle" /></li>
            <li className="shape shape-2"><img src="/assets/abstract/media/others/bubble-2.png" alt="Line" /></li>
            <li className="shape shape-3"><img src="/assets/abstract/media/others/bubble-1.png" alt="Line" /></li>
          </ul>
        </div>

        <SiteFooter isSubpage />
      </div>
    </main>
  );
}
