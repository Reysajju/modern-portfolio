const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/app/page.tsx');
let content = fs.readFileSync(filePath, 'utf-8');

// 1. Remove SponsorBanner component usage
content = content.replace('<SponsorBanner position="top" />', '');
content = content.replace('<SponsorBanner position="inline" />', '');

// 2. Update Footer text
content = content.replace(
    'Strategic Partner for Tech CEOs | Sponsored by Y Combinator',
    'Freelance Business Development Manager | Author'
);

// 3. Update Hero Section text
content = content.replace(
    'Strategic Partner for Tech CEOs',
    'Freelance Business Development Manager & Author'
);

const heroDescOld = `Independent consultant helping tech CEOs start, grow, and scale businesses.
            Expert in{" "}
            <span style={{ color: "#C5A059", fontWeight: 600 }}>
              strategy, B2B linking, and business backbone structuring
            </span>.`;

const heroDescNew = `A passionate Freelance Business Development Manager and Author. Focused on driving growth, building strategic B2B partnerships, and sharing the journey through compelling storytelling.
            <span style={{ color: "#C5A059", fontWeight: 600, display: "block", marginTop: "1rem" }}>
              Crafting systems for business success while penning the journey.
            </span>`;

content = content.replace(heroDescOld, heroDescNew);

// 4. Insert Profile Image
const profileImageOld = `<div className="absolute inset-0 flex items-center justify-center">
                <User size={48} className="md:size-16 lg:size-20" style={{ color: "#C5A059", opacity: 0.5 }} />
              </div>`;

const profileImageNew = `<Image 
                src="/images/Sajjad/sajjad (1).jpeg" 
                alt="Muhammad Sajjad Rasool" 
                fill 
                className="object-cover" 
                priority 
              />`;

content = content.replace(profileImageOld, profileImageNew);

// 5. Data replacement
const dataOld = `const experiences = [
  {
    date: "Jan 2026 - Present",
    role: "Independent Service Provider — Business & Tech Consultant for Tech CEOs",
    company: "Self-Employed",
    location: "Karachi, Pakistan",
    description: "Advising CEOs on strategy, GTM planning, and partnership deals. Building landing pages and MVP interfaces for validation and lead capture. Designing outreach and B2B connection strategies. Creating SOPs, process maps, and operational structure for scaling.",
    tags: ["Strategy Consulting", "GTM Planning", "B2B Linking", "Landing Pages", "SOPs"],
    type: "work"
  },
  {
    date: "Nov 2023 - Jan 2026",
    role: "Senior Executive — Quality Assurance & Landing Page Developer",
    company: "INTERSYS LTD",
    location: "Karachi, Pakistan",
    description: "Led quality monitoring and created QA frameworks. Designed landing pages for marketing and lead generation. Improved internal processes and customer experience.",
    tags: ["Quality Assurance", "Landing Pages", "Analytics", "Process Improvement"],
    type: "work"
  },
  {
    date: "Jan 2023 - Apr 2023",
    role: "Intern — Website Development",
    company: "BIZSOFT",
    location: "Karachi, Pakistan",
    description: "Built small websites and assisted frontend development. Supported deployment and client requirements handling.",
    tags: ["Web Development", "Frontend", "Deployment"],
    type: "work"
  },
  {
    date: "2018 - 2022",
    role: "BS Chemistry",
    company: "Federal Urdu University",
    location: "Karachi, Pakistan",
    description: "Graduated with GPA 3.6. Specialized in analytical chemistry with a focus on sustainable energy solutions.",
    tags: ["Chemistry", "GPA 3.6", "Analytical"],
    type: "education"
  },
];

const skills = [
  {
    title: "Strategic Planning",
    icon: Target,
    description: "Strategy, Business Development, B2B Linking",
    items: ["Strategic Planning & Business Development", "B2B Linking & Partnership Building", "Business Backbone Structure"]
  },
  {
    title: "Tech & Execution",
    icon: Zap,
    description: "Landing Pages, CRO, Web Development",
    items: ["Landing Pages, CRO, UI/UX Basics", "Webflow, WordPress, Tailwind, HTML/CSS", "SEO, Analytics, Conversion Tracking"]
  },
  {
    title: "Communication",
    icon: MessageSquare,
    description: "Stakeholder Management, Documentation",
    items: ["Stakeholder Management", "Project Coordination & Documentation", "English, Urdu, Saraiki"]
  },
  {
    title: "Business Growth",
    icon: TrendingUp,
    description: "Scaling, Operations, Process Design",
    items: ["GTM Strategy Design", "Operational Structure for Scaling", "Deal & Plan Making"]
  },
];

const articles = [
  { title: "The Chemistry of Startups", excerpt: "How molecular thinking applies to building scalable systems.", date: "Coming Soon", readTime: "5 min" },
  { title: "Strategic Partnerships 101", excerpt: "A guide to building meaningful B2B connections.", date: "Coming Soon", readTime: "4 min" },
  { title: "From Labs to Boardrooms", excerpt: "A personal journey from chemistry labs to consulting.", date: "Coming Soon", readTime: "6 min" },
];`;

