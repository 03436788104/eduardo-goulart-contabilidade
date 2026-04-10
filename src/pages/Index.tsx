import { lazy, Suspense, type ComponentType } from "react";

// ── Skeleton de loading para seções ──
const SectionSkeleton = () => (
  <div className="py-20 px-4 flex items-center justify-center">
    <div className="flex flex-col items-center gap-3 text-muted-foreground">
      <div className="w-10 h-10 rounded-full border-2 border-border border-t-primary animate-spin" />
      <span className="text-sm font-medium">Carregando...</span>
    </div>
  </div>
);

// ── Wrapper genérico com fallback ──
function withSuspense<T extends object>(Component: ComponentType<T>) {
  return function SuspenseWrapped(props: T) {
    return (
      <Suspense fallback={<SectionSkeleton />}>
        <Component {...props} />
      </Suspense>
    );
  };
}

// ─────────────────────────────────────────────────────────────
// IMPORTS LAZY — cada seção vira um chunk separado no build
// Carregam apenas quando o navegador os requisita
// ─────────────────────────────────────────────────────────────

// Hero carrega imediatamente (está acima da dobra)
import HeroSection from "@/components/HeroSection";

// Seções críticas mas logo abaixo do hero — lazy com preload
const DoresSection = lazy(() => import("@/components/DoresSection"));
const ComoFuncionaSection = lazy(() => import("@/components/ComoFuncionaSection"));

// Seções de médio impacto — lazy
const DiagnosticoSection = lazy(() => import("@/components/DiagnosticoSection"));
const SobreSection = lazy(() => import("@/components/SobreSection"));
const ServicosSection = lazy(() => import("@/components/ServicosSection"));

// Seções pesadas (interativas) — lazy agressivo
const CalculadoraSection = lazy(() => import("@/components/CalculadoraSection"));
const MetricasSection = lazy(() => import("@/components/MetricasSection"));
const DepoimentosSection = lazy(() => import("@/components/DepoimentosSection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const CTASection = lazy(() => import("@/components/CTASection"));

// Estáticos leves
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollAnimator from "@/components/ScrollAnimator";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import TickerSection from "@/components/TickerSection";

// Wrappers com Suspense
const LazyDores = withSuspense(DoresSection as ComponentType<object>);
const LazyComoFunciona = withSuspense(ComoFuncionaSection as ComponentType<object>);
const LazyDiagnostico = withSuspense(DiagnosticoSection as ComponentType<object>);
const LazySobre = withSuspense(SobreSection as ComponentType<object>);
const LazyServicos = withSuspense(ServicosSection as ComponentType<object>);
const LazyCalculadora = withSuspense(CalculadoraSection as ComponentType<object>);
const LazyMetricas = withSuspense(MetricasSection as ComponentType<object>);
const LazyDepoimentos = withSuspense(DepoimentosSection as ComponentType<object>);
const LazyFAQ = withSuspense(FAQSection as ComponentType<object>);
const LazyCTA = withSuspense(CTASection as ComponentType<object>);

const Index = () => {
  return (
    <>
      {/* ── Utilitários globais (não lazy — críticos) ── */}
      <ScrollAnimator />
      <Navbar />
      <FloatingWhatsApp />

      {/*
        ── TRUST FLOW v2 (Sprint 3) ──

        Hero        → Síntese visual premium + dashboardSVG
        Ticker      → Prova social em tempo real (urgência passiva)
        Dores       → Validação emocional
        Como func.  → Elimina incerteza do processo
        Diagnóstico → Captura lead qualificado (lazy)
        Sobre       → Autoridade (lazy)
        Serviços    → Entregáveis concretos (lazy)
        Calculadora → Engajamento máximo (lazy, chunk pesado)
        Métricas    → Prova social quantitativa (lazy)
        Depoimentos → Prova social qualitativa (lazy)
        FAQ         → Quebra objeções (lazy)
        CTA Final   → Conversão (lazy)
        Footer      → Credibilidade
      */}

      <HeroSection />
      <TickerSection />
      <LazyDores />
      <LazyComoFunciona />
      <LazyDiagnostico />
      <LazySobre />
      <LazyServicos />
      <LazyCalculadora />
      <LazyMetricas />
      <LazyDepoimentos />
      <LazyFAQ />
      <LazyCTA />
      <Footer />
    </>
  );
};

export default Index;
