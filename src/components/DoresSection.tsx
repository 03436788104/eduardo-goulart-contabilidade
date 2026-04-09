import { AlertCircle, CreditCard, FileQuestion, TrendingDown, EyeOff } from "lucide-react";

const pains = [
  { icon: EyeOff, text: "Você evita olhar seu saldo bancário por medo do que vai encontrar?" },
  { icon: TrendingDown, text: "Já perdeu totalmente o controle dos seus gastos no mês?" },
  { icon: CreditCard, text: "Está preso em dívidas que só aumentam com juros?" },
  { icon: FileQuestion, text: "Tem medo de errar na declaração do Imposto de Renda?" },
];

const DoresSection = () => {
  return (
    <section id="dores" className="py-20 md:py-28 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="fade-up section-title text-center mb-4">Você se identifica com alguma dessas situações?</h2>
        <p className="fade-up section-subtitle text-center mb-14">Se a resposta for sim para qualquer uma, você não está sozinho.</p>

        <div className="grid gap-6 sm:grid-cols-2 mb-12">
          {pains.map((pain, i) => (
            <div
              key={i}
              className="fade-up glass-card flex items-start gap-4"
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: "var(--hero-gradient)" }}>
                <pain.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <p className="text-foreground font-medium text-lg leading-relaxed">{pain.text}</p>
            </div>
          ))}
        </div>
        <div className="fade-up text-center">
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-secondary border border-border">
            <AlertCircle className="w-5 h-5 text-primary shrink-0" />
            <p className="text-muted-foreground text-base md:text-lg">
              Sem organização, o problema só cresce. Mas isso <strong className="text-foreground">pode ser resolvido com método.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoresSection;
