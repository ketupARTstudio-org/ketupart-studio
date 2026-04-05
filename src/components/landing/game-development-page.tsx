import Link from "next/link";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";

const gameHighlights = [
  {
    title: "Cutting-edge Graphics and Visual Effects",
    description:
      "Delivering immersive gaming experiences with stunning graphics, realistic animations, and captivating visual effects.",
    icon: "/assets/abstract/media/icon/icon-39.png",
  },
  {
    title: "Engaging Gameplay Mechanics",
    description:
      "Creating compelling gameplay mechanics, interactive elements, and challenging levels that keep players engaged and coming back for more.",
    icon: "/assets/abstract/media/icon/icon-29.png",
  },
  {
    title: "Multiplatform Compatibility",
    description:
      "Developing games that are compatible across multiple platforms, including PC, console, mobile, and virtual reality, ensuring a wide reach and accessibility for players.",
    icon: "/assets/abstract/media/icon/icon-31.png",
  },
  {
    title: "Robust Multiplayer and Social Features",
    description:
      "Implementing multiplayer modes, social integration, and community features that enhance player interaction, competitiveness, and social gaming experiences.",
    icon: "/assets/abstract/media/icon/icon-32.png",
  },
] as const;

export function GameDevelopmentPage() {
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
              <h1 className="title h2">Game Development</h1>
              <p>
                At the forefront of innovation, crafting engaging gameplay that captivates hearts
                and minds.
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
                <li className="nav-item"><a className="nav-link" href="#section3">Game Development</a></li>
                <li className="nav-item"><a className="nav-link" href="#section4">Technology &amp; Platform</a></li>
              </ul>
            </div>
          </nav>

          <div className="section section-padding" id="section1">
            <div className="container">
              <div className="row">
                <div className="col-12 col-lg-6">
                  <div className="section-heading heading-left mb-3">
                    <h2 className="title">Overview</h2>
                    <span className="subtitle">Crafting Virtual Worlds, Unleash Your Imagination</span>
                  </div>
                  <p>
                    At KetupArtStudio, we offer comprehensive game development services tailored to
                    bring your gaming ideas to life. Our team of experienced professionals
                    specializes in creating captivating and immersive gaming experiences across
                    various platforms.
                  </p>
                  <p>
                    With expertise in game design, we craft visually stunning and engaging gameplay
                    environments that captivate players and keep them coming back for more. From
                    concept development to character design, our creative team ensures that every
                    aspect of your game is meticulously designed to deliver an unforgettable gaming
                    experience.
                  </p>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="team-details-thumb">
                    <img
                      className="paralax-image"
                      src="/assets/abstract/media/banner/gamedev.jpg"
                      alt="Game development"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section section-padding bg-color-light" id="section2">
            <div className="container">
              <div className="section-heading heading-left">
                <span className="subtitle">Service</span>
                <h2 className="title">Our Capabilities</h2>
                <div>
                  <p className="w-100">
                    We leverage the latest technologies and industry best practices to develop
                    robust and high-performance games. Our developers are proficient in various game
                    engines and programming languages, allowing us to create games that run
                    seamlessly across different devices and platforms.
                  </p>
                  <p className="w-100">
                    We understand the importance of gameplay mechanics and controls in delivering an
                    enjoyable gaming experience. Our focus on intuitive and responsive controls
                    ensures that players can easily navigate through your game, enhancing their
                    immersion and enjoyment.
                  </p>
                  <p className="w-100">
                    From casual mobile games to complex multiplayer experiences, we have the
                    expertise to handle projects of any scale. We collaborate closely with our
                    clients throughout the development process, ensuring that their vision is
                    brought to life while incorporating our industry knowledge and expertise.
                  </p>
                  <p className="w-100">
                    Whether you&apos;re an indie developer or a game studio, we provide end-to-end
                    game development solutions, including concept ideation, prototyping, asset
                    creation, programming, testing, and deployment. Our commitment to quality and
                    client satisfaction ensures that we deliver games that exceed expectations.
                  </p>
                  <p className="w-100">
                    Partner with us to turn your game development dreams into reality. Let us take
                    your gaming ideas and transform them into immersive, interactive, and
                    unforgettable gaming experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="section section-padding" id="section3">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="section-heading mb-3">
                    <h2 className="title">Game Development</h2>
                    <span className="subtitle">
                      From Concept to Creation: Navigating the Game Development Journey
                    </span>
                  </div>
                  <p className="text-center">
                    Blockchain technology offers robust security and privacy features that make it
                    an ideal choice for various applications, from financial transactions to supply
                    chain management in the digital era.
                  </p>
                </div>
                <div className="col-12">
                  <div className="row">
                    {gameHighlights.map((item) => (
                      <div className="col-12 col-lg-6" key={item.title}>
                        <div className="d-flex align-items-center">
                          <img src={item.icon} alt={item.title} />
                          <h5 className="mb-0">{item.title}</h5>
                        </div>
                        <p>{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section section-padding bg-color-light" id="section4">
            <div className="container">
              <div className="section-heading heading-left">
                <span className="subtitle">Service</span>
                <h2 className="title">Technology &amp; Platform</h2>
                <p className="w-100">
                  Our game development process leverages cutting-edge technology platforms to create
                  immersive and captivating gaming experiences.
                </p>
              </div>
              <div className="d-flex flex-wrap justify-content-center">
                <div className="h-100" data-sal="slide-up" data-sal-duration="500">
                  <div className="d-flex justify-content-center align-items-center">
                    <img
                      src="/assets/abstract/media/brand/unitywhite.webp"
                      alt="Unity"
                      className="p-5"
                      style={{ width: 300 }}
                    />
                  </div>
                </div>
              </div>
              <div className="text-center">
                <strong>Our Game Development Tool</strong>
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
