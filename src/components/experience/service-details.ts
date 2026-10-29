import type { ServiceIconKind } from "./service-icons";

type ServiceDetail = {
  icon: ServiceIconKind;
  summary: string;
  highlights: { title: string; text: string }[];
};

// Condensed from the full service pages, keyed by the service's page href in data.ts.
export const serviceDetails: Record<string, ServiceDetail> = {
  "/consultancy": {
    icon: "strategy",
    summary:
      "We turn business goals into a realistic digital roadmap, from choosing the right technology to managing the change through to delivery.",
    highlights: [
      {
        title: "Digital strategy development",
        text: "Tailored strategies aligned with your objectives, backed by assessments and audits that define a clear roadmap.",
      },
      {
        title: "Technology consulting",
        text: "Advice on adopting AI, IoT, blockchain, cloud, and data analytics, and on improving your current infrastructure.",
      },
      {
        title: "Transformation execution",
        text: "Managing initiatives from planning to completion so new solutions fit smoothly into existing operations.",
      },
      {
        title: "Data, security, and training",
        text: "Analytics and governance, cybersecurity risk assessments, and workshops that build lasting capability in your team.",
      },
    ],
  },
  "/immersive": {
    icon: "immersive",
    summary:
      "We design and build virtual, augmented, and mixed reality applications that engage users and make complex ideas easy to understand.",
    highlights: [
      {
        title: "Training and simulation",
        text: "Realistic scenarios for hands-on practice without real-world risk, improving retention and skill development.",
      },
      {
        title: "Product visualization",
        text: "Let clients and stakeholders explore products and prototypes in 3D before anything is built.",
      },
      {
        title: "Customer engagement",
        text: "Interactive AR experiences, virtual showrooms, and demonstrations that make your brand memorable.",
      },
      {
        title: "Remote collaboration",
        text: "Shared virtual spaces for meetings and design reviews, wherever your team is located.",
      },
    ],
  },
  "/gamedevelopment": {
    icon: "game",
    summary:
      "End-to-end game development, from concept and prototyping through asset creation, programming, testing, and release.",
    highlights: [
      {
        title: "Engaging gameplay",
        text: "Compelling mechanics, intuitive controls, and well-paced levels that keep players coming back.",
      },
      {
        title: "Graphics and visual effects",
        text: "Polished 2D and 3D visuals, animation, and effects that bring your world to life.",
      },
      {
        title: "Multiplatform releases",
        text: "Games built for PC, console, mobile, and virtual reality to reach the widest audience.",
      },
      {
        title: "Multiplayer and social",
        text: "Multiplayer modes and community features that make playing together part of the experience.",
      },
    ],
  },
  "/cloudcomputing": {
    icon: "cloud",
    summary:
      "We plan, migrate, and run reliable cloud infrastructure on AWS, Azure, and Google Cloud, with security and cost in mind from day one.",
    highlights: [
      {
        title: "Strategy and migration",
        text: "A cloud roadmap built around scalability, security, and cost, followed by migration with minimal disruption.",
      },
      {
        title: "Application modernization",
        text: "Containers, microservices, APIs, and CI/CD pipelines that make your applications easier to scale and ship.",
      },
      {
        title: "Data and AI on the cloud",
        text: "Data pipelines, analytics, and AI models deployed and maintained on scalable infrastructure.",
      },
      {
        title: "Managed operations",
        text: "Proactive monitoring, optimization, and cost management to keep everything fast and affordable.",
      },
    ],
  },
  "/webdevelopment": {
    icon: "web",
    summary:
      "From company websites to complex portals and dashboards, we build web systems that are fast, responsive, and easy to maintain.",
    highlights: [
      {
        title: "Custom web development",
        text: "Websites and web applications tailored to your specific business goals and workflows.",
      },
      {
        title: "Responsive design",
        text: "Interfaces that work beautifully on every device and remain accessible to all users.",
      },
      {
        title: "Performance optimization",
        text: "Caching, image optimization, and server-side tuning for fast load times.",
      },
      {
        title: "Cloud and AI integration",
        text: "Automation, cloud services, and AI features that personalize content and streamline work.",
      },
    ],
  },
  "/mobiledevelopment": {
    icon: "mobile",
    summary:
      "We create user-centric apps for iOS and Android, taking them from strategy and design through to a successful store launch.",
    highlights: [
      {
        title: "Strategy and planning",
        text: "Clear goals, audience, and KPIs, with a realistic scope, timeline, and budget.",
      },
      {
        title: "Design",
        text: "UI/UX design, wireframes, and prototypes that put your users first.",
      },
      {
        title: "Development and testing",
        text: "Native, cross-platform, and progressive web apps, verified by thorough QA and user acceptance testing.",
      },
      {
        title: "Deployment",
        text: "App Store and Google Play release, version management, and post-launch support.",
      },
    ],
  },
  "/vr-classroom": {
    icon: "classroom",
    summary:
      "We prepare the equipment, room, charging, protection, and people behind a dependable VR learning environment, so educators can focus on teaching.",
    highlights: [
      {
        title: "Proven at scale",
        text: "82 headsets prepared across two fleets: 41 Pico 4 and 41 Meta Quest 3 / 3S sets.",
      },
      {
        title: "Classroom-ready setup",
        text: "Every unit charged, protected, configured, and stored as one complete operating system.",
      },
      {
        title: "Content deployment",
        text: "Learning experiences installed, tested, and ready for a full class to enter together.",
      },
      {
        title: "User onboarding",
        text: "Guidance on headset fit, controllers, safe movement, and returning and cleaning each set.",
      },
    ],
  },
};
