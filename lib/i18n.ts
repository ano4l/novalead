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

// The public pages use content objects and shared components, so this catalog
// also covers text rendered from those sources. Keeping the source phrase as
// the key lets the language widget translate content without duplicating every
// page's layout or changing URLs.
export const textTranslations: Record<string, string> = {
  "Growth systems": "Sistemas de crescimento",
  "Lead Generation": "Geração de leads",
  "Targeted demand, sharper offers, and follow-up built around the clients you want.":
    "Procura direcionada, ofertas mais claras e acompanhamento pensado para os clientes que quer conquistar.",
  "Sharper offers": "Ofertas mais claras",
  "Cleaner follow-up": "Acompanhamento mais eficaz",
  "Better lead flow": "Melhor fluxo de leads",
  "Digital infrastructure": "Infraestrutura digital",
  "Web & Software Development": "Desenvolvimento Web e de Software",
  "Websites, landing pages, and practical software tools that make the business easier to trust and run.":
    "Websites, landing pages e ferramentas de software práticas que tornam o negócio mais fácil de compreender e gerir.",
  "Websites": "Websites",
  "Landing pages": "Landing pages",
  "Internal software": "Software interno",
  "Operations & AI": "Operações e IA",
  "Automated Business Processes & AI Auditing": "Processos de Negócio Automatizados e Auditoria de IA",
  "Automate repetitive workflows and audit AI systems for reliability and compliance.":
    "Automatize fluxos de trabalho repetitivos e audite sistemas de IA para garantir fiabilidade e conformidade.",
  "Process automation": "Automação de processos",
  "Operational efficiency": "Eficiência operacional",
  "AI audit insights": "Insights da auditoria de IA",
  "Positioning": "Posicionamento",
  "Branding & Marketing": "Branding e Marketing",
  "Clear positioning, stronger messaging, and digital assets that make the offer easier to understand.":
    "Posicionamento claro, mensagens mais fortes e ativos digitais que tornam a oferta mais fácil de compreender.",
  "Messaging": "Mensagens",
  "Visual direction": "Direção visual",
  "Campaign assets": "Ativos de campanha",
  "Operations": "Operações",
  "Automation & Strategy": "Automação e Estratégia",
  "Better systems for repetitive work, sales handoff, admin drag, and growth decisions.":
    "Melhores sistemas para trabalho repetitivo, passagem de vendas, tarefas administrativas e decisões de crescimento.",
  "Process mapping": "Mapeamento de processos",
  "Automation": "Automação",
  "Growth planning": "Planeamento de crescimento",
  "Niche websites. Rented results.": "Websites de nicho. Resultados por subscrição.",
  "Rent a website month to month, with packages that scale based on how advanced the site needs to be.":
    "Alugue um website mês a mês, com pacotes que acompanham o nível de complexidade de que precisa.",
  "Monthly website rental": "Aluguer mensal de website",
  "Package-based complexity": "Complexidade por pacote",
  "AI website editing": "Edição de website com IA",
  "Automate. Capture. Close.": "Automatize. Capte. Conquiste.",
  "A business ERP for operations, inventory, sales visibility, and POS workflows when required.":
    "Um ERP empresarial para operações, inventário, visibilidade de vendas e fluxos de POS quando necessário.",
  "Inventory management": "Gestão de inventário",
  "Sales and operations visibility": "Visibilidade de vendas e operações",
  "Optional POS system": "Sistema POS opcional",
  "Always on. Always listening.": "Sempre ativo. Sempre atento.",
  "An AI receptionist that answers calls, qualifies leads, and books appointments around the clock.":
    "Uma rececionista de IA que atende chamadas, qualifica leads e marca reuniões 24 horas por dia.",
  "24/7 AI call answering": "Atendimento de chamadas por IA 24/7",
  "Lead qualification & capture": "Qualificação e captação de leads",
  "Automated appointment booking": "Marcação automática de reuniões",
  "Live client": "Cliente ativo",
  "Built · launching soon": "Desenvolvido · lançamento em breve",
  "Awaiting content": "A aguardar conteúdo",
  "Branding": "Branding",
  "Web Development": "Desenvolvimento Web",
  "Case study slot": "Espaço para caso de estudo",
  "Work": "Trabalho",
  "Hide demo": "Ocultar demonstração",
  "Watch demo": "Ver demonstração",
  "All": "Todos",
  "Automotive": "Automóvel",
  "Construction": "Construção",
  "Healthcare": "Saúde",
  "HVAC": "Climatização",
  "Hospitality": "Hotelaria",
  "Professional Services": "Serviços profissionais",
  "Real Estate": "Imobiliário",
  "Powered by Nova": "Powered by Nova",
  "Powered by Nova is the product layer behind NovaLeads: products we build, operate, and improve for businesses that need practical growth infrastructure.":
    "Powered by Nova é a camada de produtos por trás da NovaLeads: produtos que criamos, operamos e melhoramos para empresas que precisam de infraestrutura prática para crescer.",
  "Product systems for growth.": "Sistemas de produto para crescer.",
  "Nova products": "Produtos Nova",
  "Built to rent, run, and scale.": "Criados para alugar, operar e crescer.",
  "Each product is designed to remove one growth bottleneck without forcing the business into a heavy custom build from day one.":
    "Cada produto foi desenhado para remover um bloqueio de crescimento sem obrigar a empresa a começar logo com uma construção personalizada e pesada.",
  "Live layer": "Camada ativa",
  "Open product": "Abrir produto",
  "How it works": "Como funciona",
  "Turn a recurring business problem into a focused product offer.":
    "Transforme um problema empresarial recorrente numa oferta de produto focada.",
  "Create the website, ERP, AI editing, POS, or workflow layer around it.":
    "Crie à volta dele a camada de website, ERP, edição com IA, POS ou fluxo de trabalho.",
  "Use feedback, usage, and growth goals to make the product sharper.":
    "Use feedback, utilização e objetivos de crescimento para tornar o produto mais eficaz.",
  "Package the need": "Estruturar a necessidade",
  "Build the layer": "Construir a camada",
  "Keep improving": "Continuar a melhorar",
  "Lead capture": "Captação de leads",
  "Website rental": "Aluguer de website",
  "AI editing": "Edição com IA",
  "Inventory flow": "Fluxo de inventário",
  "Sales visibility": "Visibilidade de vendas",
  "Optional POS": "POS opcional",
  "Pricing": "Preços",
  "Audit-first packages.": "Pacotes com auditoria em primeiro lugar.",
  "Audit calculator": "Calculadora de auditoria",
  "What missed leads may cost.": "Quanto podem custar os leads perdidos.",
  "Missed calls/leads per week": "Chamadas/leads perdidos por semana",
  "Average job/client value": "Valor médio do trabalho/cliente",
  "Estimated monthly revenue leak": "Perda estimada de receita mensal",
  "Process": "Processo",
  "Method": "Método",
  "Diagnose, design, deploy.": "Diagnosticar, desenhar, implementar.",
  "Diagnose": "Diagnosticar",
  "Design": "Desenhar",
  "Deploy": "Implementar",
  "People worked with": "Pessoas com quem trabalhámos",
  "Brands moving into what is next.": "Marcas a avançar para o próximo passo.",
  "Know a business that should be here next?": "Conhece uma empresa que deveria estar aqui?",
  "Referral": "Referência",
  "Refer a business.": "Indique uma empresa.",
  "Keep it simple.": "Mantenha a simplicidade.",
  "Referral mechanism": "Mecanismo de referência",
  "Your name": "O seu nome",
  "Your email": "O seu email",
  "Referred business": "Empresa indicada",
  "Business contact": "Contacto da empresa",
  "Context": "Contexto",
  "Submit referral": "Enviar referência",
  "Submitting...": "A enviar...",
  "Referral sent.": "Referência enviada.",
  "Ready when you are": "Prontos quando estiver",
  "Build what grows next.": "Construa o que vem a seguir.",
  "Back home": "Voltar ao início",
  "Start the audit": "Começar a auditoria",
  "Book a growth audit": "Marcar uma auditoria de crescimento",
  "Growth audit": "Auditoria de crescimento",
  "Let us map what grows next.": "Vamos mapear o que cresce a seguir.",
  "Full name": "Nome completo",
  "Work email": "Email profissional",
  "Company website": "Website da empresa",
  "What should we help with?": "Em que devemos ajudar?",
  "Submit request": "Enviar pedido",
  "Request sent.": "Pedido enviado.",
  "Close": "Fechar",
  "Or email us directly:": "Ou envie-nos um email diretamente:",
  "Euro team contact": "Contacto da equipa europeia",
  "Contact": "Contacto",
  "Start with a growth audit.": "Comece com uma auditoria de crescimento.",
  "Open the fluid CTA, tell us what you want to improve, and we will map the clearest next move.":
    "Abra o CTA fluido, conte-nos o que quer melhorar, e vamos mapear o próximo passo mais claro.",
  "The audit can cover lead generation, web and software development, automated business processes and AI auditing, branding, sales support, strategy, and automation.":
    "A auditoria pode abranger geração de leads, desenvolvimento web e de software, processos de negócio automatizados e auditoria de IA, branding, suporte de vendas, estratégia e automação.",
  "Open audit request": "Abrir pedido de auditoria",
  "A simple operating rhythm for turning growth ambition into practical systems and sharper execution.":
    "Um ritmo operacional simples para transformar ambição de crescimento em sistemas práticos e execução mais clara.",
  "Start with the clearest bottleneck, then scope the right growth system around real operational need.":
    "Comece pelo bloqueio mais claro e defina o sistema de crescimento certo à volta da necessidade operacional real.",
  "A focused view of the businesses NovaLeads has supported, including construction website builds and industry slots ready for approved case-study evidence.":
    "Uma visão focada das empresas apoiadas pela NovaLeads, incluindo websites de construção e espaços de setores prontos para casos de estudo aprovados.",
  "Share a business that should speak to NovaLeads. Incentive terms will be added only once Miguel confirms them.":
    "Partilhe uma empresa que deveria falar com a NovaLeads. Os termos de incentivo só serão adicionados depois da confirmação do Miguel.",
  "Start the audit and we will identify whether SiteRent, BizStack, Auris, or a custom Nova-built layer is the right next move.":
    "Comece pela auditoria e identificaremos se SiteRent, BizStack, Auris ou uma camada personalizada criada pela Nova é o próximo passo certo.",
  "Book starter audit": "Marcar auditoria inicial",
  "Request growth quote": "Pedir orçamento de crescimento",
  "Scope full suite": "Definir suite completa",
  "Talk enterprise": "Falar sobre enterprise",
  "Starter audit": "Auditoria inicial",
  "Custom quote": "Orçamento personalizado",
  "Visible starter package": "Pacote inicial visível",
  "Quote-gated": "Mediante orçamento",
  "Vs. hiring": "Comparação com contratação",
  "Compare the cost shape.": "Compare a estrutura de custos.",
  "Hiring": "Contratação",
  "NovaLeads system": "Sistema NovaLeads",
  "Book Your AI Business Audit ->": "Marque a sua auditoria de negócio com IA ->",
  "Calculation: missed leads per week x 4.3 weeks x average value x 25% estimated close rate. Final assumption needs sign-off before production launch.":
    "Cálculo: leads perdidos por semana x 4,3 semanas x valor médio x taxa de conversão estimada de 25%. A premissa final precisa de aprovação antes do lançamento.",
  "A quick estimate for the audit conversation, using a conservative working close-rate assumption until Miguel signs off the final formula.":
    "Uma estimativa rápida para a conversa de auditoria, usando uma taxa de conversão conservadora até o Miguel aprovar a fórmula final.",
  "Start product audit": "Começar auditoria de produto",
  "SiteRent is a Powered by Nova product for businesses that need a professional web presence without a heavy upfront build. Clients can rent the website monthly, choose a package based on complexity, and edit the site with AI as the business evolves.":
    "SiteRent é um produto Powered by Nova para empresas que precisam de uma presença web profissional sem um investimento inicial pesado. Os clientes podem alugar o website mensalmente, escolher um pacote de acordo com a complexidade e editar o site com IA à medida que o negócio evolui.",
  "BizStack is a Powered by Nova business ERP inspired by the connected retail operating model: central control, stock visibility, sales capture, inventory management, and optional POS workflows for businesses that need one operational layer.":
    "BizStack é um ERP empresarial Powered by Nova, inspirado num modelo de retalho conectado: controlo central, visibilidade de stock, captação de vendas, gestão de inventário e fluxos POS opcionais para empresas que precisam de uma única camada operacional.",
  "Auris is a Powered by Nova AI receptionist built for businesses that cannot afford to miss an enquiry. It answers calls, captures caller intent, qualifies leads against your criteria, and books appointments directly into your calendar - without a human on standby.":
    "Auris é uma rececionista de IA Powered by Nova, criada para empresas que não podem perder um pedido de contacto. Atende chamadas, capta a intenção de quem liga, qualifica leads segundo os seus critérios e marca reuniões diretamente no seu calendário, sem uma pessoa em espera.",
  "Start with the audit and we will identify whether SiteRent, BizStack, Auris, or a custom Nova-built layer is the right next move.":
    "Comece pela auditoria e identificaremos se SiteRent, BizStack, Auris ou uma camada personalizada criada pela Nova é o próximo passo certo.",
  "Map the product layer your business needs.": "Mapeie a camada de produto de que o seu negócio precisa.",
  "From service insight to software layer.": "Da perceção do serviço à camada de software.",
  "The audit turns growth ambition into a practical plan across lead flow, websites, software, AI support, and automation.":
    "A auditoria transforma ambição de crescimento num plano prático para fluxo de leads, websites, software, suporte de IA e automação.",
};

export function normalizeLocale(locale: string | undefined | null): Locale {
  if (locale === "pt") return "pt";
  return "en";
}
