import { Star, Quote, TrendingUp, DollarSign, Heart } from "lucide-react";

const testimonials = [
  {
    name: "Mariana S.",
    role: "Professora",
    result: "Quitou R$ 6.000 em dívidas",
    resultIcon: DollarSign,
    text: "Eu achava que nunca ia sair do vermelho. Em poucos meses com o plano do Eduardo, quitei R$ 6 mil em dívidas. Hoje consigo até guardar dinheiro todo mês.",
    color: "emerald",
  },
  {
    name: "Carlos R.",
    role: "Analista de TI",
    result: "Controle total dos gastos",
    resultIcon: TrendingUp,
    text: "Antes eu não sabia nem quanto ganhava direito. Hoje sei exatamente para onde vai cada centavo e consigo planejar o mês inteiro com tranquilidade.",
    color: "primary",
    featured: true,
  },
  {
    name: "Patrícia L.",
    role: "Autônoma",
    result: "Reduziu 40% dos gastos",
    resultIcon: DollarSign,
    text: "O Eduardo me mostrou gastos invisíveis que eu nem percebia. Cortei o que não fazia sentido e sobraram quase R$ 800 por mês que eu não via antes.",
    color: "gold",
  },
  {
    name: "Rafael M.",
    role: "Comerciante",
    result: "Parou de viver no aperto",
    resultIcon: Heart,
    text: "Eu vivia contando moedas no fim do mês. Com a organização financeira, parei de viver no aperto e finalmente tenho tranquilidade para encarar o mês.",
    color: "emerald",
  },
  {
    name: "Juliana T.",
    role: "Enfermeira",
    result: "IR sem dor de cabeça",
    resultIcon: TrendingUp,
    text: "Sempre tive pavor do Imposto de Renda. O Eduardo organizou tudo comigo e me explicou cada etapa. Foi a primeira vez que fiz minha declaração sem estresse.",
    color: "primary",
  },
];

const DepoimentosSection = () => {
  return (
    <section id="depoimentos" className="py-20 md:py-28 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="fade-up text-center mb-14">
          <div className="section-divider" />
          <h2 className="section-title mb-4">
            Resultados reais de{" "}
            <span className="text-gradient">quem já começou</span>
          </h2>
          <p className="section-subtitle">
            Pessoas como você que decidiram sair do vermelho e retomar o controle.
          </p>
        </div>

        {/* Grid de depoimentos */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`fade-up glass-card flex flex-col relative ${t.featured ? "ring-2 ring-primary/30" : ""}`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              {/* Badge do resultado */}
              <div
                className="inline-flex items-center gap-1.5 text-xs font-bold rounded-full px-3 py-1 mb-4 self-start"
                style={{
                  background: t.color === "emerald"
                    ? "hsl(158 72% 38% / 0.1)"
                    : t.color === "gold"
                    ? "hsl(42 90% 52% / 0.1)"
                    : "hsl(var(--primary) / 0.1)",
                  color: t.color === "emerald"
                    ? "hsl(158 72% 34%)"
                    : t.color === "gold"
                    ? "hsl(38 80% 38%)"
                    : "hsl(var(--primary))",
                }}
              >
                <t.resultIcon className="w-3 h-3" />
                {t.result}
              </div>

              {/* Quote icon */}
              <Quote
                className="w-7 h-7 mb-2 opacity-15"
                style={{
                  color: t.color === "emerald"
                    ? "hsl(158 72% 38%)"
                    : t.color === "gold"
                    ? "hsl(42 90% 52%)"
                    : "hsl(var(--primary))",
                }}
              />

              {/* Texto */}
              <p className="text-foreground text-sm leading-relaxed flex-1 mb-5">
                "{t.text}"
              </p>

              {/* Autor */}
              <div className="border-t border-border/50 pt-4 flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-black text-xs shrink-0"
                  style={{
                    background: t.color === "emerald"
                      ? "var(--emerald-gradient)"
                      : t.color === "gold"
                      ? "var(--gold-gradient)"
                      : "var(--hero-gradient)",
                  }}
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-foreground text-sm">{t.name}</p>
                  <p className="text-muted-foreground text-xs">{t.role}</p>
                </div>
                {/* Estrelas */}
                <div className="flex gap-0.5 ml-auto">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Nota de prova social adicional */}
        <div className="fade-up mt-10 text-center">
          <p className="text-muted-foreground text-sm">
            <strong className="text-foreground">+40 pessoas</strong> já organizaram suas finanças com Eduardo Goulart.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DepoimentosSection;
