import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5565984464370";

const CTASection = () => {
  return (
    <section className="py-20 md:py-28 px-4 relative overflow-hidden">
      <div className="absolute inset-0 -z-10" style={{ background: "var(--hero-gradient)" }} />
      <div className="absolute top-10 left-10 w-64 h-64 rounded-full opacity-10 bg-primary-foreground animate-float" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h2 className="fade-up text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-foreground mb-4 leading-tight">
          Organize sua vida financeira com orientação segura
        </h2>
        <p className="fade-up text-lg md:text-xl text-primary-foreground/80 mb-10">
          Entre em contato e dê o primeiro passo para ter controle do seu dinheiro
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="fade-up btn-whatsapp-large inline-flex"
          style={{ background: "hsl(0 0% 100% / 0.15)", backdropFilter: "blur(10px)", border: "1px solid hsl(0 0% 100% / 0.3)" }}
        >
          <MessageCircle className="w-7 h-7" />
          Falar no WhatsApp agora
        </a>
      </div>
    </section>
  );
};

export default CTASection;
