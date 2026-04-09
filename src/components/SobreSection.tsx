import { Shield, BookOpen, Users, CheckCircle, MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5565984464370";

const highlights = [
  "Último semestre de Ciências Contábeis",
  "Base técnica sólida com aplicação prática",
  "Foco em resultados reais, não só teoria",
  "Atendimento humanizado e 100% online",
];

const SobreSection = () => {
  return (
    <section id="sobre" className="py-20 md:py-28 px-4 bg-secondary/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="fade-up section-title text-center mb-4">Quem vai te ajudar</h2>
        <p className="fade-up section-subtitle text-center mb-12">Conheça o profissional por trás do seu planejamento financeiro</p>

        <div className="fade-up glass-card max-w-3xl mx-auto">
          <p className="text-foreground text-lg leading-relaxed mb-6">
            Meu nome é <strong>Eduardo Goulart</strong>. Estou no último semestre de <strong>Ciências Contábeis</strong> e já ajudei dezenas de pessoas a organizarem suas finanças, saírem de dívidas e terem mais segurança com seu dinheiro.
          </p>
          <p className="text-foreground text-lg leading-relaxed mb-8">
            Minha abordagem é prática e direta: analiso sua situação real, crio um plano de ação personalizado e te acompanho até você ter controle total das suas finanças.
          </p>

          <div className="grid gap-3 mb-8">
            {highlights.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                <p className="text-foreground font-medium">{item}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-4 md:grid-cols-3 mb-6">
            {[
              { icon: BookOpen, title: "Formação técnica", desc: "Ciências Contábeis — último semestre" },
              { icon: Shield, title: "Ética profissional", desc: "Transparência total sobre atuação" },
              { icon: Users, title: "100% online", desc: "Atendimento via WhatsApp" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-secondary/80">
                <item.icon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground text-sm">{item.title}</p>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-muted-foreground text-sm border-t border-border pt-4 mb-6">
            <strong>Transparência:</strong> Por questão de ética profissional, Eduardo não assina demonstrações contábeis e não assume responsabilidade técnica por declarações oficiais. O foco é orientação, organização e planejamento financeiro pessoal.
          </p>

          <div className="text-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp inline-flex"
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
