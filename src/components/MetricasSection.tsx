import { useEffect, useRef, useState } from "react";

interface CounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

function AnimatedCounter({ target, suffix = "", prefix = "", duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const step = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <div ref={ref} className="animate-count-up">
      {prefix}{count.toLocaleString("pt-BR")}{suffix}
    </div>
  );
}

const stats = [
  {
    value: 40,
    suffix: "+",
    label: "Clientes atendidos",
    desc: "Pessoas que retomaram o controle financeiro",
    color: "primary",
  },
  {
    value: 6000,
    prefix: "R$ ",
    suffix: "",
    label: "Economizados em média",
    desc: "Por cliente no primeiro ano de organização",
    color: "emerald",
  },
  {
    value: 94,
    suffix: "%",
    label: "Taxa de satisfação",
    desc: "Clientes que indicariam o serviço a amigos",
    color: "gold",
  },
  {
    value: 1,
    suffix: "º mês",
    label: "Já vê resultados",
    desc: "A maioria percebe mudanças no primeiro mês",
    color: "primary",
  },
];

const MetricasSection = () => {
  return (
    <section className="py-16 md:py-20 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="fade-up text-center mb-12">
          <div className="section-divider" />
          <h2 className="section-title mb-3">
            Resultados que{" "}
            <span className="text-gradient-emerald">falam por si</span>
          </h2>
          <p className="section-subtitle">
            Números reais, de pessoas reais que decidiram agir.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="fade-up stat-card group"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Top accent bar */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px] rounded-t-3xl"
                style={{
                  background: stat.color === "emerald"
                    ? "var(--emerald-gradient)"
                    : stat.color === "gold"
                    ? "var(--gold-gradient)"
                    : "var(--hero-gradient)"
                }}
              />

              <div
                className="stat-number mb-1"
                style={{
                  background: stat.color === "emerald"
                    ? "var(--emerald-gradient)"
                    : stat.color === "gold"
                    ? "var(--gold-gradient)"
                    : "var(--hero-gradient)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                  duration={1800 + i * 150}
                />
              </div>
              <p className="font-bold text-foreground text-sm mb-1">{stat.label}</p>
              <p className="text-muted-foreground text-xs leading-snug">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricasSection;
