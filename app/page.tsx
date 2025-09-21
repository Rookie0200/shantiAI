import { FAQSection } from "@/components/faq-section";
import { FeaturesSection } from "@/components/features-section";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { HowItWorksSection } from "@/components/howItWorks-section";
import { TestimonialsSection } from "@/components/testimonials";
import { Footer } from "@/components/footer";
export default function Home() {
  return (
    
    <div className="min-h-screen bg-background"> 
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  )
}