const dataNew = `const experiences = [
  {
    date: "Jan 2025 - Present",
    role: "Freelance Business Development Manager & Author",
    company: "Self-Employed",
    location: "Global / Remote",
    description: "Specializing in crafting powerful B2B partnerships and driving strategic growth for tech-driven companies. Concurrently documenting my experiences, insights, and philosophical thoughts on business scaling and personal journey through my upcoming books and articles.",
    tags: ["Business Development", "B2B Sales", "Authoring", "Growth Strategy"],
    type: "work",
    image: "/images/Sajjad/sajjad (2).jpeg"
  },
  {
    date: "Nov 2023 - Jan 2025",
    role: "Senior Executive — Quality Assurance & Landing Page Developer",
    company: "INTERSYS LTD",
    location: "Karachi, Pakistan",
    description: "Led comprehensive quality monitoring, defining robust QA frameworks. Seamlessly blended technical execution with creative design by engineering high-converting landing pages tailored for aggressive marketing and B2B lead generation.",
    tags: ["Quality Assurance", "Landing Pages", "Analytics", "Process Improvement"],
    type: "work",
    image: "/images/Sajjad/sajjad (3).jpeg"
  },
  {
    date: "2018 - 2022",
    role: "BS Chemistry",
    company: "Federal Urdu University",
    location: "Karachi, Pakistan",
    description: "Graduated with a sharp analytical mindset. Transitioned the meticulous, detail-oriented nature of chemistry laboratory environments into business logic, scalable structure planning, and systems thinking.",
    tags: ["Systems Thinking", "Analytical", "Research"],
    type: "education",
    image: "/images/Sajjad/sajjad (4).jpeg"
  },
];

const skills = [
  {
    title: "Business Development",
    icon: Target,
    description: "Driving Revenue & Partnerships, Client Acquisition",
    items: ["B2B Linking", "Strategic Partnerships", "Lead Gen Strategies"]
  },
  {
    title: "The Author's Mind",
    icon: PenTool,
    description: "Storytelling, Deep Industry Insights, Content",
    items: ["Business Writing", "Journey Documentation", "Thought Leadership"]
  },
  {
    title: "Tech Executions",
    icon: Zap,
    description: "Landing Pages, Front-End Operations",
    items: ["Webflow/Tailwind", "CRO Optimization", "Performance Analytics"]
  },
  {
    title: "Communication",
    icon: MessageSquare,
    description: "Client Handling, Negotiation, Speaking",
    items: ["Stakeholder Management", "Deal Closures", "Multilingual"]
  },
];

const articles = [
  { title: "The Art of B2B Connections", excerpt: "Discovering the underlying chemistry behind profitable, long-lasting business partnerships and how to engineer them.", date: "Recent", readTime: "7 min", image: "/images/Sajjad/sajjad (5).jpeg" },
  { title: "From Chemistry Labs to Boardrooms", excerpt: "A vulnerable look into transitioning from a rigid science background to the dynamic chaos of tech business development.", date: "Featured", readTime: "5 min", image: "/images/Sajjad/sajjad (6).jpeg" },
  { title: "Drafting The Journey", excerpt: "Why every business professional should document their growth, failures, and the philosophical aspects of building a career.", date: "New", readTime: "6 min", image: "/images/Sajjad/sajjad (7).jpeg" },
];`;

content = content.replace(dataOld, dataNew);

// 6. Inject images into UI blocks

// In Archive mapped elements:
const archiveUiOld = `                    <p className="text-sm md:text-base mb-3 leading-relaxed" style={{ color: "#1B3022", opacity: 0.8 }} itemProp="description">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">`;

const archiveUiNew = `                    <p className="text-sm md:text-base mb-4 leading-relaxed" style={{ color: "#1B3022", opacity: 0.8 }} itemProp="description">
                      {exp.description}
                    </p>
                    {exp.image && (
                      <div className="relative w-full h-48 md:h-64 mb-4 rounded-xl overflow-hidden shadow-md">
                        <Image src={exp.image} alt={exp.role} fill className="object-cover" />
                      </div>
                    )}
                    <div className="flex flex-wrap gap-2">`;

