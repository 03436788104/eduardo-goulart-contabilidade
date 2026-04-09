import { MessageCircle, ArrowRight } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5565984464370";

const CTASection = () => {
  return (
    <section id="contato" className="py-20 md:py-28 px-4 relative overflow-hidden">
      <div className="absolute inset-0 -z-10" style={{ background: "var(--hero-gradient)" }} />
      <div className="absolute top-10 left-10 w-64 h-64 rounded-full opacity-10 bg-primary-foreground animate-float" />
      <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full opacity-5 bg-accent animate-float" style={{ animationDelay: "2s" }} />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h2 className="fade-up text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-foreground mb-4 leading-tight">
          Você pode continuar sem controle… ou começar a mudar hoje
        </h2>
        <p className="fade-up text-lg md:text-xl text-primary-foreground/85 mb-10">
          A decisão é sua. O primeiro passo é simples: uma conversa sem compromisso.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="fade-up btn-whatsapp-large inline-flex"
        >
          <MessageCircle className="w-7 h-7" />
          Falar com Eduardo no WhatsApp
          <ArrowRight className="w-5 h-5" />
        </a>
        <p className="fade-up text-primary-foreground/50 text-sm mt-6">
          Atendimento online · Resposta rápida · Sem compromisso
        </p>
      </div>
    </section>
  );
};

export default CTASection;
