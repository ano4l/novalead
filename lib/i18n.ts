export type Locale = "en" | "pt";

export const locales: Locale[] = ["en", "pt"];

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  pt: "PT",
};

export const translations: Record<Locale, Record<string, string>> = {
  en: {
    "nav.services": "Services",
    "nav.products": "Products",
    "nav.pricing": "Pricing",
    "nav.work": "Work",
    "nav.process": "Process",
    "nav.contact": "Contact",
    "nav.refer": "Refer a Business",
    "nav.privacy": "Privacy Policy",
    "nav.terms": "Terms of Service",
    "nav.refund": "Refund Policy",
    "header.contact": "Contact",
    "footer.copyright": "Copyright",
    "footer.tagline":
      "Leads, web, software, AI reception, brand, strategy, and automation built as one growth system.",
    "footer.site": "Site",
    "footer.utility": "Utility",
    "footer.privacyStatement":
      "Data-handling statement pending Miguel/legal review.",
    "footer.clientLogin": "Client Login",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.refund": "Refund Policy",
    "contact.eyebrow": "Contact",
    "contact.title": "Start with a growth audit.",
    "contact.intro":
      "Open the fluid CTA, tell us what you want to improve, and we will map the clearest next move.",
    "contact.description":
      "The audit can cover lead generation, web and software development, automated business processes and AI auditing, branding, sales support, strategy, and automation.",
    "contact.cta": "Open audit request",
  },
  pt: {
    "nav.services": "Serviços",
    "nav.products": "Produtos",
    "nav.pricing": "Preços",
    "nav.work": "Projetos",
    "nav.process": "Processo",
    "nav.contact": "Contacto",
    "nav.refer": "Indique uma Empresa",
    "nav.privacy": "Política de Privacidade",
    "nav.terms": "Termos de Serviço",
    "nav.refund": "Política de Reembolso",
    "header.contact": "Contacto",
    "footer.copyright": "Direitos autorais",
    "footer.tagline":
      "Leads, web, software, receção AI, marca, estratégia e automação construídos como um único sistema de crescimento.",
    "footer.site": "Site",
    "footer.utility": "Utilidades",
    "footer.privacyStatement":
      "Declaração de tratamento de dados pendente de revisão legal.",
    "footer.clientLogin": "Login do Cliente",
    "footer.privacy": "Política de Privacidade",
    "footer.terms": "Termos de Serviço",
    "footer.refund": "Política de Reembolso",
    "contact.eyebrow": "Contacto",
    "contact.title": "Comece com uma auditoria de crescimento.",
    "contact.intro":
      "Abra o CTA fluido, conte-nos o que quer melhorar, e vamos mapear o próximo passo mais claro.",
    "contact.description":
      "A auditoria pode abranger geração de leads, desenvolvimento web e de software, processos de negócio automatizados e auditoria de IA, branding, suporte de vendas, estratégia e automação.",
    "contact.cta": "Abrir pedido de auditoria",
  },
};

export function normalizeLocale(locale: string | undefined | null): Locale {
  if (locale === "pt") return "pt";
  return "en";
}
