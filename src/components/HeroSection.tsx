import { MessageCircle, Clock, Star, ChevronDown, TrendingUp } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import DashboardSVG from "./DashboardSVG";

// Contador animado para o hero
function AnimatedCounter({ target, suffix = "", prefix = "" }: { target: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
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
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString("pt-BR")}{suffix}
    </span>
  );
}

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-32 pb-24">
      {/* Background gradient premium */}
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "var(--hero-gradient)" }}
      />

      {/* Blobs orgânicos decorativos */}
      <div
        className="absolute top-[-10%] right-[-8%] w-[500px] h-[500px] opacity-[0.12] hero-blob"
        style={{ background: "radial-gradient(circle, hsl(200 90% 70%), hsl(222 84% 44%))" }}
      />
      <div
        className="absolute bottom-[-5%] left-[-5%] w-[380px] h-[380px] opacity-[0.08] hero-blob"
        style={{
          background: "radial-gradient(circle, hsl(158 72% 60%), hsl(200 90% 70%))",
          animationDelay: "3s"
        }}
      />

      {/* Conteúdo principal */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10">
        
        {/* Lado Esquerdo: Texto e CTAs */}
        <div className="flex-1 text-center lg:text-left">
          {/* Badge de prova social */}
          <div className="animate-fade-in mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/12 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-semibold">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-white/60">·</span>
            <span>+40 pessoas atendidas e financeiramente organizadas</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 animate-fade-in tracking-tight">
            Seu dinheiro some{" "}
            <br className="hidden sm:block" />
            <span className="relative inline-block">
              antes do fim do mês?
              <span
                className="absolute -bottom-1 left-0 right-0 h-1.5 rounded-full opacity-70"
                style={{ background: "var(--emerald-gradient)" }}
              />
            </span>
          </h1>

          <p
            className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-fade-in"
            style={{ animationDelay: "0.15s" }}
          >
            Chega de viver no vermelho. Com um{" "}
            <strong className="text-white font-bold">plano financeiro personalizado</strong>,
            você organiza suas finanças, sai das dívidas e começa a guardar dinheiro.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <a
              href="https://wa.me/5565984464370?text=Ol%C3%A1%2C%20Eduardo!%20Vim%20pelo%20site%20e%20quero%20organizar%20minhas%20finan%C3%A7as."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp-large group min-w-[280px] justify-center"
            >
              <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
              Quero organizar minhas finanças
            </a>
            <a
              href="#diagnostico"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("diagnostico")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl font-semibold text-white/90 bg-white/10 backdrop-blur-sm border border-white/20 text-sm hover:bg-white/18 transition-all duration-200"
            >
              <TrendingUp className="w-4 h-4" />
              Faça seu diagnóstico gratuito
            </a>
          </div>

          <div
            className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-white/60 text-sm animate-fade-in"
            style={{ animationDelay: "0.45s" }}
          >
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-white/50" />
              Resposta em minutos
            </span>
            <span className="text-white/30 hidden lg:inline">|</span>
            <span>100% online · WhatsApp</span>
            <span className="text-white/30 hidden lg:inline">|</span>
            <span>Sem compromisso inicial</span>
          </div>
        </div>

        {/* Lado Direito: Dashboard Visual Mockup */}
        <div 
          className="flex-1 w-full max-w-[500px] lg:max-w-none animate-fade-in"
          style={{ animationDelay: '0.4s' }}
        >
          <DashboardSVG />
        </div>
      </div>

      {/* Seta scroll down */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40 animate-bounce">
        <ChevronDown className="w-5 h-5" />
      </div>
    </section>
  );
};

export default HeroSection;
