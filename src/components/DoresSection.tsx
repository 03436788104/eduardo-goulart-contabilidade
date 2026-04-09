import { AlertCircle, CreditCard, FileQuestion, TrendingDown } from "lucide-react";

const pains = [
  { icon: TrendingDown, text: "Você chega ao fim do mês sem controle dos seus gastos?" },
  { icon: CreditCard, text: "Está com dívidas acumulando juros?" },
  { icon: FileQuestion, text: "Tem insegurança ao lidar com seu Imposto de Renda?" },
];

const DoresSection = () => {
  return (
    <section id="dores" className="py-20 md:py-28 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="grid gap-6 md:grid-cols-3 mb-12">
          {pains.map((pain, i) => (
            <div
              key={i}
              className="fade-up glass-card text-center flex flex-col items-center gap-4"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div className="w-14 h-14 rounded-xl flex items-center justify-center" style={{ background: "var(--hero-gradient)" }}>
                <pain.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <p className="text-foreground font-medium text-lg leading-relaxed">{pain.text}</p>
            </div>
          ))}
        </div>
        <div className="fade-up text-center">
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-secondary border border-border">
            <AlertCircle className="w-5 h-5 text-primary shrink-0" />
            <p className="text-muted-foreground text-base md:text-lg">
              A falta de organização financeira pode ser resolvida com <strong className="text-foreground">método, clareza e acompanhamento adequado.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoresSection;
