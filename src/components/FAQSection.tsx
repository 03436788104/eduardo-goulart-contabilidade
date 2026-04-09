import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Os serviços são para empresas?",
    a: "Não. O atendimento é exclusivo para pessoas físicas que desejam organizar sua vida financeira pessoal.",
  },
  {
    q: "Quais as formas de pagamento?",
    a: "Pix, transferência bancária ou a combinar, de acordo com a necessidade do cliente.",
  },
  {
    q: "Você é contador formado?",
    a: "Ainda não. Estou no último semestre de Ciências Contábeis, atuando com suporte e orientação financeira pessoal.",
  },
  {
    q: "O atendimento é online?",
    a: "Sim, o atendimento é 100% online, realizado via WhatsApp para sua comodidade.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 md:py-28 px-4 bg-background">
      <div className="max-w-3xl mx-auto">
        <h2 className="fade-up section-title text-center mb-4">Perguntas frequentes</h2>
        <p className="fade-up section-subtitle text-center mb-12">Tire suas dúvidas antes de entrar em contato</p>

        <div className="fade-up">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="glass-card !p-0 overflow-hidden border-border/50"
              >
                <AccordionTrigger className="px-6 py-5 text-left text-foreground font-semibold hover:no-underline text-base">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
