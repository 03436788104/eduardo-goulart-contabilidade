import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Mariana S.",
    text: "Consegui quitar R$ 12 mil em dívidas em 8 meses seguindo o planejamento que o Eduardo me ajudou a montar. Hoje durmo tranquila.",
  },
  {
    name: "Carlos R.",
    text: "Antes eu não sabia nem quanto ganhava direito. Agora tenho uma planilha organizada e consigo guardar dinheiro todo mês.",
  },
  {
    name: "Patrícia L.",
    text: "Reduzi meus gastos desnecessários em quase 40%. O Eduardo me mostrou onde eu estava perdendo dinheiro sem perceber.",
  },
  {
    name: "Rafael M.",
    text: "Tinha medo de fazer minha declaração do IR. Com o apoio do Eduardo, entendi o processo e me senti muito mais seguro.",
  },
];

const DepoimentosSection = () => {
  return (
    <section className="py-20 md:py-28 px-4 bg-secondary/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="fade-up section-title text-center mb-4">O que dizem os clientes</h2>
        <p className="fade-up section-subtitle text-center mb-14">Resultados reais de pessoas que transformaram sua vida financeira</p>

        <div className="grid gap-6 sm:grid-cols-2">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="fade-up glass-card"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground mb-4 leading-relaxed italic">"{t.text}"</p>
              <p className="font-semibold text-primary text-sm">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DepoimentosSection;
