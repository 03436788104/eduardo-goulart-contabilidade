import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5565984464370";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      <div className="absolute inset-0 -z-10" style={{ background: "var(--hero-gradient)" }} />
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full opacity-10 bg-accent animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full opacity-5 bg-primary-foreground animate-float" style={{ animationDelay: "1.5s" }} />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-6 animate-fade-in">
          Você sente que seu dinheiro desaparece e não sabe como organizar sua vida financeira?
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Tenha controle, reduza dívidas e tome decisões mais seguras com orientação financeira estruturada
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp-large animate-fade-in inline-flex"
          style={{ animationDelay: "0.4s" }}
        >
          <MessageCircle className="w-6 h-6" />
          Falar no WhatsApp
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
