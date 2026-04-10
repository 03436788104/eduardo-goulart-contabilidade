import { Shield, BookOpen, Users, CheckCircle, MessageCircle, Award, Clock } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5565984464370?text=Ol%C3%A1%2C%20Eduardo!%20Vim%20pelo%20site%20e%20quero%20conhecer%20seu%20trabalho.";

const highlights = [
  { text: "Último semestre de Ciências Contábeis (formação técnica sólida)" },
  { text: "Mais de 40 pessoas atendidas e organizadas financeiramente" },
  { text: "Foco total em resultados práticos, não só teoria" },
  { text: "Atendimento humanizado, 100% online via WhatsApp" },
  { text: "Acompanhamento contínuo durante toda a jornada" },
];

const pillars = [
  {
    icon: BookOpen,
    title: "Formação técnica",
    desc: "Ciências Contábeis — último semestre. Base sólida alinhada à prática.",
    color: "primary",
  },
  {
    icon: Shield,
    title: "Ética e transparência",
    desc: "Total clareza sobre o escopo de atuação. Sem promessas falsas.",
    color: "emerald",
  },
  {
    icon: Users,
    title: "Atendimento online",
    desc: "100% via WhatsApp. Flexível para a sua rotina.",
    color: "gold",
  },
  {
    icon: Clock,
    title: "Resposta rápida",
    desc: "Respostas em minutos durante o horário de atendimento.",
    color: "primary",
  },
];

const SobreSection = () => {
  return (
    <section id="sobre" className="py-20 md:py-28 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="fade-up text-center mb-14">
          <div className="section-divider" />
          <h2 className="section-title mb-4">
            Quem vai te{" "}
            <span className="text-gradient">ajudar</span>
          </h2>
          <p className="section-subtitle">
            Conheça o profissional por trás do seu planejamento financeiro.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">

          {/* Coluna esquerda — Apresentação */}
          <div className="fade-up">
            <div className="glass-card mb-6">
              {/* Avatar placeholder premium */}
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-border/60">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-white font-black text-2xl shrink-0"
                  style={{ background: "var(--hero-gradient)" }}
                >
                  EG
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-foreground tracking-tight">Eduardo Goulart</h3>
                  <p className="text-muted-foreground text-sm">Orientador Financeiro Pessoal</p>
                  <div className="flex items-center gap-1.5 mt-1">
                    <Award className="w-3.5 h-3.5 text-accent" />
                    <span className="text-xs font-semibold text-accent">Ciências Contábeis (em formação)</span>
                  </div>
                </div>
              </div>

              <p className="text-foreground text-base leading-relaxed mb-4">
                Meu nome é <strong>Eduardo Goulart</strong>. Estou no último semestre de{" "}
                <strong>Ciências Contábeis</strong> e já ajudei dezenas de pessoas a organizarem suas finanças,
                saírem de dívidas e terem mais segurança com o dinheiro.
              </p>
              <p className="text-foreground text-base leading-relaxed">
                Minha abordagem é <strong>prática e direta</strong>: analiso sua situação real,
                crio um plano de ação personalizado e te acompanho até você ter{" "}
                <strong>controle total das suas finanças</strong>.
              </p>
            </div>

            {/* Aviso de transparência */}
            <div className="rounded-2xl bg-secondary/70 border border-border/60 px-5 py-4 text-sm text-muted-foreground">
              <p>
                <strong className="text-foreground">⚖️ Transparência:</strong>{" "}
                Por ética profissional, Eduardo não assina demonstrações contábeis nem assume
                responsabilidade técnica por declarações oficiais. O foco é{" "}
                <strong className="text-foreground">orientação, organização e planejamento financeiro pessoal</strong>.
              </p>
            </div>
          </div>

          {/* Coluna direita — Highlights + Pilares */}
          <div className="fade-up" style={{ transitionDelay: "0.1s" }}>
            {/* Lista de diferenciais */}
            <div className="glass-card mb-6">
              <h4 className="font-extrabold text-foreground mb-4 text-base">Por que trabalhar com Eduardo?</h4>
              <div className="flex flex-col gap-3">
                {highlights.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <p className="text-foreground text-sm leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Pilares em grid 2x2 */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {pillars.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-2 p-4 rounded-2xl bg-secondary/60 border border-border/50
                             transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{
                      background: item.color === "emerald"
                        ? "var(--emerald-gradient)"
                        : item.color === "gold"
                        ? "var(--gold-gradient)"
                        : "var(--hero-gradient)",
                    }}
                  >
                    <item.icon className="w-4 h-4 text-white" />
                  </div>
                  <p className="font-bold text-foreground text-xs">{item.title}</p>
                  <p className="text-muted-foreground text-[11px] leading-snug">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              id="sobre-cta"
              className="btn-whatsapp w-full justify-center"
            >
              <MessageCircle className="w-5 h-5" />
              Falar com Eduardo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreSection;
