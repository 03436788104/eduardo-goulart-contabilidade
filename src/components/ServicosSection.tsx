import { Wallet, FileText, Target, Lightbulb, MessageCircle, ArrowRight, CheckCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5565984464370?text=Ol%C3%A1%2C%20Eduardo!%20Vim%20pelo%20site%20e%20quero%20come%C3%A7ar.";

const services = [
  {
    icon: Wallet,
    title: "Organização Financeira",
    benefit: "Saiba exatamente para onde seu dinheiro vai",
    desc: "Mapeamento completo de receitas e despesas com um plano de controle mensal personalizado para a sua realidade.",
    bullets: ["Planilha de controle personalizada", "Revisão mensal dos gastos", "Identificação de desperdícios"],
    color: "primary",
    highlight: "Mais popular",
  },
  {
    icon: Target,
    title: "Plano para Sair das Dívidas",
    benefit: "Estratégia prática para sair do vermelho",
    desc: "Análise das suas dívidas, priorização por juros e criação de um plano real e viável para eliminá-las.",
    bullets: ["Mapa completo das dívidas", "Ordem de pagamento estratégica", "Negociação e renegociação"],
    color: "emerald",
    highlight: null,
  },
  {
    icon: FileText,
    title: "Apoio no Imposto de Renda",
    benefit: "Declare com segurança e sem estresse",
    desc: "Orientação na organização dos documentos e esclarecimento de dúvidas para uma declaração tranquila.",
    bullets: ["Checklist de documentos", "Revisão da situação fiscal", "Orientação passo a passo"],
    color: "gold",
    highlight: "Época de IRPF",
  },
  {
    icon: Lightbulb,
    title: "Educação Financeira Prática",
    benefit: "Aprenda a controlar seu dinheiro",
    desc: "Conceitos diretos e aplicáveis para você tomar melhores decisões financeiras no dia a dia.",
    bullets: ["Fundamentos sem complicação", "Hábitos financeiros saudáveis", "Planejamento de objetivos"],
    color: "primary",
    highlight: null,
  },
];

const ServicosSection = () => {
  return (
    <section id="servicos" className="py-20 md:py-28 px-4 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <div className="fade-up text-center mb-14">
          <div className="section-divider" />
          <h2 className="section-title mb-4">
            Como posso{" "}
            <span className="text-gradient">te ajudar</span>
          </h2>
          <p className="section-subtitle">
            Soluções práticas e personalizadas para quem quer retomar o controle financeiro.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((s, i) => (
            <div
              key={i}
              className="fade-up glass-card group relative"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Badge de destaque */}
              {s.highlight && (
                <div className="absolute -top-3 right-5">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-bold text-white"
                    style={{
                      background: s.color === "gold"
                        ? "var(--gold-gradient)"
                        : s.color === "emerald"
                        ? "var(--emerald-gradient)"
                        : "var(--hero-gradient)",
                    }}
                  >
                    {s.highlight}
                  </span>
                </div>
              )}

              {/* Header do card */}
              <div className="flex items-start gap-4 mb-4">
                <div
                  className="w-13 h-13 w-[52px] h-[52px] rounded-2xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: s.color === "emerald"
                      ? "var(--emerald-gradient)"
                      : s.color === "gold"
                      ? "var(--gold-gradient)"
                      : "var(--hero-gradient)",
                  }}
                >
                  <s.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-foreground tracking-tight">{s.title}</h3>
                  <p
                    className="text-sm font-semibold flex items-center gap-1 mt-0.5"
                    style={{
                      color: s.color === "emerald"
                        ? "hsl(158 72% 34%)"
                        : s.color === "gold"
                        ? "hsl(38 80% 42%)"
                        : "hsl(var(--primary))",
                    }}
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                    {s.benefit}
                  </p>
                </div>
              </div>

              {/* Descrição */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>

              {/* Bullets */}
              <div className="flex flex-col gap-2 border-t border-border/50 pt-4">
                {s.bullets.map((b, j) => (
                  <div key={j} className="flex items-center gap-2 text-sm">
                    <CheckCircle
                      className="w-4 h-4 shrink-0"
                      style={{
                        color: s.color === "emerald"
                          ? "hsl(158 72% 38%)"
                          : s.color === "gold"
                          ? "hsl(42 90% 52%)"
                          : "hsl(var(--primary))",
                      }}
                    />
                    <span className="text-foreground font-medium">{b}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="fade-up text-center mt-14">
          <p className="text-muted-foreground text-sm mb-4">
            Não tem certeza qual serviço é ideal para você?
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            id="servicos-cta"
            className="btn-whatsapp inline-flex"
          >
            <MessageCircle className="w-5 h-5" />
            Vamos conversar — sem compromisso
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicosSection;
