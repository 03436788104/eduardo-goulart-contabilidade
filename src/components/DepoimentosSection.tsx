import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Mariana S.",
    result: "Quitou R$ 6.000 em dívidas",
    text: "Eu achava que nunca ia sair do vermelho. Em poucos meses com o plano do Eduardo, quitei R$ 6 mil em dívidas. Hoje consigo até guardar dinheiro.",
  },
  {
    name: "Carlos R.",
    result: "Controle total dos gastos",
    text: "Antes eu não sabia nem quanto ganhava direito. Hoje sei exatamente para onde vai cada centavo e consigo planejar o mês inteiro.",
  },
  {
    name: "Patrícia L.",
    result: "Reduziu 40% dos gastos",
    text: "O Eduardo me mostrou gastos invisíveis que eu nem percebia. Cortei o que não fazia sentido e sobraram quase R$ 800 por mês.",
  },
  {
    name: "Rafael M.",
    result: "Parou de viver no aperto",
    text: "Eu vivia contando moedas no fim do mês. Com a organização financeira, parei de viver no aperto e finalmente tenho tranquilidade.",
  },
  {
    name: "Juliana T.",
    result: "IR sem dor de cabeça",
    text: "Sempre tive pavor do Imposto de Renda. O Eduardo organizou tudo comigo e me explicou cada etapa. Nunca foi tão fácil.",
  },
];

const DepoimentosSection = () => {
  return (
    <section id="depoimentos" className="py-20 md:py-28 px-4 bg-secondary/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="fade-up section-title text-center mb-4">Resultados reais de quem já começou</h2>
        <p className="fade-up section-subtitle text-center mb-14">Veja o que pessoas como você conquistaram com organização financeira</p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="fade-up glass-card flex flex-col"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <Quote className="w-8 h-8 text-primary/20 mb-3" />
              <p className="text-foreground mb-4 leading-relaxed flex-1">"{t.text}"</p>
              <div className="border-t border-border pt-4 mt-auto">
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="font-bold text-foreground text-sm">{t.name}</p>
                <p className="text-primary text-xs font-semibold">{t.result}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DepoimentosSection;
