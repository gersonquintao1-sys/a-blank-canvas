import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import FalseSolutionsSection from "@/components/FalseSolutionsSection";
import ObjectionsSection from "@/components/ObjectionsSection";
import OfferSection from "@/components/OfferSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BenefitsSection from "@/components/BenefitsSection";
import PricingSection from "@/components/PricingSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import FAQSection from "@/components/FAQSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative grain-overlay">
      <Header />
      <main>
        <HeroSection />
        <div className="section-divider" />
        <StorySection />
        <div className="section-divider" />
        <FalseSolutionsSection />
        <div className="section-divider" />
        <ObjectionsSection />
        <div className="section-divider" />
        <OfferSection />
        <div className="section-divider" />
        <TestimonialsSection />
        <div className="section-divider" />
        <BenefitsSection />
        <div className="section-divider" />
        <PricingSection />
        <div className="section-divider" />
        <GuaranteeSection />
        <div className="section-divider" />
        <FAQSection />
      </main>
      <footer className="py-10 text-center text-sm text-muted-foreground/70 border-t border-border/30">
        <p className="font-medium">© 2025 Cetoleve™ — Todos os direitos reservados.</p>
        <p className="mt-1.5 text-xs">Este produto não substitui acompanhamento médico.</p>
      </footer>
    </div>
  );
};

export default Index;
