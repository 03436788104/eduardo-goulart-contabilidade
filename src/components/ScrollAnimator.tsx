import { useEffect } from "react";

const ScrollAnimator = () => {
  useEffect(() => {
    // Cria o observer com configurações otimizadas
    const createObserver = () => {
      return new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              // Não faz unobserve para permitir re-entrada se necessário
            }
          });
        },
        {
          threshold: 0.08,
          rootMargin: "0px 0px -40px 0px",
        }
      );
    };

    const observer = createObserver();

    // Observa todos os elementos .fade-up existentes
    const observe = () => {
      document.querySelectorAll(".fade-up").forEach((el) => {
        observer.observe(el);
      });
    };

    observe();

    // MutationObserver para elementos adicionados dinamicamente (ex: formulário multi-step)
    const mutationObserver = new MutationObserver(() => {
      document.querySelectorAll(".fade-up:not(.visible)").forEach((el) => {
        observer.observe(el);
      });
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null;
};

export default ScrollAnimator;
