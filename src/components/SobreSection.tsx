import { Shield, BookOpen, Users } from "lucide-react";

const SobreSection = () => {
  return (
    <section id="sobre" className="py-20 md:py-28 px-4 bg-secondary/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="fade-up section-title text-center mb-4">Sobre mim</h2>
        <p className="fade-up section-subtitle text-center mb-12">Transparência e compromisso com o seu futuro financeiro</p>

        <div className="fade-up glass-card max-w-3xl mx-auto">
          <p className="text-foreground text-lg leading-relaxed mb-6">
            Meu nome é <strong>Eduardo Goulart</strong>, estudante no último semestre de <strong>Ciências Contábeis</strong>. Minha atuação é baseada no conhecimento técnico adquirido ao longo da formação acadêmica, com foco em apoio, organização e planejamento financeiro pessoal.
          </p>
          <div className="grid gap-4 md:grid-cols-3 mt-8">
            {[
              { icon: BookOpen, title: "Base técnica", desc: "Formação em Ciências Contábeis" },
              { icon: Shield, title: "Transparência", desc: "Não assina demonstrações contábeis" },
              { icon: Users, title: "Atendimento", desc: "100% online via WhatsApp" },
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
          <p className="text-muted-foreground text-sm mt-6 border-t border-border pt-4">
            Nota: Eduardo não está habilitado para assinar demonstrações contábeis e não assume responsabilidade técnica por declarações. O trabalho é focado em orientação, organização e planejamento financeiro pessoal.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SobreSection;
