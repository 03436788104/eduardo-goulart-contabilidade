import { MessageCircle, Search, FileCheck, TrendingUp, ArrowRight } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5565984464370?text=Ol%C3%A1%2C%20Eduardo!%20Vim%20pelo%20site%20e%20quero%20come%C3%A7ar%20meu%20planejamento%20financeiro.";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Diagnóstico da sua situação",
    desc: "Você me conta como estão suas finanças hoje: dívidas, gastos, renda e objetivos. Sem julgamentos.",
    color: "primary",
    detail: "Feito em até 1 conversa",
  },
  {
    number: "02",
    icon: FileCheck,
    title: "Plano de ação personalizado",
    desc: "Eduardo analisa seu perfil e cria um plano claro, simples e aplicável à sua realidade — não teoria genérica.",
    color: "emerald",
    detail: "Entregue em 24–48 horas",
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Acompanhamento e resultado",
    desc: "Você executa o plano com suporte contínuo. Ajustes mensais para garantir que o dinheiro realmente renda.",
    color: "gold",
    detail: "Resultado a partir do 1º mês",
  },
];

const ComoFuncionaSection = () => {
  return (
    <section id="como-funciona" className="py-20 md:py-28 px-4 bg-secondary/30 relative overflow-hidden">
      {/* Background decorativo */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-5xl mx-auto">
        <div className="fade-up text-center mb-14">
          <div className="section-divider" />
          <h2 className="section-title mb-4">
            Como funciona na{" "}
            <span className="text-gradient">prática</span>
          </h2>
          <p className="section-subtitle">
            Do primeiro contato até o resultado. Três etapas simples, sem enrolação.
          </p>
        </div>

        {/* Steps em linha (desktop) / coluna (mobile) */}
        <div className="relative">
          {/* Linha conectora (desktop only) */}
          <div className="hidden md:block absolute top-[52px] left-[calc(16.66%)] right-[calc(16.66%)] h-[2px] bg-border/80 z-0" />

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 relative z-10">
            {steps.map((step, i) => (
              <div
                key={i}
                className="fade-up step-card group"
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                {/* Ícone com número */}
                <div className="relative mb-5">
                  <div
                    className="w-[60px] h-[60px] rounded-2xl flex items-center justify-center mx-auto
                                transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: step.color === "emerald"
                        ? "var(--emerald-gradient)"
                        : step.color === "gold"
                        ? "var(--gold-gradient)"
                        : "var(--hero-gradient)",
                    }}
                  >
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  {/* Número flutuante */}
                  <span
                    className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-background border-2 border-border
                               flex items-center justify-center text-[10px] font-black text-foreground"
                  >
                    {step.number}
                  </span>
                </div>

                {/* Seta entre steps (apenas desktop, não no último) */}
                {i < steps.length - 1 && (
                  <ArrowRight className="hidden md:block absolute right-0 top-[52px] translate-x-1/2 w-4 h-4 text-border z-20" />
                )}

                <h3 className="text-lg font-extrabold text-foreground mb-2 tracking-tight">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{step.desc}</p>

                <span
                  className="inline-flex items-center gap-1 text-xs font-bold rounded-full px-3 py-1"
                  style={{
                    background: step.color === "emerald"
                      ? "hsl(158 72% 38% / 0.1)"
                      : step.color === "gold"
                      ? "hsl(42 90% 52% / 0.1)"
                      : "hsl(var(--primary) / 0.1)",
                    color: step.color === "emerald"
                      ? "hsl(158 72% 34%)"
                      : step.color === "gold"
                      ? "hsl(38 80% 42%)"
                      : "hsl(var(--primary))",
                  }}
                >
                  ✓ {step.detail}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA abaixo */}
        <div className="fade-up text-center mt-14">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            id="como-funciona-cta"
            className="btn-whatsapp inline-flex"
          >
            <MessageCircle className="w-5 h-5" />
            Começar agora — é gratuito o primeiro contato
          </a>
          <p className="text-muted-foreground text-sm mt-3">Sem compromisso · Resposta em minutos</p>
        </div>
      </div>
    </section>
  );
};

export default ComoFuncionaSection;