content = content.replace(archiveUiOld, archiveUiNew);

// In Engine mapped elements:
const engineUiOld = `                <h3 
                  className="text-xl md:text-2xl lg:text-3xl font-bold mb-2"
                  style={{ color: index === 0 ? "#F5F2ED" : "#1B3022" }}
                >
                  {article.title}
                </h3>
                <p className="text-sm md:text-base mb-4" style={{ color: index === 0 ? "rgba(245, 242, 237, 0.7)" : "rgba(27, 48, 34, 0.7)" }}>
                  {article.excerpt}
                </p>`;

const engineUiNew = `                <h3 
                  className="text-xl md:text-2xl lg:text-3xl font-bold mb-3"
                  style={{ color: index === 0 ? "#F5F2ED" : "#1B3022" }}
                >
                  {article.title}
                </h3>
                {article.image && (
                  <div className="relative w-full h-56 md:h-72 mb-4 rounded-xl overflow-hidden shadow-lg border border-opacity-20 border-white">
                    <Image src={article.image} alt={article.title} fill className="object-cover" />
                  </div>
                )}
                <p className="text-sm md:text-base mb-4" style={{ color: index === 0 ? "rgba(245, 242, 237, 0.7)" : "rgba(27, 48, 34, 0.7)" }}>
                  {article.excerpt}
                </p>`;

content = content.replace(engineUiOld, engineUiNew);

// In Library featured project:
const libraryFeatOld = `              <h4 className="text-xl md:text-2xl font-bold mb-2" style={{ color: "#F5F2ED" }}>
                Solar Energy Systemization
              </h4>
              <p className="text-xs md:text-sm mb-4" style={{ color: "#C5A059" }}>
                Chemistry Expo 2022
              </p>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: "#F5F2ED", opacity: 0.8 }}>
                A comprehensive research project exploring sustainable energy solutions and their implementation in modern infrastructure.
              </p>`;

const libraryFeatNew = `              <h4 className="text-xl md:text-2xl font-bold mb-2" style={{ color: "#F5F2ED" }}>
                The Business Development Manual
              </h4>
              <p className="text-xs md:text-sm mb-4" style={{ color: "#C5A059" }}>
                Upcoming Publication
              </p>
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="relative w-full md:w-1/3 h-64 rounded-xl overflow-hidden shadow-2xl">
                   <Image src="/images/Sajjad/sajjad (8).jpeg" alt="Library Book Cover" fill className="object-cover" />
                </div>
                <div className="w-full md:w-2/3">
                  <p className="text-sm md:text-base leading-relaxed mb-4" style={{ color: "#F5F2ED", opacity: 0.8 }}>
                    A comprehensive, tactical guide specifically meant for technical founders and CEOs on how to build, scale, and maintain a high-performing business development pipeline. Synthesizes deep industry insights with actionable processes. 
                  </p>
                  <p className="text-sm md:text-base leading-relaxed" style={{ color: "#F5F2ED", opacity: 0.8 }}>
                    This masterclass in written format chronicles firsthand strategies on breaking into Fortune 500 networks and fostering relationships that yield million-dollar contracts.
                  </p>
                </div>
              </div>`;

content = content.replace(libraryFeatOld, libraryFeatNew);

// Arsenal padding with sajjad (9) image - wait, I need to match the JSX carefully
const arsenalHeadOld = `            <h2 
              className="text-3xl md:text-5xl lg:text-6xl font-bold mt-2"
              style={{ color: "#1B3022", fontFamily: "var(--font-playfair), serif" }}
            >
              The Arsenal
            </h2>
          </motion.header>

          <motion.div`;

const arsenalHeadNew = `            <h2 
              className="text-3xl md:text-5xl lg:text-6xl font-bold mt-2 mb-8"
              style={{ color: "#1B3022", fontFamily: "var(--font-playfair), serif" }}
            >
              The Arsenal
            </h2>
          </motion.header>

          <div className="mb-12 relative w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-xl">
             <Image src="/images/Sajjad/sajjad (9).jpeg" alt="Sajjad Profile Wide" fill className="object-cover object-top" />
          </div>

          <motion.div`;

content = content.replace(arsenalHeadOld, arsenalHeadNew);

// 7. Remove any "sponsored" tags left in the file just in case
content = content.replace('Sponsored by Y Combinator', '');

fs.writeFileSync(filePath, content, 'utf-8');
console.log("Done");
