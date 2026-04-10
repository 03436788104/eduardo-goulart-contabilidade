import { useEffect, useRef, useState } from "react";
import { TrendingUp, Users, DollarSign, Star, Clock } from "lucide-react";

/**
 * TickerSection — Faixa de prova social em tempo real
 *
 * Simula um contador de resultados "ao vivo" que incrementa
 * suavemente para criar urgência passiva sem ser agressivo.
 * Os valores base são reais; o ticker representa a progressão
 * do negócio ao longo do tempo.
 */

// Valor base + taxa de crescimento simulada por segundo
const METRICS = [
  {
    id: "economias",
    icon: DollarSign,
    base: 248000,      // R$ economizados pelos clientes (base)
    ratePerSec: 1.4,   // R$ ~1,40 por segundo (R$ 120/dia / 86400s)
    prefix: "R$ ",
    suffix: "",
    label: "economizados por clientes",
    color: "emerald",
  },
  {
    id: "clientes",
    icon: Users,
    base: 43,
    ratePerSec: 0,     // atualiza só periodicamente
    prefix: "",
    suffix: "+",
    label: "pessoas organizadas",
    color: "primary",
  },
  {
    id: "satisfacao",
    icon: Star,
    base: 94,
    ratePerSec: 0,
    prefix: "",
    suffix: "%",
    label: "de satisfação",
    color: "gold",
  },
  {
    id: "tempo",
    icon: Clock,
    base: 5,
    ratePerSec: 0,
    prefix: "< ",
    suffix: " min",
    label: "tempo de resposta",
    color: "primary",
  },
];

function formatValue(value: number, prefix: string, suffix: string) {
  if (prefix === "R$ ") {
    return prefix + value.toLocaleString("pt-BR", { maximumFractionDigits: 0 }) + suffix;
  }
  return prefix + value.toLocaleString("pt-BR") + suffix;
}

// Items que os clientes conquistaram (scrolls no ticker horizontal)
const ACHIEVEMENTS = [
  "✅ Mariana quitou R$ 6.000 em dívidas • hoje",
  "✅ Carlos reduziu 38% dos gastos mensais • esta semana",
  "✅ Patricia organizou o IRPF sem estresse • esta semana",
  "✅ Rafael saiu do cheque especial • este mês",
  "✅ Juliana começou a guardar R$ 400/mês • este mês",
  "✅ Fernanda eliminou 3 assinaturas desnecessárias • hoje",
  "✅ Diego renegociou dívida com 60% de desconto • esta semana",
  "✅ Ana Paula zerou o cartão de crédito • este mês",
];

const TickerSection = () => {
  const [values, setValues] = useState(() =>
    METRICS.reduce<Record<string, number>>((acc, m) => {
      acc[m.id] = m.base;
      return acc;
    }, {})
  );

  // Incrementa métricas com rate por segundo
  useEffect(() => {
    const interval = setInterval(() => {
      setValues((prev) => {
        const next = { ...prev };
        METRICS.forEach((m) => {
          if (m.ratePerSec > 0) {
            next[m.id] = prev[m.id] + m.ratePerSec * 0.1; // atualiza a cada 100ms
          }
        });
        return next;
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // Ticker horizontal infinito
  const tickerRef = useRef<HTMLDivElement>(null);
  const [tickerOffset, setTickerOffset] = useState(0);
  const frameRef = useRef<number>();
  const totalWidth = useRef(0);

  useEffect(() => {
    if (!tickerRef.current) return;
    totalWidth.current = tickerRef.current.scrollWidth / 2;
    let pos = 0;
    const animate = () => {
      pos -= 0.4;
      if (Math.abs(pos) >= totalWidth.current) pos = 0;
      setTickerOffset(pos);
      frameRef.current = requestAnimationFrame(animate);
    };
    frameRef.current = requestAnimationFrame(animate);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <div className="bg-foreground overflow-hidden">
      {/* ── Métricas estáticas ── */}
      <div className="max-w-5xl mx-auto px-4 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {METRICS.map((metric) => (
            <div
              key={metric.id}
              className="flex items-center gap-3"
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                style={{
                  background: metric.color === "emerald"
                    ? "hsl(158 72% 38% / 0.15)"
                    : metric.color === "gold"
                    ? "hsl(42 90% 52% / 0.15)"
                    : "hsl(222 84% 60% / 0.15)",
                }}
              >
                <metric.icon
                  className="w-4 h-4"
                  style={{
                    color: metric.color === "emerald"
                      ? "hsl(158 72% 55%)"
                      : metric.color === "gold"
                      ? "hsl(42 90% 65%)"
                      : "hsl(222 84% 70%)",
                  }}
                />
              </div>
              <div>
                <p
                  className="text-base md:text-lg font-black leading-none tabular-nums"
                  style={{
                    color: metric.color === "emerald"
                      ? "hsl(158 72% 55%)"
                      : metric.color === "gold"
                      ? "hsl(42 90% 65%)"
                      : "hsl(222 84% 70%)",
                  }}
                >
                  {formatValue(Math.round(values[metric.id]), metric.prefix, metric.suffix)}
                </p>
                <p className="text-[11px] text-white/40 leading-tight mt-0.5">{metric.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Ticker horizontal de conquistas ── */}
      <div className="border-t border-white/8 py-3 overflow-hidden relative">
        {/* Fade nas bordas */}
        <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, hsl(222 47% 11%), transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, hsl(222 47% 11%), transparent)" }} />

        <div
          ref={tickerRef}
          className="flex items-center gap-10 whitespace-nowrap"
          style={{ transform: `translateX(${tickerOffset}px)`, willChange: "transform" }}
        >
          {/* Duplica para loop infinito */}
          {[...ACHIEVEMENTS, ...ACHIEVEMENTS].map((item, i) => (
            <span key={i} className="text-sm text-white/50 font-medium flex-shrink-0">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TickerSection;
