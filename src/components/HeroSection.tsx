import { MessageCircle, Zap, Clock } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5565984464370";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      <div className="absolute inset-0 -z-10" style={{ background: "var(--hero-gradient)" }} />
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full opacity-10 bg-accent animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full opacity-5 bg-primary-foreground animate-float" style={{ animationDelay: "1.5s" }} />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="animate-fade-in inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground/90 text-sm font-medium mb-8">
          <Zap className="w-4 h-4" />
          Atendimento 100% online · Resposta rápida
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-6 animate-fade-in">
          Seu salário desaparece antes do fim do mês e você não sabe para onde vai?
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/85 mb-10 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Chega de viver no vermelho. Tenha um plano claro para organizar suas finanças, sair das dívidas e tomar decisões com segurança.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp-large animate-fade-in inline-flex"
          style={{ animationDelay: "0.4s" }}
        >
          <MessageCircle className="w-6 h-6" />
          Quero organizar minha vida financeira
        </a>
        <div className="animate-fade-in flex items-center justify-center gap-4 mt-6 text-primary-foreground/60 text-sm" style={{ animationDelay: "0.6s" }}>
          <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> Resposta em minutos</span>
          <span>•</span>
          <span>Sem compromisso</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
