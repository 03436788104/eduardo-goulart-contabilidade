import HeroSection from "@/components/HeroSection";
import DoresSection from "@/components/DoresSection";
import SobreSection from "@/components/SobreSection";
import ServicosSection from "@/components/ServicosSection";
import DepoimentosSection from "@/components/DepoimentosSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ScrollAnimator from "@/components/ScrollAnimator";

const Index = () => {
  return (
    <>
      <ScrollAnimator />
      <HeroSection />
      <DoresSection />
      <SobreSection />
      <ServicosSection />
      <DepoimentosSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </>
  );
};

export default Index;
