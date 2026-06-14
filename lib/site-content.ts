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
    name: "Hidro Máquinas",
    image: "/testimonial2.jpeg",
    work: "Web Development",
    note: "Website and digital presence support.",
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
