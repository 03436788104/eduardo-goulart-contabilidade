import { useState } from "react";
import {
  MessageCircle,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  TrendingDown,
  CreditCard,
  PiggyBank,
  Briefcase,
  DollarSign,
  Wallet,
  Send,
} from "lucide-react";

const WHATSAPP_BASE = "https://wa.me/5565984464370?text=";

type Step = 1 | 2 | 3;

interface FormData {
  desafio: string;
  renda: string;
  nome: string;
  whatsapp: string;
}

const desafios = [
  { id: "dividas", label: "Sair das dívidas", icon: CreditCard },
  { id: "organizar", label: "Organizar meu dinheiro", icon: Wallet },
  { id: "poupar", label: "Começar a poupar/investir", icon: PiggyBank },
  { id: "imposto", label: "Apoio no Imposto de Renda", icon: Briefcase },
];

const rendas = [
  { id: "ate2k", label: "Até R$ 2.000" },
  { id: "2k5k", label: "R$ 2.000 – R$ 5.000" },
  { id: "5k10k", label: "R$ 5.000 – R$ 10.000" },
  { id: "acima10k", label: "Acima de R$ 10.000" },
];

const stepTitles: Record<Step, string> = {
  1: "Qual é seu maior desafio financeiro hoje?",
  2: "Qual é sua faixa de renda mensal?",
  3: "Quase lá — como podemos entrar em contato?",
};

const stepSubtitles: Record<Step, string> = {
  1: "Escolha a opção que mais se aproxima da sua situação.",
  2: "Isso ajuda a personalizar seu plano de ação.",
  3: "Envie seus dados e Eduardo entrará em contato para a sua análise gratuita.",
};

