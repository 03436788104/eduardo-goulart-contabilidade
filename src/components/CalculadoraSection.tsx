import { useState, useCallback, useMemo } from "react";
import { TrendingUp, TrendingDown, MessageCircle, RefreshCw, Info } from "lucide-react";

const WHATSAPP_BASE = "https://wa.me/5565984464370?text=";

// ── Categorias de despesa fixas com benchmarks de mercado ──
const EXPENSE_CATEGORIES = [
  { id: "moradia", label: "Moradia (aluguel/financ.)", icon: "🏠", maxPercent: 30, typical: 0.28, color: "primary" },
  { id: "alimentacao", label: "Alimentação", icon: "🍽️", maxPercent: 20, typical: 0.17, color: "emerald" },
  { id: "transporte", label: "Transporte", icon: "🚗", maxPercent: 15, typical: 0.12, color: "gold" },
  { id: "saude", label: "Saúde e Plano", icon: "💊", maxPercent: 10, typical: 0.08, color: "primary" },
  { id: "lazer", label: "Lazer e Entretenimento", icon: "🎬", maxPercent: 10, typical: 0.07, color: "emerald" },
  { id: "educacao", label: "Educação", icon: "📚", maxPercent: 10, typical: 0.06, color: "gold" },
  { id: "pessoal", label: "Gastos pessoais", icon: "🛍️", maxPercent: 5, typical: 0.05, color: "primary" },
];

type HealthGrade = "A" | "B" | "C" | "D";

interface HealthResult {
  grade: HealthGrade;
  label: string;
  color: string;
  message: string;
  potential: number;
}

function getHealthResult(income: number, totalExpenses: number, debt: number): HealthResult {
  const remaining = income - totalExpenses;
  const debtRatio = debt / income;
  const savingsRate = remaining / income;

  if (savingsRate >= 0.2 && debtRatio < 0.1) {
    return { grade: "A", label: "Excelente", color: "hsl(158 72% 38%)", message: "Suas finanças estão saudáveis! Hora de investir esse potencial.", potential: remaining };
  } else if (savingsRate >= 0.1 && debtRatio < 0.3) {
    return { grade: "B", label: "Bom", color: "hsl(222 84% 50%)", message: "Há margem para melhorar. Com ajustes simples, você pode investir muito mais.", potential: remaining };
  } else if (savingsRate >= 0 && debtRatio < 0.5) {
    return { grade: "C", label: "Atenção", color: "hsl(38 90% 48%)", message: "Situação de risco moderado. É possível estabilizar com um plano de ação certo.", potential: remaining };
  } else {
    return { grade: "D", label: "Crítico", color: "hsl(0 72% 52%)", message: "Situação exige ação imediata. Mas com método, a saída existe.", potential: remaining };
  }
}

function formatCurrency(v: number) {
  return v.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
}

function ColorBar({ percent, max, color }: { percent: number; max: number; color: string }) {
  const isOver = percent > max;
  return (
    <div className="flex items-center gap-2 mt-1">
      <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{
            width: `${Math.min((percent / (max * 1.5)) * 100, 100)}%`,
            background: isOver
              ? "linear-gradient(90deg, hsl(38 90% 48%), hsl(0 72% 52%))"
              : color === "emerald"
              ? "var(--emerald-gradient)"
              : color === "gold"
              ? "var(--gold-gradient)"
              : "var(--hero-gradient)",
          }}
        />
      </div>
      <span className={`text-[11px] font-bold w-8 text-right ${isOver ? "text-red-500" : "text-muted-foreground"}`}>
        {percent.toFixed(0)}%
      </span>
    </div>
  );
}

