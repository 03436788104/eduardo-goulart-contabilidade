import { AlertCircle, CreditCard, FileQuestion, TrendingDown, EyeOff, ArrowDown } from "lucide-react";

const pains = [
  {
    icon: EyeOff,
    text: "Você evita olhar o saldo bancário por medo do que vai encontrar?",
    color: "gold",
  },
  {
    icon: TrendingDown,
    text: "O dinheiro some e você não sabe explicar para onde foi?",
    color: "primary",
  },
  {
    icon: CreditCard,
    text: "Está preso em dívidas que só crescem com juros?",
    color: "destructive",
  },
  {
    icon: FileQuestion,
    text: "Tem medo de errar na declaração do Imposto de Renda?",
    color: "emerald",
  },
];

const DoresSection = () => {
  return (
    <section id="dores" className="py-20 md:py-28 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="fade-up text-center mb-14">
          <div className="section-divider" />
          <h2 className="section-title mb-4">
            Você se identifica com{" "}
            <span className="text-gradient">alguma dessas situações</span>?
          </h2>
          <p className="section-subtitle">
            Se a resposta for sim para qualquer uma,{" "}
            <strong className="text-foreground">você não está sozinho — e existe saída.</strong>
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 mb-12">
          {pains.map((pain, i) => (
            <div
              key={i}
              className="fade-up glass-card group flex items-start gap-4"
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              {/* Ícone com cor temática */}
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: pain.color === "gold"
                    ? "var(--gold-gradient)"
                    : pain.color === "destructive"
                    ? "linear-gradient(135deg, hsl(0 70% 52%), hsl(0 70% 62%))"
                    : pain.color === "emerald"
                    ? "var(--emerald-gradient)"
                    : "var(--hero-gradient)",
                }}
              >
                <pain.icon className="w-5 h-5 text-white" />
              </div>

              {/* Texto */}
              <p className="text-foreground font-semibold text-base leading-relaxed pt-1">
                {pain.text}
              </p>
            </div>
          ))}
        </div>

        {/* Banner de virada */}
        <div className="fade-up">
          <div className="relative glass-card-accent p-6 md:p-8 text-center overflow-hidden">
            {/* Fundo sutil */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{ background: "var(--hero-gradient)" }}
            />
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-2 mb-3">
                <AlertCircle className="w-5 h-5 text-primary" />
                <p className="text-foreground font-bold text-base md:text-lg">
                  Sem organização, o problema só cresce.
                </p>
              </div>
              <p className="text-muted-foreground text-base mb-4">
                Mas isso{" "}
                <strong className="text-foreground">pode ser resolvido com método e acompanhamento certo</strong>.
                A maioria dos clientes vê resultados concretos já no primeiro mês.
              </p>
              <a
                href="#como-funciona"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("como-funciona")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all duration-200"
              >
                Ver como funciona
                <ArrowDown className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoresSection;
