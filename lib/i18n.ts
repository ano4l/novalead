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
  "Growth systems":
    "Sistemas de crescimento",
  "Lead Generation":
    "Geração de leads",
  "Targeted demand, sharper offers, and follow-up built around the clients you want.":
    "Procura direcionada, ofertas mais claras e acompanhamento pensado para os clientes que quer conquistar.",
  "Sharper offers":
    "Ofertas mais claras",
  "Cleaner follow-up":
    "Acompanhamento mais eficaz",
  "Better lead flow":
    "Melhor fluxo de leads",
  "Digital infrastructure":
    "Infraestrutura digital",
  "Web & Software Development":
    "Desenvolvimento Web e de Software",
  "Websites, landing pages, and practical software tools that make the business easier to trust and run.":
    "Websites, landing pages e ferramentas de software práticas que tornam o negócio mais fácil de compreender e gerir.",
  "Websites":
    "Websites",
  "Landing pages":
    "Landing pages",
  "Internal software":
    "Software interno",
  "Operations & AI":
    "Operações e IA",
  "Automated Business Processes & AI Auditing":
    "Processos de Negócio Automatizados e Auditoria de IA",
  "Automate repetitive workflows and audit AI systems for reliability and compliance.":
    "Automatize fluxos de trabalho repetitivos e audite sistemas de IA para garantir fiabilidade e conformidade.",
  "Process automation":
    "Automação de processos",
  "Operational efficiency":
    "Eficiência operacional",
  "AI audit insights":
    "Insights da auditoria de IA",
  "Positioning":
    "Posicionamento",
  "Branding & Marketing":
    "Branding e Marketing",
  "Clear positioning, stronger messaging, and digital assets that make the offer easier to understand.":
    "Posicionamento claro, mensagens mais fortes e ativos digitais que tornam a oferta mais fácil de compreender.",
  "Messaging":
    "Mensagens",
  "Visual direction":
    "Direção visual",
  "Campaign assets":
    "Ativos de campanha",
  "Operations":
    "Operações",
  "Automation & Strategy":
    "Automação e Estratégia",
  "Better systems for repetitive work, sales handoff, admin drag, and growth decisions.":
    "Melhores sistemas para trabalho repetitivo, passagem de vendas, tarefas administrativas e decisões de crescimento.",
  "Process mapping":
    "Mapeamento de processos",
  "Automation":
    "Automação",
  "Growth planning":
    "Planeamento de crescimento",
  "Niche websites. Rented results.":
    "Websites de nicho. Resultados por subscrição.",
  "Rent a website month to month, with packages that scale based on how advanced the site needs to be.":
    "Alugue um website mês a mês, com pacotes que acompanham o nível de complexidade de que precisa.",
  "Monthly website rental":
    "Aluguer mensal de website",
  "Package-based complexity":
    "Complexidade por pacote",
  "AI website editing":
    "Edição de website com IA",
  "Automate. Capture. Close.":
    "Automatize. Capte. Conquiste.",
  "A business ERP for operations, inventory, sales visibility, and POS workflows when required.":
    "Um ERP empresarial para operações, inventário, visibilidade de vendas e fluxos de POS quando necessário.",
  "Inventory management":
    "Gestão de inventário",
  "Sales and operations visibility":
    "Visibilidade de vendas e operações",
  "Optional POS system":
    "Sistema POS opcional",
  "Always on. Always listening.":
    "Sempre ativo. Sempre atento.",
  "An AI receptionist that answers calls, qualifies leads, and books appointments around the clock.":
    "Uma rececionista de IA que atende chamadas, qualifica leads e marca reuniões 24 horas por dia.",
  "24/7 AI call answering":
    "Atendimento de chamadas por IA 24/7",
  "Lead qualification & capture":
    "Qualificação e captação de leads",
  "Automated appointment booking":
    "Marcação automática de reuniões",
  "Live client":
    "Cliente ativo",
  "Built · launching soon":
    "Desenvolvido · lançamento em breve",
  "Awaiting content":
    "A aguardar conteúdo",
  "Branding":
    "Branding",
  "Web Development":
    "Desenvolvimento Web",
  "Case study slot":
    "Espaço para caso de estudo",
  "Work":
    "Trabalho",
  "Hide demo":
    "Ocultar demonstração",
  "Watch demo":
    "Ver demonstração",
  "All":
    "Todos",
  "Automotive":
    "Automóvel",
  "Construction":
    "Construção",
  "Healthcare":
    "Saúde",
  "HVAC":
    "Climatização",
  "Hospitality":
    "Hotelaria",
  "Professional Services":
    "Serviços profissionais",
  "Real Estate":
    "Imobiliário",
  "Powered by Nova":
    "Powered by Nova",
  "Powered by Nova is the product layer behind NovaLeads: products we build, operate, and improve for businesses that need practical growth infrastructure.":
    "Powered by Nova é a camada de produtos por trás da NovaLeads: produtos que criamos, operamos e melhoramos para empresas que precisam de infraestrutura prática para crescer.",
  "Product systems for growth.":
    "Sistemas de produto para crescer.",
  "Nova products":
    "Produtos Nova",
  "Built to rent, run, and scale.":
    "Criados para alugar, operar e crescer.",
  "Each product is designed to remove one growth bottleneck without forcing the business into a heavy custom build from day one.":
    "Cada produto foi desenhado para remover um bloqueio de crescimento sem obrigar a empresa a começar logo com uma construção personalizada e pesada.",
  "Live layer":
    "Camada ativa",
  "Open product":
    "Abrir produto",
  "How it works":
    "Como funciona",
  "Turn a recurring business problem into a focused product offer.":
    "Transforme um problema empresarial recorrente numa oferta de produto focada.",
  "Create the website, ERP, AI editing, POS, or workflow layer around it.":
    "Crie à volta dele a camada de website, ERP, edição com IA, POS ou fluxo de trabalho.",
  "Use feedback, usage, and growth goals to make the product sharper.":
    "Use feedback, utilização e objetivos de crescimento para tornar o produto mais eficaz.",
  "Package the need":
    "Estruturar a necessidade",
  "Build the layer":
    "Construir a camada",
  "Keep improving":
    "Continuar a melhorar",
  "Lead capture":
    "Captação de leads",
  "Website rental":
    "Aluguer de website",
  "AI editing":
    "Edição com IA",
  "Inventory flow":
    "Fluxo de inventário",
  "Sales visibility":
    "Visibilidade de vendas",
  "Optional POS":
    "POS opcional",
  "Pricing":
    "Preços",
  "Audit-first packages.":
    "Pacotes com auditoria em primeiro lugar.",
  "Audit calculator":
    "Calculadora de auditoria",
  "What missed leads may cost.":
    "Quanto podem custar os leads perdidos.",
  "Missed calls/leads per week":
    "Chamadas/leads perdidos por semana",
  "Average job/client value":
    "Valor médio do trabalho/cliente",
  "Estimated monthly revenue leak":
    "Perda estimada de receita mensal",
  "Process":
    "Processo",
  "Method":
    "Método",
  "Diagnose, design, deploy.":
    "Diagnosticar, desenhar, implementar.",
  "Diagnose":
    "Diagnosticar",
  "Design":
    "Desenhar",
  "Deploy":
    "Implementar",
  "People worked with":
    "Pessoas com quem trabalhámos",
  "Brands moving into what is next.":
    "Marcas a avançar para o próximo passo.",
  "Know a business that should be here next?":
    "Conhece uma empresa que deveria estar aqui?",
  "Referral":
    "Referência",
  "Refer a business.":
    "Indique uma empresa.",
  "Keep it simple.":
    "Mantenha a simplicidade.",
  "Referral mechanism":
    "Mecanismo de referência",
  "Your name":
    "O seu nome",
  "Your email":
    "O seu email",
  "Referred business":
    "Empresa indicada",
  "Business contact":
    "Contacto da empresa",
  "Context":
    "Contexto",
  "Submit referral":
    "Enviar referência",
  "Submitting...":
    "A enviar...",
  "Referral sent.":
    "Referência enviada.",
  "Ready when you are":
    "Prontos quando estiver",
  "Build what grows next.":
    "Construa o que vem a seguir.",
  "Back home":
    "Voltar ao início",
  "Start the audit":
    "Começar a auditoria",
  "Book a growth audit":
    "Marcar uma auditoria de crescimento",
  "Growth audit":
    "Auditoria de crescimento",
  "Let us map what grows next.":
    "Vamos mapear o que cresce a seguir.",
  "Full name":
    "Nome completo",
  "Work email":
    "Email profissional",
  "Company website":
    "Website da empresa",
  "What should we help with?":
    "Em que devemos ajudar?",
  "Submit request":
    "Enviar pedido",
  "Request sent.":
    "Pedido enviado.",
  "Close":
    "Fechar",
  "Or email us directly:":
    "Ou envie-nos um email diretamente:",
  "Euro team contact":
    "Contacto da equipa europeia",
  "Contact":
    "Contacto",
  "Start with a growth audit.":
    "Comece com uma auditoria de crescimento.",
  "Open the fluid CTA, tell us what you want to improve, and we will map the clearest next move.":
    "Abra o CTA fluido, conte-nos o que quer melhorar, e vamos mapear o próximo passo mais claro.",
  "The audit can cover lead generation, web and software development, automated business processes and AI auditing, branding, sales support, strategy, and automation.":
    "A auditoria pode abranger geração de leads, desenvolvimento web e de software, processos de negócio automatizados e auditoria de IA, branding, suporte de vendas, estratégia e automação.",
  "Open audit request":
    "Abrir pedido de auditoria",
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
  "Book starter audit":
    "Marcar auditoria inicial",
  "Request growth quote":
    "Pedir orçamento de crescimento",
  "Scope full suite":
    "Definir suite completa",
  "Talk enterprise":
    "Falar sobre enterprise",
  "Starter audit":
    "Auditoria inicial",
  "Custom quote":
    "Orçamento personalizado",
  "Visible starter package":
    "Pacote inicial visível",
  "Quote-gated":
    "Mediante orçamento",
  "Vs. hiring":
    "Comparação com contratação",
  "Compare the cost shape.":
    "Compare a estrutura de custos.",
  "Hiring":
    "Contratação",
  "NovaLeads system":
    "Sistema NovaLeads",
  "Book Your AI Business Audit ->":
    "Marque a sua auditoria de negócio com IA ->",
  "Calculation: missed leads per week x 4.3 weeks x average value x 25% estimated close rate. Final assumption needs sign-off before production launch.":
    "Cálculo: leads perdidos por semana x 4,3 semanas x valor médio x taxa de conversão estimada de 25%. A premissa final precisa de aprovação antes do lançamento.",
  "A quick estimate for the audit conversation, using a conservative working close-rate assumption until Miguel signs off the final formula.":
    "Uma estimativa rápida para a conversa de auditoria, usando uma taxa de conversão conservadora até o Miguel aprovar a fórmula final.",
  "Start product audit":
    "Começar auditoria de produto",
  "SiteRent is a Powered by Nova product for businesses that need a professional web presence without a heavy upfront build. Clients can rent the website monthly, choose a package based on complexity, and edit the site with AI as the business evolves.":
    "SiteRent é um produto Powered by Nova para empresas que precisam de uma presença web profissional sem um investimento inicial pesado. Os clientes podem alugar o website mensalmente, escolher um pacote de acordo com a complexidade e editar o site com IA à medida que o negócio evolui.",
  "BizStack is a Powered by Nova business ERP inspired by the connected retail operating model: central control, stock visibility, sales capture, inventory management, and optional POS workflows for businesses that need one operational layer.":
    "BizStack é um ERP empresarial Powered by Nova, inspirado num modelo de retalho conectado: controlo central, visibilidade de stock, captação de vendas, gestão de inventário e fluxos POS opcionais para empresas que precisam de uma única camada operacional.",
  "Auris is a Powered by Nova AI receptionist built for businesses that cannot afford to miss an enquiry. It answers calls, captures caller intent, qualifies leads against your criteria, and books appointments directly into your calendar - without a human on standby.":
    "Auris é uma rececionista de IA Powered by Nova, criada para empresas que não podem perder um pedido de contacto. Atende chamadas, capta a intenção de quem liga, qualifica leads segundo os seus critérios e marca reuniões diretamente no seu calendário, sem uma pessoa em espera.",
  "Start with the audit and we will identify whether SiteRent, BizStack, Auris, or a custom Nova-built layer is the right next move.":
    "Comece pela auditoria e identificaremos se SiteRent, BizStack, Auris ou uma camada personalizada criada pela Nova é o próximo passo certo.",
  "Map the product layer your business needs.":
    "Mapeie a camada de produto de que o seu negócio precisa.",
  "From service insight to software layer.":
    "Da perceção do serviço à camada de software.",
  "The audit turns growth ambition into a practical plan across lead flow, websites, software, AI support, and automation.":
    "A auditoria transforma ambição de crescimento num plano prático para fluxo de leads, websites, software, suporte de IA e automação.",
  "Unlock your":
    "Desbloqueie o seu",
  "future":
    "futuro",
  "growth":
    "crescimento",
  " growth":
    " crescimento",
  "Unlock your ":
    "Desbloqueie o seu ",
  "UnlockYour":
    "DesbloqueieOSeu",
  "Future":
    "Futuro",
  "Growth":
    "Crescimento",
  "We are the future and the future is here. Leads, web, software, AI reception, brand, strategy, and automation built as one growth system.":
    "O futuro é hoje. Leads, web, software, receção por IA, marca, estratégia e automação construídos como um único sistema de crescimento.",
  "NovaLeads Growth Partner":
    "Parceiro de Crescimento NovaLeads",
  "Built around growth, not noise.":
    "Construído para crescer, não para fazer ruído.",
  "Explore services":
    "Explorar serviços",
  "View detail":
    "Ver detalhe",
  "Proof in the work.":
    "Prova no trabalho.",
  "Logos and project notes live on the work page so each piece of work can stand on its own.":
    "Logótipos e notas de projeto estão na página de trabalhos para que cada projeto fale por si.",
  "View work":
    "Ver trabalhos",
  "Diagnose. Design. Deploy.":
    "Diagnosticar. Desenhar. Implementar.",
  "See process":
    "Ver processo",
  "Next step":
    "Próximo passo",
  "Growth story":
    "História de crescimento",
  "From signal to system.":
    "Do sinal ao sistema.",
  "Scroll through the growth path: where momentum leaks, how the operating layer connects, and what changes once the system is live.":
    "Percorra o caminho de crescimento: onde a energia se perde, como a camada operacional liga tudo e o que muda quando o sistema entra em funcionamento.",
  "The signal":
    "O sinal",
  "Good businesses lose momentum in the handoff.":
    "Bons negócios perdem velocidade na passagem de bastão.",
  "A visitor lands, an enquiry arrives, a sales conversation starts, and the follow-up depends on too many manual steps.":
    "Um visitante chega, um pedido de contacto entra, uma conversa de vendas começa e o acompanhamento depende de demasiados passos manuais.",
  "Faster response":
    "Resposta mais rápida",
  "Website visit":
    "Visita ao website",
  "Missed follow-up":
    "Acompanhamento perdido",
  "Cold opportunity":
    "Oportunidade perdida",
  "The system":
    "O sistema",
  "Growth needs one connected operating layer.":
    "O crescimento precisa de uma única camada operacional conectada.",
  "NovaLeads connects brand, website, software, automated business processes and AI auditing, lead generation, and automation so the next step is obvious.":
    "A NovaLeads liga marca, website, software, processos de negócio automatizados e auditoria de IA, geração de leads e automação para que o próximo passo seja óbvio.",
  "Cleaner flow":
    "Fluxo mais limpo",
  "Brand":
    "Marca",
  "Web":
    "Web",
  "AI":
    "IA",
  "Sales":
    "Vendas",
  "The shift":
    "A mudança",
  "The business starts moving with less drag.":
    "O negócio começa a mover-se com menos atrito.",
  "The offer is easier to understand, enquiries are easier to capture, and the team spends more time on real opportunities.":
    "A oferta é mais fácil de entender, os pedidos de contacto são mais fáceis de captar e a equipa passa mais tempo em oportunidades reais.",
  "Sharper execution":
    "Execução mais afiada",
  "Products that keep growth moving.":
    "Produtos que mantêm o crescimento em movimento.",
  "SiteRent, BizStack, and Auris are Nova-built products: practical software layers for businesses that need a sharper web presence, a cleaner operating system, and a receptionist that never sleeps.":
    "SiteRent, BizStack e Auris são produtos criados pela Nova: camadas de software práticas para empresas que precisam de uma presença web mais afiada, um sistema operacional mais limpo e uma rececionista que nunca dorme.",
  "Powered by Nova products: SiteRent and BizStack":
    "Produtos Powered by Nova: SiteRent e BizStack",
  "View product":
    "Ver produto",
  "Next product move":
    "Próximo passo no produto",
  "Coverage":
    "Cobertura",
  "A hire typically covers a defined shift and needs backup when volume spikes.":
    "Uma contratação cobre normalmente um turno definido e precisa de reforço quando o volume aumenta.",
  "Auris and automation can support enquiry capture outside normal hours, then route the next step to the team.":
    "Auris e a automação podem ajudar a captar pedidos de contacto fora do horário normal e depois encaminhar o próximo passo para a equipa.",
  "Ramp time":
    "Tempo de arranque",
  "Recruitment, onboarding, scripts, and process training can delay the first useful output.":
    "Recrutamento, integração, guiões e formação de processos podem atrasar o primeiro resultado útil.",
  "The audit starts by mapping the process, then the build is scoped around the bottleneck already found.":
    "A auditoria começa por mapear o processo e depois a construção é definida à volta do bloqueio encontrado.",
  "Consistency":
    "Consistência",
  "Manual follow-up quality depends on availability, notes, and how busy the day gets.":
    "A qualidade do acompanhamento manual depende da disponibilidade, notas e do quão ocupado o dia fica.",
  "Workflow rules, call capture, and handoff prompts keep the response path more consistent.":
    "Regras de fluxo, captação de chamadas e lembretes de passagem mantêm o caminho de resposta mais consistente.",
  "Cost shape":
    "Forma de custo",
  "Salary, tools, management time, and replacement risk stay in the cost base.":
    "Salário, ferramentas, tempo de gestão e risco de substituição permanecem na base de custos.",
  "Quote-gated packages are scoped around the system needed, with the starter audit clarifying fit first.":
    "Os pacotes mediante orçamento são definidos à volta do sistema necessário, com a auditoria inicial a clarificar primeiro a adequação.",
  "This captures the referrer, the referred business, and a useful contact path without promising any incentive terms.":
    "Isto captura quem indica, a empresa indicada e um caminho de contacto útil sem prometer quaisquer termos de incentivo.",
  "What this means":
    "O que isto significa",
  "Outcomes":
    "Resultados",
  "Product layer":
    "Camada de produto",
  "What it does":
    "O que faz",
  "Product features":
    "Funcionalidades do produto",
  "Growth path":
    "Caminho de crescimento",
  "Built to plug into the Nova growth system.":
    "Construído para integrar no sistema de crescimento Nova.",
  "The product sits beside the wider NovaLeads work: lead generation, web and software development, automated business processes and AI auditing, branding, strategy, and automation.":
    "O produto complementa o trabalho mais alargado da NovaLeads: geração de leads, desenvolvimento web e de software, processos de negócio automatizados e auditoria de IA, branding, estratégia e automação.",
  "The request could not be sent. Check the configured audit endpoint.":
    "O pedido não pôde ser enviado. Verifique o endpoint de auditoria configurado.",
  "Draft saved in this browser. Add an audit endpoint or recipient email in site settings before launch.":
    "Rascunho guardado neste navegador. Adicione um endpoint de auditoria ou email de destinatário nas configurações do site antes do lançamento.",
  "We will identify the clearest growth opportunity, the bottleneck slowing it down, and the system that can help capture it.":
    "Vamos identificar a oportunidade de crescimento mais clara, o bloqueio que a retarda e o sistema que pode ajudar a captá-la.",
  "Strategy, lead generation, web and software, automated business processes and AI auditing, branding, and automation can all be part of the audit.":
    "Estratégia, geração de leads, web e software, processos de negócio automatizados e auditoria de IA, branding e automação podem fazer parte da auditoria.",
  "We diagnose what slows the business down, then build the right process, automation, or strategy layer around it. The result is less manual drag and more room to move.":
    "Diagnosticamos o que retarda o negócio e depois construímos o processo, automação ou camada de estratégia certos à volta disso. O resultado é menos trabalho manual e mais margem de manobra.",
  "Find the clearest growth blockers across offer, website, sales flow, and operations.":
    "Encontre os bloqueios de crescimento mais claros em oferta, website, fluxo de vendas e operações.",
  "Shape the right mix of brand, web, software, automated business processes, AI auditing, lead flow, and automation.":
    "Modele a combinação certa de marca, web, software, processos de negócio automatizados, auditoria de IA, fluxo de leads e automação.",
  "Launch with clean milestones, useful reporting, and practical support.":
    "Lance com marcos claros, relatórios úteis e suporte prático.",
  "Website and digital presence support.":
    "Apoio em website e presença digital.",
  "Brand presence and positioning support.":
    "Apoio em presença e posicionamento de marca.",
  "Website build for a construction, building maintenance, and supplies company.":
    "Website para uma empresa de construção, manutenção de edifícios e fornecimentos.",
  "Website build for a construction company.":
    "Website para uma empresa de construção.",
  "A full e-commerce platform replacing manual phone and walk-in ordering, with vehicle-based part search.":
    "Uma plataforma de e-commerce completa que substitui encomendas manuais por telefone e presenciais, com pesquisa de peças por veículo.",
  "E-commerce platform and WhatsApp ordering assistant":
    "Plataforma de e-commerce e assistente de encomendas por WhatsApp",
  "Reserved for an approved healthcare story covering call triage, appointment routing, and lead capture once client evidence is ready.":
    "Reservado para um caso de estudo de saúde aprovado, cobrindo triagem de chamadas, encaminhamento de marcações e captação de leads assim que haja conteúdo do cliente.",
  "Auris intake audit":
    "Auditoria de admissão Auris",
  "Reserved for an HVAC story focused on after-hours enquiries, call response, and faster sales handoff once content is approved.":
    "Reservado para um caso de estudo de climatização focado em pedidos de contacto fora de horas, resposta a chamadas e passagem de vendas mais rápida após aprovação do conteúdo.",
  "Missed-call and follow-up audit":
    "Auditoria de chamadas perdidas e acompanhamento",
  "Reserved for a hospitality story covering booking enquiries, guest questions, and smoother follow-up once client content is approved.":
    "Reservado para um caso de estudo de hotelaria cobrindo pedidos de reserva, perguntas de hóspedes e acompanhamento mais fluido após aprovação do conteúdo do cliente.",
  "Booking and enquiry audit":
    "Auditoria de reservas e pedidos de contacto",
  "Reserved for a real estate story focused on lead routing, appointment capture, and cleaner handoff once client content is approved.":
    "Reservado para um caso de estudo imobiliário focado em encaminhamento de leads, captação de marcações e passagem mais clara após aprovação do conteúdo do cliente.",
  "Lead routing and follow-up audit":
    "Auditoria de encaminhamento e acompanhamento de leads",
  "A clearer public-facing brand presence for a commission that needed stronger positioning and presentation support.":
    "Uma presença pública de marca mais clara para uma comissão que precisava de melhor posicionamento e apoio na apresentação.",
  "A focused web presence and supporting digital layer for a specialist operator that needed to be easier to understand online.":
    "Uma presença web focada e uma camada digital de apoio para um operador especialista que precisava de ser mais fácil de compreender online.",
  "A website build for a construction, building maintenance, and supplies company that needed a clearer digital presence.":
    "Criação de website para uma empresa de construção, manutenção de edifícios e fornecimentos que precisava de uma presença digital mais clara.",
  "A website build for a construction company, giving the brand a dedicated place to present its work online.":
    "Criação de website para uma empresa de construção, dando à marca um espaço dedicado para apresentar o seu trabalho online.",
  "Online ordering for an autobody parts specialist":
    "Encomendas online para um especialista em peças auto",
  "Healthcare intake and missed-call slot":
    "Admissão de saúde e slot de chamadas perdidas",
  "HVAC response flow slot":
    "Slot de fluxo de resposta HVAC",
  "Hospitality booking flow slot":
    "Slot de fluxo de reservas de hotelaria",
  "Real estate enquiry handoff slot":
    "Slot de passagem de pedidos de contacto imobiliário",
  "Status":
    "Estado",
  "NovaLeads":
    "NovaLeads",
  "Refer a Business":
    "Indique uma Empresa",
  "A focused AI business audit for a team that needs a clear first move before committing to a larger automation build.":
    "Uma auditoria de negócio com IA focada para uma equipa que precisa de um primeiro passo claro antes de se comprometer com uma automação maior.",
  "Missed-lead and response-flow review":
    "Revisão de leads perdidos e fluxo de resposta",
  "AI receptionist or automation fit check":
    "Verificação de adequação de rececionista de IA ou automação",
  "Priority action map for the next build step":
    "Mapa de ações prioritárias para o próximo passo de construção",
  "For businesses ready to connect lead capture, follow-up, and practical automation around a measurable growth bottleneck.":
    "Para empresas prontas para ligar captação de leads, acompanhamento e automação prática em torno de um bloqueio de crescimento mensurável.",
  "Audit findings translated into build scope":
    "Conclusões da auditoria transformadas em âmbito de construção",
  "Lead capture and follow-up workflow design":
    "Desenho de fluxo de captação e acompanhamento de leads",
  "Launch support and refinement window":
    "Suporte de lançamento e janela de refinamento",
  "A wider operating layer across website, AI reception, software, and business process automation.":
    "Uma camada operacional mais ampla através de website, receção por IA, software e automação de processos de negócio.",
  "Website or landing-page system":
    "Sistema de website ou landing page",
  "Auris, BizStack, or custom software scope":
    "Âmbito de Auris, BizStack ou software personalizado",
  "Connected reporting and handoff design":
    "Design de relatórios e passagem conectados",
  "For teams that need a custom rollout, stakeholder alignment, and careful handling of data, operations, and adoption.":
    "Para equipas que precisam de um rollout personalizado, alinhamento de stakeholders e tratamento cuidadoso de dados, operações e adoção.",
  "Custom discovery and rollout plan":
    "Plano de descoberta e rollout personalizado",
  "Multi-workflow implementation scope":
    "Âmbito de implementação de múltiplos fluxos de trabalho",
  "Governance, support, and review cadence":
    "Governança, suporte e ritmo de revisão",
  "NovaLeads builds lead generation around the market you actually want to win. We shape the offer, the campaign, the response flow, and the follow-up so interest turns into real opportunity.":
    "A NovaLeads constrói geração de leads em torno do mercado que quer realmente conquistar. Moldamos a oferta, a campanha, o fluxo de resposta e o acompanhamento para que o interesse se transforme numa oportunidade real.",
  "We design and build digital surfaces that explain the offer clearly and support the way the business operates. That can mean a focused landing page, a full website, or custom software that removes daily friction.":
    "Criamos e construímos superfícies digitais que explicam claramente a oferta e suportam a forma como o negócio opera. Isso pode significar uma landing page focada, um website completo ou software personalizado que remove o atrito diário.",
  "We clarify how the business shows up, what it says, and why the audience should care. The goal is practical brand clarity that makes every campaign and page easier to trust.":
    "Clarificamos como o negócio se apresenta, o que diz e por que o público deve ligar. O objetivo é clareza de marca prática que torna cada campanha e página mais fáceis de confiar.",
  "We design automated business processes to reduce manual work and friction, and perform AI auditing to ensure models behave reliably, route enquiries correctly, and support measurable outcomes.":
    "Criamos processos de negócio automatizados para reduzir trabalho manual e atrito, e realizamos auditorias de IA para garantir que os modelos se comportem de forma fiável, encaminhem pedidos de contacto corretamente e suportem resultados mensuráveis.",
  "Brand presence for a public-facing commission":
    "Presença de marca para uma comissão pública",
  "Digital presence for a specialist business":
    "Presença digital para um negócio especialista",
  "Construction web presence for a multi-service builder":
    "Presença web de construção para um construtor multi-serviços",
  "Construction website for Joppa":
    "Website de construção para Joppa",
  "Mandela Awards Commission":
    "Comissão Mandela Awards",
  "Hidro Maquinas":
    "Hidro Máquinas",
  "Modern Mystery":
    "Modern Mystery",
  "Joppa Construction":
    "Joppa Construction",
  "Ferreira's Autobody Parts":
    "Ferreira's Autobody Parts",
  "APSUSM":
    "APSUSM",
  "HVAC case study slot":
    "Slot de caso de estudo HVAC",
  "Hospitality case study slot":
    "Slot de caso de estudo hotelaria",
  "Real estate case study slot":
    "Slot de caso de estudo imobiliário",
  "Ferreira's Autobody Parts project demo":
    "Demonstração do projeto Ferreira's Autobody Parts",
  "Branding and positioning support":
    "Apoio em branding e posicionamento",
  "Website development":
    "Desenvolvimento de website",
  "Powered by Nova product logos":
    "Logótipos dos produtos Powered by Nova",
  "Auris AI receptionist product visual":
    "Visual do produto Auris rececionista de IA",
  "project video":
    "vídeo do projeto",
  "Mandela Awards Commission logo":
    "logótipo da Comissão Mandela Awards",
  "Hidro Maquinas logo":
    "logótipo da Hidro Máquinas",
  "Modern Mystery logo":
    "logótipo da Modern Mystery",
  "Joppa Construction logo":
    "logótipo da Joppa Construction",
  "Ferreira's Autobody Parts logo":
    "logótipo da Ferreira's Autobody Parts",
  "APSUSM logo":
    "logótipo da APSUSM",
  "HVAC case study slot logo":
    "logótipo do slot de caso de estudo HVAC",
  "Hospitality case study slot logo":
    "logótipo do slot de caso de estudo hotelaria",
  "Real estate case study slot logo":
    "logótipo do slot de caso de estudo imobiliário",
  "Starter":
    "Starter",
  "Full Suite":
    "Full Suite",
  "Enterprise":
    "Enterprise",
  "Products":
    "Produtos",

  "The referral could not be sent. Check the configured referral endpoint.":
    "A indicação não pôde ser enviada. Verifique o endpoint de referência configurado.",
  "Draft saved in this browser. Add a referral endpoint or recipient email in site settings before launch.":
    "Rascunho guardado neste navegador. Adicione um endpoint de referência ou email de destinatário nas configurações do site antes do lançamento.",

  "Terms": "Termos",
  "Terms of Service": "Termos de Serviço",
  "Last updated: 15 July 2026": "Última atualização: 15 de julho de 2026",
  "Privacy": "Privacidade",
  "Privacy Policy": "Política de Privacidade",
  "Refunds": "Reembolsos",
  "Refund & Cancellation Policy": "Política de Reembolso e Cancelamento",
  "Who we are": "Quem somos",
  "Our services": "Os nossos serviços",
  "Subscriptions, billing, and payment": "Subscrições, faturação e pagamento",
  "Cancellation and refunds": "Cancelamento e reembolsos",
  "Your responsibilities": "As suas responsabilidades",
  "Delivery and availability": "Entrega e disponibilidade",
  "Intellectual property": "Propriedade intelectual",
  "Data protection": "Proteção de dados",
  "Limitation of liability": "Limitação de responsabilidade",
  "Suspension and termination": "Suspensão e rescisão",
  "Changes to these Terms": "Alterações a estes Termos",
  "Governing law": "Lei aplicável",
  "Subscriptions and billing": "Subscrições e faturação",
  "Cancellation": "Cancelamento",
  "Accidental renewal (goodwill exception)": "Renovação acidental (exceção de boa-fé)",
  "Setup and implementation fees": "Taxas de configuração e implementação",
  "Plan changes": "Alterações de plano",
  "Failed payments": "Pagamentos falhados",
  "Non-refundable third-party charges": "Encargos de terceiros não reembolsáveis",
  "How refunds are processed": "Como são processados os reembolsos",
  "Your statutory rights": "Os seus direitos legais",
  "Information we collect": "Informação que recolhemos",
  "How we use your information": "Como usamos a sua informação",
  "Lawful basis": "Base legal",
  "Sharing your information": "Partilha da sua informação",
  "Where your information is processed": "Onde a sua informação é processada",
  "How long we keep it": "Quanto tempo a conservamos",
  "How we protect your information": "Como protegemos a sua informação",
  "Your rights": "Os seus direitos",
  "Cookies": "Cookies",
  "Changes to this policy": "Alterações a esta política",
  "Complaints": "Reclamações",
  "Email:": "Email:",
  "Registration number:": "Número de registo:",
  "Website:": "Website:",
};

export function normalizeLocale(locale: string | undefined | null): Locale {
  if (locale === "pt") return "pt";
  return "en";
}
