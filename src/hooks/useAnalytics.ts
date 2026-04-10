/**
 * useAnalytics — Hook para tracking de eventos de conversão
 *
 * Suporta: Google Analytics 4 (GA4), Meta Pixel, GTM DataLayer
 * Uso: const { track } = useAnalytics()
 *      track("cta_click", { section: "hero", label: "whatsapp" })
 */

type EventName =
  | "cta_click"
  | "whatsapp_open"
  | "form_start"
  | "form_step_complete"
  | "form_submit"
  | "calculator_interact"
  | "calculator_cta"
  | "section_view"
  | "faq_search"
  | "faq_open";

interface EventParams {
  section?: string;
  label?: string;
  step?: number;
  value?: number;
  query?: string;
  [key: string]: string | number | boolean | undefined;
}

// ── Declarações de tipos globals para window ──
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function useAnalytics() {
  const track = (event: EventName, params?: EventParams) => {
    const payload = {
      event_category: "engagement",
      ...params,
      timestamp: Date.now(),
    };

    // ── Google Analytics 4 ──
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", event, payload);
    }

    // ── GTM DataLayer (funciona com GA4 via GTM também) ──
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event,
        ...payload,
      });
    }

    // ── Meta Pixel ──
    if (typeof window !== "undefined" && window.fbq) {
      // Mapeia eventos customizados para padrões Meta
      const metaEventMap: Partial<Record<EventName, string>> = {
        whatsapp_open: "Contact",
        form_submit: "Lead",
        calculator_cta: "Lead",
        cta_click: "InitiateCheckout",
      };
      const metaEvent = metaEventMap[event];
      if (metaEvent) {
        window.fbq("track", metaEvent, params);
      } else {
        window.fbq("trackCustom", event, params);
      }
    }

    // ── Dev: log em desenvolvimento ──
    if (import.meta.env.DEV) {
      console.log(`[Analytics] ${event}`, payload);
    }
  };

  /**
   * Rastreia cliques em links de WhatsApp automaticamente.
   * Use: <a onClick={() => trackWhatsApp("hero")} ...>
   */
  const trackWhatsApp = (section: string, label?: string) => {
    track("whatsapp_open", { section, label: label ?? "whatsapp_button" });
    track("cta_click", { section, label: "whatsapp" });
  };

  /**
   * Rastreia visualização de seção via IntersectionObserver.
   * Use no componente: useEffect(() => { trackSection("hero") }, [inView])
   */
  const trackSection = (section: string) => {
    track("section_view", { section });
  };

  return { track, trackWhatsApp, trackSection };
}

export default useAnalytics;
