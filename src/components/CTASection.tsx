import { MessageCircle, ArrowRight, Clock, Shield, Zap } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5565984464370?text=Ol%C3%A1%2C%20Eduardo!%20Vim%20pelo%20site%20e%20quero%20come%C3%A7ar%20agora!";

const guarantees = [
  { icon: Clock, text: "Resposta em minutos" },
  { icon: Shield, text: "Sem compromisso" },
  { icon: Zap, text: "Resultado desde o 1º mês" },
];

const CTASection = () => {
  return (
    <section id="contato" className="py-24 md:py-32 px-4 relative overflow-hidden">
      {/* Background gradient rico */}
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "var(--hero-gradient)" }}
      />

      {/* Blobs decorativos */}
      <div
        className="absolute top-[-15%] right-[-10%] w-[450px] h-[450px] opacity-[0.10] hero-blob"
        style={{ background: "radial-gradient(circle, white, transparent)" }}
      />
      <div
        className="absolute bottom-[-10%] left-[-8%] w-[350px] h-[350px] opacity-[0.08] hero-blob"
        style={{
          background: "radial-gradient(circle, hsl(158 72% 60%), transparent)",
          animationDelay: "4s"
        }}
      />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        {/* Badge urgency */}
        <div className="fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/12 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-semibold mb-8">
          <Zap className="w-4 h-4 text-amber-300" />
          Vagas limitadas para acompanhamento mensal
        </div>

        <h2 className="fade-up text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-5 tracking-tight">
          Você pode continuar{" "}
          <span className="opacity-70">sem controle…</span>
          <br />
          ou começar a mudar{" "}
          <span
            className="relative inline-block"
            style={{
              background: "var(--emerald-gradient)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            hoje
          </span>
          .
        </h2>

        <p className="fade-up text-lg md:text-xl text-white/75 mb-10 leading-relaxed">
          A decisão é sua. O primeiro passo é{" "}
          <strong className="text-white">uma conversa gratuita</strong> — sem compromisso,
          sem enrolação.
        </p>

        {/* CTA principal */}
        <div className="fade-up mb-6">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            id="cta-final-whatsapp"
            className="btn-whatsapp-large inline-flex group"
            style={{
              background: "hsl(0 0% 100%)",
              color: "hsl(222 84% 38%)",
              boxShadow: "0 8px 32px hsl(0 0% 0% / 0.25)",
            }}
          >
            <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
            Falar com Eduardo no WhatsApp
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Garantias */}
        <div className="fade-up flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {guarantees.map((g, i) => (
            <span key={i} className="flex items-center gap-1.5 text-white/65 text-sm">
              <g.icon className="w-4 h-4 text-white/50" />
              {g.text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
