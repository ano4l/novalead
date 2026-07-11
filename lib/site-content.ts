export const siteNavigation = [
  { name: "Services", href: "/services/lead-generation" },
  { name: "Products", href: "/products" },
  { name: "Pricing", href: "/pricing" },
  { name: "Work", href: "/work" },
  { name: "Process", href: "/process" },
  { name: "Testimonials", href: "/testimonials" },
] as const;

export const services = [
  {
    slug: "lead-generation",
    eyebrow: "Growth systems",
    title: "Lead Generation",
    short:
      "Targeted demand, sharper offers, and follow-up built around the clients you want.",
    body:
      "NovaLeads builds lead generation around the market you actually want to win. We shape the offer, the campaign, the response flow, and the follow-up so interest turns into real opportunity.",
    outcomes: ["Sharper offers", "Cleaner follow-up", "Better lead flow"],
  },
  {
    slug: "web-software-development",
    eyebrow: "Digital infrastructure",
    title: "Web & Software Development",
    short:
      "Websites, landing pages, and practical software tools that make the business easier to trust and run.",
    body:
      "We design and build digital surfaces that explain the offer clearly and support the way the business operates. That can mean a focused landing page, a full website, or custom software that removes daily friction.",
    outcomes: ["Websites", "Landing pages", "Internal software"],
  },
  {
    slug: "automated-business-processes-ai-auditing",
    eyebrow: "Operations & AI",
    title: "Automated Business Processes & AI Auditing",
    short:
      "Automate repetitive workflows and audit AI systems for reliability and compliance.",
    body:
      "We design automated business processes to reduce manual work and friction, and perform AI auditing to ensure models behave reliably, route enquiries correctly, and support measurable outcomes.",
    outcomes: ["Process automation", "Operational efficiency", "AI audit insights"],
  },
  {
    slug: "branding-marketing",
    eyebrow: "Positioning",
    title: "Branding & Marketing",
    short:
      "Clear positioning, stronger messaging, and digital assets that make the offer easier to understand.",
    body:
      "We clarify how the business shows up, what it says, and why the audience should care. The goal is practical brand clarity that makes every campaign and page easier to trust.",
    outcomes: ["Messaging", "Visual direction", "Campaign assets"],
  },
  {
    slug: "automation-strategy",
    eyebrow: "Operations",
    title: "Automation & Strategy",
    short:
      "Better systems for repetitive work, sales handoff, admin drag, and growth decisions.",
    body:
      "We diagnose what slows the business down, then build the right process, automation, or strategy layer around it. The result is less manual drag and more room to move.",
    outcomes: ["Process mapping", "Automation", "Growth planning"],
  },
] as const;

export const novaProducts = [
  {
    slug: "siterent",
    name: "SiteRent",
    eyebrow: "Niche websites. Rented results.",
    short:
      "Rent a website month to month, with packages that scale based on how advanced the site needs to be.",
    body:
      "SiteRent is a Powered by Nova product for businesses that need a professional web presence without a heavy upfront build. Clients can rent the website monthly, choose a package based on complexity, and edit the site with AI as the business evolves.",
    features: ["Monthly website rental", "Package-based complexity", "AI website editing"],
    image: "/poweredbynova.jpeg",
    imageAlt: "Powered by Nova product logos",
    imageWidth: 1280,
    imageHeight: 640,
  },
  {
    slug: "bizstack",
    name: "BizStack",
    eyebrow: "Automate. Capture. Close.",
    short:
      "A business ERP for operations, inventory, sales visibility, and POS workflows when required.",
    body:
      "BizStack is a Powered by Nova business ERP inspired by the connected retail operating model: central control, stock visibility, sales capture, inventory management, and optional POS workflows for businesses that need one operational layer.",
    features: ["Inventory management", "Sales and operations visibility", "Optional POS system"],
    image: "/poweredbynova.jpeg",
    imageAlt: "Powered by Nova product logos",
    imageWidth: 1280,
    imageHeight: 640,
  },
  {
    slug: "auris",
    name: "Auris",
    eyebrow: "Always on. Always listening.",
    short:
      "An AI receptionist that answers calls, qualifies leads, and books appointments around the clock.",
    body:
      "Auris is a Powered by Nova AI receptionist built for businesses that cannot afford to miss an enquiry. It answers calls, captures caller intent, qualifies leads against your criteria, and books appointments directly into your calendar - without a human on standby.",
    features: ["24/7 AI call answering", "Lead qualification & capture", "Automated appointment booking"],
    image: "/Auris.png",
    imageAlt: "Auris AI receptionist product visual",
    imageWidth: 1536,
    imageHeight: 1024,
  },
] as const;