const CalculadoraSection = () => {
  const [income, setIncome] = useState(3000);
  const [debt, setDebt] = useState(0);
  const [expenses, setExpenses] = useState<Record<string, number>>(() =>
    Object.fromEntries(EXPENSE_CATEGORIES.map(c => [c.id, Math.round(c.typical * 3000)]))
  );

  const totalExpenses = useMemo(() => Object.values(expenses).reduce((a, b) => a + b, 0), [expenses]);

  const updateExpense = useCallback((id: string, value: number) => {
    setExpenses(prev => ({ ...prev, [id]: value }));
  }, []);

  const resetAll = useCallback(() => {
    setIncome(3000);
    setDebt(0);
    setExpenses(Object.fromEntries(EXPENSE_CATEGORIES.map(c => [c.id, Math.round(c.typical * 3000)])));
  }, []);

  const result = useMemo(() => getHealthResult(income, totalExpenses, debt), [income, totalExpenses, debt]);
  const remaining = income - totalExpenses;
  const savings12m = Math.max(remaining, 0) * 12;

  const whatsappMsg = encodeURIComponent(
    `Olá, Eduardo! Fiz a calculadora no site e meu resultado foi:\n\n` +
    `💰 Renda: ${formatCurrency(income)}\n` +
    `💸 Despesas: ${formatCurrency(totalExpenses)}\n` +
    `📊 Diagnóstico: ${result.label} (Nota ${result.grade})\n` +
    `💡 Potencial de sobra: ${formatCurrency(Math.max(remaining, 0))}/mês\n\n` +
    `Quero um plano para melhorar isso!`
  );

  return (
    <section id="calculadora" className="py-20 md:py-28 px-4 bg-background relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(hsl(var(--accent)) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="max-w-5xl mx-auto">
        <div className="fade-up text-center mb-12">
          <div className="section-divider" />
          <h2 className="section-title mb-4">
            Calculadora de{" "}
            <span className="text-gradient-emerald">Saúde Financeira</span>
          </h2>
          <p className="section-subtitle">
            Ajuste os sliders com seus valores reais e descubra{" "}
            <strong className="text-foreground">onde está o problema</strong> — e o potencial que você não enxerga.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">

          {/* ── Coluna de inputs ── */}
          <div className="fade-up glass-card">
            {/* Renda */}
            <div className="mb-6 pb-6 border-b border-border/50">
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-extrabold text-foreground uppercase tracking-wide">
                  💵 Renda Mensal Líquida
                </label>
                <span
                  className="text-lg font-black"
                  style={{ background: "var(--hero-gradient)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
                >
                  {formatCurrency(income)}
                </span>
              </div>
              <input
                type="range"
                min={500}
                max={20000}
                step={100}
                value={income}
                onChange={e => {
                  const val = Number(e.target.value);
                  setIncome(val);
                  // Ajusta automaticamente as despesas típicas proporcionalmente
                  setExpenses(Object.fromEntries(EXPENSE_CATEGORIES.map(c => [c.id, Math.round(c.typical * val)])));
                }}
                className="w-full h-2 rounded-full appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, hsl(222 84% 44%) ${((income - 500) / 19500) * 100}%, hsl(220 20% 88%) ${((income - 500) / 19500) * 100}%)`,
                }}
                id="slider-renda"
              />
              <div className="flex justify-between text-[11px] text-muted-foreground mt-1">
                <span>R$ 500</span>
                <span>R$ 20.000</span>
              </div>
            </div>

            {/* Dívidas */}
            <div className="mb-6 pb-6 border-b border-border/50">
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-extrabold text-foreground uppercase tracking-wide">
                  💳 Parcelas de Dívidas/mês
                </label>
                <span
                  className="text-lg font-black"
                  style={{ color: debt > 0 ? "hsl(0 72% 52%)" : "hsl(158 72% 38%)" }}
                >
                  {formatCurrency(debt)}
                </span>
              </div>
              <input
                type="range"
                min={0}
                max={Math.round(income * 0.7)}
                step={50}
                value={debt}
                onChange={e => setDebt(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, hsl(0 72% 52%) ${(debt / (income * 0.7)) * 100}%, hsl(220 20% 88%) ${(debt / (income * 0.7)) * 100}%)`,
                }}
                id="slider-dividas"
              />
              <div className="flex justify-between text-[11px] text-muted-foreground mt-1">
                <span>R$ 0</span>
                <span>{formatCurrency(Math.round(income * 0.7))}</span>
              </div>
            </div>

            {/* Categorias de despesa */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <p className="text-sm font-extrabold text-foreground uppercase tracking-wide">📊 Despesas por Categoria</p>
                <button
                  onClick={resetAll}
                  className="ml-auto flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
                  title="Resetar valores"
                >
                  <RefreshCw className="w-3 h-3" />
                  Resetar
                </button>
              </div>
              <div className="flex flex-col gap-4">
                {EXPENSE_CATEGORIES.map((cat) => {
                  const val = expenses[cat.id] ?? 0;
                  const pct = income > 0 ? (val / income) * 100 : 0;
                  const isOver = pct > cat.maxPercent;
                  return (
                    <div key={cat.id}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-semibold text-foreground">
                          {cat.icon} {cat.label}
                        </span>
                        <div className="flex items-center gap-2">
                          {isOver && (
                            <span className="text-[10px] font-bold text-red-500 bg-red-50 px-1.5 py-0.5 rounded-full">
                              acima do ideal
                            </span>
                          )}
                          <span className="text-xs font-black text-foreground">{formatCurrency(val)}</span>
                        </div>
                      </div>
                      <div className="relative">
                        <input
                          type="range"
                          min={0}
                          max={Math.round(income * 0.5)}
                          step={50}
                          value={val}
                          onChange={e => updateExpense(cat.id, Number(e.target.value))}
                          className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
                          style={{
                            background: `linear-gradient(to right, ${
                              isOver ? "hsl(0 72% 52%)" : cat.color === "emerald" ? "hsl(158 72% 38%)" : cat.color === "gold" ? "hsl(42 90% 52%)" : "hsl(222 84% 44%)"
                            } ${Math.min((val / (income * 0.5)) * 100, 100)}%, hsl(220 20% 88%) ${Math.min((val / (income * 0.5)) * 100, 100)}%)`,
                          }}
                          id={`slider-${cat.id}`}
                        />
                      </div>
                      <ColorBar percent={pct} max={cat.maxPercent} color={cat.color} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ── Coluna de resultado ── */}
          <div className="fade-up flex flex-col gap-5 lg:sticky lg:top-24" style={{ transitionDelay: "0.1s" }}>

            {/* Card principal de diagnóstico */}
            <div className="glass-card relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{ background: result.color }}
              />
              <div className="relative z-10">
                {/* Grade */}
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-white font-black text-2xl shrink-0"
                    style={{ background: result.color, boxShadow: `0 8px 24px ${result.color}44` }}
                  >
                    {result.grade}
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-0.5">Sua nota financeira</p>
                    <p className="text-2xl font-black text-foreground">{result.label}</p>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-5 border-l-2 border-border pl-3">
                  {result.message}
                </p>

                {/* Breakdown */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                  {[
                    { label: "Renda", value: income, color: "hsl(222 84% 44%)" },
                    { label: "Despesas totais", value: totalExpenses + debt, color: "hsl(0 72% 52%)" },
                    { label: "Sobra mensal", value: Math.max(remaining - debt, 0), color: "hsl(158 72% 38%)" },
                    { label: "Potencial 12 meses", value: Math.max(savings12m - debt * 12, 0), color: "hsl(42 90% 52%)" },
                  ].map((item) => (
                    <div key={item.label} className="bg-secondary/70 rounded-2xl p-3 text-center">
                      <p className="text-[11px] text-muted-foreground mb-1 font-medium">{item.label}</p>
                      <p className="font-black text-base" style={{ color: item.color }}>
                        {formatCurrency(item.value)}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Barra de saúde total */}
                <div className="mb-5">
                  <div className="flex justify-between text-xs font-semibold mb-1.5">
                    <span className="text-muted-foreground">Uso da renda</span>
                    <span style={{ color: (totalExpenses + debt) > income ? "hsl(0 72% 52%)" : "hsl(158 72% 38%)" }}>
                      {income > 0 ? (((totalExpenses + debt) / income) * 100).toFixed(0) : 0}%
                    </span>
                  </div>
                  <div className="h-3 rounded-full bg-muted overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{
                        width: `${Math.min(((totalExpenses + debt) / income) * 100, 100)}%`,
                        background: (totalExpenses + debt) > income
                          ? "linear-gradient(90deg, hsl(38 90% 48%), hsl(0 72% 52%))"
                          : (totalExpenses + debt) / income > 0.8
                          ? "linear-gradient(90deg, hsl(158 72% 38%), hsl(38 90% 48%))"
                          : "var(--emerald-gradient)",
                      }}
                    />
                  </div>
                  <div className="flex justify-between text-[10px] text-muted-foreground mt-1">
                    <span>Ideal: até 80% da renda</span>
                    <span>100%</span>
                  </div>
                </div>

                {/* Nota informativa */}
                <div className="flex items-start gap-2 text-[11px] text-muted-foreground bg-secondary/60 rounded-xl p-3 mb-5">
                  <Info className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                  <span>Os benchmarks usados são da <strong>regra 50-30-20</strong> adaptada ao padrão brasileiro de custo de vida.</span>
                </div>

                {/* CTA contextual */}
                <a
                  href={WHATSAPP_BASE + whatsappMsg}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="calculadora-cta"
                  className="btn-emerald w-full justify-center"
                >
                  <MessageCircle className="w-5 h-5" />
                  Quero um plano para melhorar isso
                </a>
              </div>
            </div>

            {/* Dica de benchmark */}
            <div className="glass-card !p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                📐 Benchmarks recomendados
              </p>
              <div className="flex flex-col gap-2">
                {EXPENSE_CATEGORIES.map(cat => (
                  <div key={cat.id} className="flex items-center gap-2 text-xs">
                    <span>{cat.icon}</span>
                    <span className="text-muted-foreground flex-1">{cat.label}</span>
                    <span className="font-bold text-foreground">até {cat.maxPercent}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Estilos dos sliders inline (cross-browser) */}
      <style>{`
        input[type="range"] {
          -webkit-appearance: none;
          appearance: none;
          outline: none;
        }
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: white;
          border: 2px solid hsl(222 84% 44%);
          cursor: pointer;
          box-shadow: 0 1px 6px rgba(0,0,0,0.15);
          transition: transform 0.15s;
        }
        input[type="range"]::-webkit-slider-thumb:hover {
          transform: scale(1.2);
        }
        input[type="range"]::-moz-range-thumb {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: white;
          border: 2px solid hsl(222 84% 44%);
          cursor: pointer;
          box-shadow: 0 1px 6px rgba(0,0,0,0.15);
        }
      `}</style>
    </section>
  );
};

export default CalculadoraSection;
