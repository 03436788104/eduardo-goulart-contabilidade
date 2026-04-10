/**
 * useInView — Hook reutilizável de IntersectionObserver
 *
 * Dispara apenas uma vez (ou toda vez que entra no viewport).
 * Elimina a necessidade de criar observers avulsos em cada componente.
 *
 * Uso:
 *   const [ref, inView] = useInView({ threshold: 0.2 })
 *   return <div ref={ref} className={inView ? "visible" : "hidden"}>...</div>
 */

import { useEffect, useRef, useState } from "react";

interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
  /** Se true, volta a false quando sai do viewport (padrão: false = dispara uma vez) */
  triggerOnce?: boolean;
}

export function useInView(options: UseInViewOptions = {}) {
  const {
    threshold = 0.1,
    rootMargin = "0px 0px -40px 0px",
    triggerOnce = true,
  } = options;

  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (triggerOnce) observer.unobserve(el);
        } else if (!triggerOnce) {
          setInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return [ref, inView] as const;
}

/**
 * useCountUp — Contador animado com easing cúbico e IntersectionObserver
 *
 * Uso:
 *   const [ref, count] = useCountUp(1500, { duration: 2000 })
 *   return <span ref={ref}>{count}</span>
 */
interface UseCountUpOptions {
  duration?: number;
  decimals?: number;
}

export function useCountUp(target: number, options: UseCountUpOptions = {}) {
  const { duration = 2000, decimals = 0 } = options;
  const ref = useRef<HTMLElement | null>(null);
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const step = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out quint
            const eased = 1 - Math.pow(1 - progress, 5);
            const value = eased * target;
            setCount(decimals ? parseFloat(value.toFixed(decimals)) : Math.round(value));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration, decimals]);

  return [ref, count] as const;
}

/**
 * useScrollProgress — Porcentagem do scroll da página (0–100)
 *
 * Uso:
 *   const progress = useScrollProgress()
 */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? Math.min((window.scrollY / docHeight) * 100, 100) : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return progress;
}
