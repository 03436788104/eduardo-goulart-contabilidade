import { Wallet, FileText, Target, Lightbulb } from "lucide-react";

const services = [
  {
    icon: Wallet,
    title: "Organização Financeira Pessoal",
    desc: "Estruturação de receitas, despesas e controle mensal para você saber exatamente para onde vai cada centavo.",
  },
  {
    icon: FileText,
    title: "Apoio na Declaração do IRPF",
    desc: "Orientação e organização de documentos para que sua declaração do Imposto de Renda seja feita com tranquilidade.",
  },
  {
    icon: Target,
    title: "Planejamento para Quitar Dívidas",
    desc: "Estratégias personalizadas para redução e eliminação de dívidas de forma estruturada.",
  },
  {
    icon: Lightbulb,
    title: "Consultoria em Educação Financeira",
    desc: "Conceitos práticos e acessíveis para uma melhor gestão do seu dinheiro no dia a dia.",
  },
];

const ServicosSection = () => {
  return (
    <section className="py-20 md:py-28 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        <h2 className="fade-up section-title text-center mb-4">Serviços</h2>
        <p className="fade-up section-subtitle text-center mb-14">Soluções financeiras pensadas para pessoas físicas</p>

        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((s, i) => (
            <div
              key={i}
              className="fade-up glass-card group cursor-default"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110" style={{ background: "var(--hero-gradient)" }}>
                <s.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicosSection;