export const clients = [
  {
    name: "Mandela Awards Commission",
    image: "/testimonial1.jpeg",
    work: "Branding",
    note: "Brand presence and positioning support.",
  },
  {
    name: "Hidro Maquinas",
    image: "/testimonial2.png",
    work: "Web Development",
    note: "Website and digital presence support.",
  },
  {
    name: "Modern Mystery",
    image: "/ModernMysteryLogo.jpeg",
    work: "Web Development",
    note: "Website build for a construction, building maintenance, and supplies company.",
  },
  {
    name: "Joppa Construction",
    image: "/joppa-construction-logo.png",
    work: "Web Development",
    note: "Website build for a construction company.",
  },
] as const;

export const caseStudyIndustries = [
  "Automotive",
  "Healthcare",
  "HVAC",
  "Hospitality",
  "Professional Services",
  "Real Estate",
] as const;

export type CaseStudyIndustry = (typeof caseStudyIndustries)[number];

export const caseStudies = [
  {
    slug: "mandela-awards-commission",
    title: "Brand presence for a public-facing commission",
    client: "Mandela Awards Commission",
    industry: "Professional Services" as CaseStudyIndustry,
    work: "Branding and positioning support",
    summary:
      "A clearer public-facing brand presence for a commission that needed stronger positioning and presentation support.",
    outcome: "Brand presence and positioning support.",
    pullQuote: "Brand presence and positioning support.",
    image: "/testimonial1.jpeg",
    status: "Live client",
  },
  {
    slug: "hidro-maquinas",
    title: "Digital presence for a specialist business",
    client: "Hidro Maquinas",
    industry: "Professional Services" as CaseStudyIndustry,
    work: "Website and digital presence support",
    summary:
      "A focused web presence and supporting digital layer for a specialist operator that needed to be easier to understand online.",
    outcome: "Website and digital presence support.",
    pullQuote: "Website and digital presence support.",
    image: "/testimonial2.png",
    status: "Live client",
  },
  {
    slug: "ferreiras-autobody-parts",
    title: "Online ordering for an autobody parts specialist",
    client: "Ferreira's Autobody Parts",
    industry: "Automotive" as CaseStudyIndustry,
    work: "E-commerce platform and WhatsApp ordering assistant",
    summary:
      "A full e-commerce platform replacing manual phone and walk-in ordering, with vehicle-based part search.",
    outcome: "Outcome data will be added once the platform is live.",
    image: "/ferreiras_autobody_logo.jpeg",
    status: "Built · launching soon",
    videoEmbedUrl:
      "https://player.vimeo.com/video/1205943853?h=63916cf1ca&badge=0&byline=0&dnt=1&portrait=0&title=0",
    videoTitle: "Ferreira's Autobody Parts project demo",
  },
  {
    slug: "healthcare-intake",
    title: "Healthcare intake and missed-call slot",
    client: "APSUSM",
    industry: "Healthcare" as CaseStudyIndustry,
    work: "Auris intake audit",
    summary:
      "Reserved for an approved healthcare story covering call triage, appointment routing, and lead capture once client evidence is ready.",
    outcome: "Outcome copy pending approved client data.",
    pullQuote: "Video or testimonial pending.",
    image: "/APSMUSM-removebg-preview.png",
    status: "Awaiting content",
  },
  {
    slug: "hvac-response-flow",
    title: "HVAC response flow slot",
    client: "HVAC case study slot",
    industry: "HVAC" as CaseStudyIndustry,
    work: "Missed-call and follow-up audit",
    summary:
      "Reserved for an HVAC story focused on after-hours enquiries, call response, and faster sales handoff once content is approved.",
    outcome: "Outcome copy pending approved client data.",
    pullQuote: "Video or testimonial pending.",
    status: "Awaiting content",
  },
  {
    slug: "hospitality-booking",
    title: "Hospitality booking flow slot",
    client: "Hospitality case study slot",
    industry: "Hospitality" as CaseStudyIndustry,
    work: "Booking and enquiry audit",
    summary:
      "Reserved for a hospitality story covering booking enquiries, guest questions, and smoother follow-up once client content is approved.",
    outcome: "Outcome copy pending approved client data.",
    pullQuote: "Video or testimonial pending.",
    status: "Awaiting content",
  },
  {
    slug: "real-estate-enquiries",
    title: "Real estate enquiry handoff slot",
    client: "Real estate case study slot",
    industry: "Real Estate" as CaseStudyIndustry,
    work: "Lead routing and follow-up audit",
    summary:
      "Reserved for a real estate story focused on lead routing, appointment capture, and cleaner handoff once client content is approved.",
    outcome: "Outcome copy pending approved client data.",
    pullQuote: "Video or testimonial pending.",
    status: "Awaiting content",
  },
] as const;

