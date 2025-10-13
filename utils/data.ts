const crLogin = require("@/assets/images/cr-login.png").default;
const crHome = require("@/assets/images/cr-home.png").default;
const crRates = require("@/assets/images/cr-rates.png").default;
const crCC = require("@/assets/images/cr-cc.png").default;
const crFooter = require("@/assets/images/cr-footer.png").default;

const vcAbout = require("@/assets/images/vc-about.png").default;
const vcBlog = require("@/assets/images/vc-blog.png").default;
const vcDirectory = require("@/assets/images/vc-directory.png").default;
const vcHome = require("@/assets/images/vc-home.png").default;
const vcCarousel = require("@/assets/images/vc-homeCarousel.png").default;

const edAi = require("@/assets/images/ed-ai.png").default;
const edDashboard = require("@/assets/images/ed-dashboard.png").default;
const edHome = require("@/assets/images/ed-home.png").default;
const edHomepage = require("@/assets/images/ed-homepage.png").default;
const edLogin = require("@/assets/images/ed-login.png").default;
const edNurse = require("@/assets/images/ed-nurseDM.png").default;
const edPlan = require("@/assets/images/ed-planDM.png").default;
const edProfile = require("@/assets/images/ed-profile.png").default;
const edAiDark = require("@/assets/images/ed-darkAi.png").default;

const mpH = require("@/assets/images/mp-home.png").default;
const mpHo = require("@/assets/images/mp-homep.png").default;
const mpHom = require("@/assets/images/mp-homepa.png").default;
const mpHome = require("@/assets/images/mp-dropdown.png").default;

const smsHome = require("@/assets/images/sms-home1.png").default;
const smsAbout = require("@/assets/images/sms-about.png").default;
const smsFaq = require("@/assets/images/sms-faqs.png").default;
const smsFooter = require("@/assets/images/sms-footer.png").default;
const smsOffices = require("@/assets/images/sms-offices.png").default;
const smsPartners = require("@/assets/images/sms-partners.png").default;
const smsPortfolio = require("@/assets/images/sms-portfolio.png").default;
const smsServices = require("@/assets/images/sms-services.png").default;
const smsWhy = require("@/assets/images/sms-why.png").default;
const smsV = require("@/assets/images/sms-v.png").default;

export default [
  {
    id: 1,
    title: "CEDIRATES - Compare Exchange Rates and Fuel Prices",
    description:
      "This platform provides up-to-date financial and economic information, built with Next.js, Tailwind CSS with shadcn/ui, Node.js, Express, and MongoDB. The homepage features RSS news feeds, live exchange rate widgets, current fuel prices, and interactive poll questions. Users can explore detailed exchange rates for the dollar, euro, and pound across banks, forex bureaus, card payments, money transfer services, and crypto fintech companies, along with FAQs and company advertisements. The fuel section displays prices for petrol, diesel, and premium. A built-in currency converter includes a historical chart and supports conversions across multiple currencies",
    logo: [crLogin, crHome, crRates, crCC, crFooter],
    skills: ["NEXT", "TAILWIND", "EXPRESS", "NODEJS", "MONGODB"],
    website: "https://cedirates.com/",
    status: "true",
  },
  {
    id: 5,
    title: "SUSTAINABLE MARKETING SOLUTIONS - Digital Marketing Agency",
    description: "Delivering marketing strategies, fostering partnerships, and inspiring change for a greener and more socially responsible world.",
    logo: [smsHome, smsAbout, smsFaq, smsFooter, smsOffices, smsPartners, smsPortfolio, smsServices, smsWhy, smsV],
    skills: ["WORDPRESS"],
    website: "https://darkviolet-ibex-383743.hostingersite.com/",
    status: "false",
  },
  {
    id: 2,
    title: "VILLAGE CREATORS - Celebrate creativity",
    // description: ", nurture growth, build community connections",
    description:
      "A content-managed website built with Sanity CMS and Nextjs featuring an informative carousel, a user form to collect contact details for updates, blog posts, and a directory page showcasing various businesses. All content is managed centrally through the CMS, allowing easy updates and content control.",
    logo: [vcHome, vcCarousel, vcBlog, vcDirectory, vcAbout],
    skills: ["NEXT", "BOOTSTRAP", "SANITY CMS"],
    website: "https://www.villagecreators.net/",
    status: "true",
  },
  {
    id: 3,
    title: "EDFRICA - Educative Management System",
    description:
      "An AI-powered exam platform built with React and MUI on the frontend, and Supabase/Node.js on the backend. Users access a central dashboard where they can take exams, interact with AI for questions, and receive personalized learning support. The platform features AI-driven quiz generation, progress tracking, and exam analysis. A scoreboard ranks users against others, while the notification panel and customizable settings (including contrast, layout, and direction) enhance user experience.",
    logo: [
      edHome,
      edHomepage,
      edLogin,
      edDashboard,
      edAiDark,
      edAi,
      edNurse,
      edPlan,
      edProfile,
    ],
    skills: ["REACT", "MUI", ""],
    website: "https://www.edfrica.com/",
    // website: "https://app.edfrica.com/",
    github: "https://github.com/eakelvin",
    status: "true",
  },
  {
    id: 4,
    title: "MAVE SPORTS - Sports Content",
    description:
      "MaveSports is a WordPress website designed for sports-related content, with a strong focus on design, aesthetics, and modern style. It features informative sliders, unique carousels, dropdown menus, and search functionality to enhance user experience and content discovery.",
    logo: [mpH, mpHo, mpHom, mpHome],
    skills: ["WORDPRESS"],
    website: "https://mavesportsnetwork.com/",
    status: "true",
  },

  // {
  //   "id": 20,
  //   "title": "",
  //   "description": "",
  //   "logo": "/images/",
  //   "skills": ["REACT", "CSS"],
  //   "website": "",
  //   "github": "",
  // },
];
