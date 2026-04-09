import { Wallet, FileText, Target, Lightbulb, MessageCircle, ArrowRight } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5565984464370";

const services = [
  {
    icon: Wallet,
    title: "Organização Financeira",
    benefit: "Saiba exatamente para onde seu dinheiro está indo",
    desc: "Mapeamento completo de receitas e despesas com um plano de controle mensal personalizado para a sua realidade.",
  },
  {
    icon: Target,
    title: "Planejamento para Sair das Dívidas",
    benefit: "Estratégia prática para sair do vermelho",
    desc: "Análise das suas dívidas, priorização por juros e criação de um plano real e viável para você se livrar delas.",
  },
  {
    icon: FileText,
    title: "Apoio no Imposto de Renda",
    benefit: "Evite erros e organize sua declaração com segurança",
    desc: "Orientação na organização dos documentos e esclarecimento de dúvidas para que sua declaração seja feita sem estresse.",
  },
  {
    icon: Lightbulb,
    title: "Educação Financeira Prática",
    benefit: "Aprenda a controlar seu dinheiro de forma simples",
    desc: "Conceitos diretos e aplicáveis para você tomar melhores decisões financeiras no dia a dia, sem complicação.",
  },
];

const ServicosSection = () => {
  return (
    <section id="servicos" className="py-20 md:py-28 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        <h2 className="fade-up section-title text-center mb-4">Como posso te ajudar</h2>
        <p className="fade-up section-subtitle text-center mb-14">Soluções práticas para quem quer retomar o controle financeiro</p>

        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((s, i) => (
            <div
              key={i}
              className="fade-up glass-card group cursor-default"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110" style={{ background: "var(--hero-gradient)" }}>
                <s.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1">{s.title}</h3>
              <p className="text-primary font-semibold text-sm mb-3 flex items-center gap-1">
                <ArrowRight className="w-3.5 h-3.5" />
                {s.benefit}
              </p>
              <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="fade-up text-center mt-14">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp inline-flex"
          >
            <MessageCircle className="w-5 h-5" />
            Quero começar agora
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicosSection;