export const pricingTiers = [
  {
    name: "Starter",
    status: "Visible starter package",
    priceLabel: "Starter audit",
    description:
      "A focused AI business audit for a team that needs a clear first move before committing to a larger automation build.",
    features: [
      "Missed-lead and response-flow review",
      "AI receptionist or automation fit check",
      "Priority action map for the next build step",
    ],
    cta: "Book starter audit",
    quoteGated: false,
    highlighted: true,
  },
  {
    name: "Growth",
    status: "Quote-gated",
    priceLabel: "Custom quote",
    description:
      "For businesses ready to connect lead capture, follow-up, and practical automation around a measurable growth bottleneck.",
    features: [
      "Audit findings translated into build scope",
      "Lead capture and follow-up workflow design",
      "Launch support and refinement window",
    ],
    cta: "Request growth quote",
    quoteGated: true,
    highlighted: false,
  },
  {
    name: "Full Suite",
    status: "Quote-gated",
    priceLabel: "Custom quote",
    description:
      "A wider operating layer across website, AI reception, software, and business process automation.",
    features: [
      "Website or landing-page system",
      "Auris, BizStack, or custom software scope",
      "Connected reporting and handoff design",
    ],
    cta: "Scope full suite",
    quoteGated: true,
    highlighted: false,
  },
  {
    name: "Enterprise",
    status: "Quote-gated",
    priceLabel: "Custom quote",
    description:
      "For teams that need a custom rollout, stakeholder alignment, and careful handling of data, operations, and adoption.",
    features: [
      "Custom discovery and rollout plan",
      "Multi-workflow implementation scope",
      "Governance, support, and review cadence",
    ],
    cta: "Talk enterprise",
    quoteGated: true,
    highlighted: false,
  },
] as const;

export const hiringComparison = [
  {
    area: "Coverage",
    hiring: "A hire typically covers a defined shift and needs backup when volume spikes.",
    nova:
      "Auris and automation can support enquiry capture outside normal hours, then route the next step to the team.",
  },
  {
    area: "Ramp time",
    hiring:
      "Recruitment, onboarding, scripts, and process training can delay the first useful output.",
    nova:
      "The audit starts by mapping the process, then the build is scoped around the bottleneck already found.",
  },
  {
    area: "Consistency",
    hiring:
      "Manual follow-up quality depends on availability, notes, and how busy the day gets.",
    nova:
      "Workflow rules, call capture, and handoff prompts keep the response path more consistent.",
  },
  {
    area: "Cost shape",
    hiring:
      "Salary, tools, management time, and replacement risk stay in the cost base.",
    nova:
      "Quote-gated packages are scoped around the system needed, with the starter audit clarifying fit first.",
  },
] as const;

export const processSteps = [
  {
    title: "Diagnose",
    body:
      "Find the clearest growth blockers across offer, website, sales flow, and operations.",
  },
  {
    title: "Design",
    body:
      "Shape the right mix of brand, web, software, automated business processes, AI auditing, lead flow, and automation.",
  },
  {
    title: "Deploy",
    body:
      "Launch with clean milestones, useful reporting, and practical support.",
  },
] as const;

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getNovaProduct(slug: string) {
  return novaProducts.find((product) => product.slug === slug);
}