const DiagnosticoForm = () => {
  const [step, setStep] = useState<Step>(1);
  const [form, setForm] = useState<FormData>({ desafio: "", renda: "", nome: "", whatsapp: "" });
  const [submitted, setSubmitted] = useState(false);

  const progress = ((step - 1) / 3) * 100;

  const handleSubmit = () => {
    const desafioLabel = desafios.find(d => d.id === form.desafio)?.label ?? form.desafio;
    const rendaLabel = rendas.find(r => r.id === form.renda)?.label ?? form.renda;

    const msg = encodeURIComponent(
      `Olá, Eduardo! Vim pelo site e fiz o diagnóstico.\n\n` +
      `👤 Nome: ${form.nome}\n` +
      `📌 Desafio: ${desafioLabel}\n` +
      `💰 Renda: ${rendaLabel}\n\n` +
      `Quero meu plano de ação personalizado!`
    );

    setSubmitted(true);
    setTimeout(() => {
      window.open(WHATSAPP_BASE + msg, "_blank");
    }, 600);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center gap-4 animate-step-in">
        <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: "var(--emerald-gradient)" }}>
          <CheckCircle2 className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-bold text-foreground">Diagnóstico enviado!</h3>
        <p className="text-muted-foreground text-sm max-w-xs">
          Você será redirecionado para o WhatsApp. Eduardo analisará sua situação e entrará em contato em breve.
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Progress */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
            Etapa {step} de 3
          </span>
          <span className="text-xs font-bold text-accent">{Math.round(progress)}% concluído</span>
        </div>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>
      </div>

      {/* Title */}
      <div className="mb-6 animate-step-in" key={`title-${step}`}>
        <h3 className="text-xl font-extrabold text-foreground mb-1 tracking-tight">{stepTitles[step]}</h3>
        <p className="text-sm text-muted-foreground">{stepSubtitles[step]}</p>
      </div>

      {/* Step 1 — Desafio */}
      {step === 1 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 animate-step-in">
          {desafios.map((d) => (
            <button
              key={d.id}
              id={`desafio-${d.id}`}
              onClick={() => setForm(f => ({ ...f, desafio: d.id }))}
              className={`option-card ${form.desafio === d.id ? "selected" : ""}`}
            >
              <d.icon className="w-4 h-4 shrink-0" />
              {d.label}
            </button>
          ))}
          <button
            disabled={!form.desafio}
            onClick={() => setStep(2)}
            className="sm:col-span-2 mt-2 btn-whatsapp !py-3.5 !text-sm justify-center disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0"
          >
            Continuar <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Step 2 — Renda */}
      {step === 2 && (
        <div className="animate-step-in">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            {rendas.map((r) => (
              <button
                key={r.id}
                id={`renda-${r.id}`}
                onClick={() => setForm(f => ({ ...f, renda: r.id }))}
                className={`option-card ${form.renda === r.id ? "selected" : ""}`}
              >
                <DollarSign className="w-4 h-4 shrink-0" />
                {r.label}
              </button>
            ))}
          </div>
          <div className="flex gap-3">
            <button onClick={() => setStep(1)} className="btn-outline-primary !px-4 !py-3">
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              disabled={!form.renda}
              onClick={() => setStep(3)}
              className="flex-1 btn-whatsapp !py-3.5 !text-sm justify-center disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
              Continuar <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Step 3 — Contato */}
      {step === 3 && (
        <div className="animate-step-in">
          <div className="flex flex-col gap-3 mb-4">
            <div>
              <label className="block text-xs font-semibold text-muted-foreground mb-1.5 uppercase tracking-wide">Seu nome</label>
              <input
                type="text"
                id="form-nome"
                placeholder="Ex: Maria Silva"
                value={form.nome}
                onChange={e => setForm(f => ({ ...f, nome: e.target.value }))}
                className="input-premium"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-muted-foreground mb-1.5 uppercase tracking-wide">WhatsApp com DDD</label>
              <input
                type="tel"
                id="form-whatsapp"
                placeholder="Ex: (11) 99999-0000"
                value={form.whatsapp}
                onChange={e => setForm(f => ({ ...f, whatsapp: e.target.value }))}
                className="input-premium"
              />
            </div>
          </div>
          <p className="text-xs text-muted-foreground mb-4 flex items-start gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-accent mt-0.5 shrink-0" />
            Seus dados são confidenciais e serão usados apenas para o diagnóstico.
          </p>
          <div className="flex gap-3">
            <button onClick={() => setStep(2)} className="btn-outline-primary !px-4 !py-3">
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              disabled={!form.nome || !form.whatsapp}
              onClick={handleSubmit}
              className="flex-1 btn-emerald !py-3.5 !text-sm justify-center disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
              <Send className="w-4 h-4" />
              Enviar diagnóstico
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const DiagnosticoSection = () => {
  return (
    <section id="diagnostico" className="py-20 md:py-28 px-4 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <div className="fade-up text-center mb-14">
          <div className="section-divider" />
          <h2 className="section-title mb-4">
            Faça seu{" "}
            <span className="text-gradient">diagnóstico gratuito</span>
          </h2>
          <p className="section-subtitle">
            Responda 3 perguntas rápidas e receba um plano de ação personalizado.
            <strong className="text-foreground"> Leva menos de 1 minuto.</strong>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Formulário */}
          <div className="fade-up glass-card">
            <DiagnosticoForm />
          </div>

          {/* Contexto/motivação lateral */}
          <div className="fade-up flex flex-col gap-5" style={{ transitionDelay: "0.1s" }}>
            <div className="glass-card-accent">
              <div className="flex items-start gap-4">
                <div className="icon-box-emerald w-12 h-12 shrink-0">
                  <TrendingDown className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Por que fazer o diagnóstico?</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Identificar o <strong className="text-foreground">ponto de partida real</strong> é o que diferencia
                    quem finalmente muda de quem continua tentando sem resultado.
                  </p>
                </div>
              </div>
            </div>

            {[
              { step: "01", title: "Você responde 3 perguntas rápidas", desc: "Sobre seu desafio e perfil financeiro atual." },
              { step: "02", title: "Eduardo analisa sua situação", desc: "Com base no seu perfil, ele prepara um diagnóstico inicial." },
              { step: "03", title: "Você recebe um plano de ação", desc: "Simples, direto e aplicável à sua realidade." },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-sm shrink-0"
                  style={{ background: "var(--hero-gradient)" }}
                >
                  {item.step}
                </div>
                <div>
                  <p className="font-bold text-foreground text-sm">{item.title}</p>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </div>
            ))}

            <a
              href={`${WHATSAPP_BASE}Ol%C3%A1%2C%20Eduardo!%20Vim%20pelo%20site.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-primary text-sm justify-center"
            >
              <MessageCircle className="w-4 h-4" />
              Ou fale direto no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiagnosticoSection;
