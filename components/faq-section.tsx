import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';

export function FAQSection() {
  const faqs = [
    {
      question: 'Is Luna AI a replacement for human therapy?',
      answer: 'Luna AI is designed to complement, not replace, traditional therapy. While Luna provides 24/7 support, evidence-based coping strategies, and personalized guidance, we always recommend consulting with licensed mental health professionals for comprehensive care, especially for severe mental health conditions.'
    },
    {
      question: 'How does Luna protect my privacy and data?',
      answer: 'Your privacy is our top priority. All conversations are encrypted end-to-end, we are HIPAA compliant, and your data is never shared with third parties. Luna AI processes your conversations locally when possible, and any data stored is anonymized and secured with industry-leading encryption standards.'
    },
    {
      question: 'What makes Luna different from other mental health apps?',
      answer: 'Luna combines advanced AI with emotional intelligence, providing truly personalized support that adapts to your unique needs. Features like real-time stress detection, crisis intervention, and comprehensive mood analytics set Luna apart. Plus, our AI is trained specifically on therapeutic techniques and mental health best practices.'
    },
    {
      question: 'Can Luna help during a mental health crisis?',
      answer: 'Luna includes crisis detection and immediate support features. However, for severe mental health emergencies, please contact emergency services (911) or a crisis helpline immediately. Luna can provide support and coping strategies, but human intervention may be necessary for serious situations.'
    },
    {
      question: 'How accurate is the mood tracking and analytics?',
      answer: 'Luna uses advanced AI algorithms to analyze patterns in your conversations, responses, and self-reported data to provide mood insights. While highly sophisticated, these analytics should be viewed as supportive tools rather than medical diagnoses. They help identify patterns and trends in your mental health journey.'
    },
    {
      question: 'Is Luna available 24/7?',
      answer: 'Yes! Luna is available whenever you need support - day or night, weekends, and holidays. Mental health challenges don\'t follow a schedule, so neither do we. You can access Luna anytime through our secure platform.'
    },
    {
      question: 'What therapeutic approaches does Luna use?',
      answer: 'Luna is trained in evidence-based therapeutic approaches including Cognitive Behavioral Therapy (CBT), Dialectical Behavior Therapy (DBT), mindfulness-based interventions, and stress reduction techniques. The AI adapts its approach based on your specific needs and preferences.'
    },
    {
      question: 'How much does Luna cost?',
      answer: 'We offer flexible pricing plans to make mental health support accessible. This includes a free tier with basic features, and premium subscriptions with advanced analytics, unlimited conversations, and additional therapeutic tools. We also offer student discounts and sliding scale options.'
    }
  ];

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="mx-auto px-8 2xl:max-w-[1400px] max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <HelpCircle className="h-4 w-4 mr-2" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins mb-6">
            Questions About{' '}
            <span className="text-primary">Luna</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            Find answers to common questions about Luna AI and how we can support your mental health journey.
          </p>
        </div>

        <div className="animate-slide-up">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-2xl px-6 border-0 shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold font-poppins hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Still have questions CTA */}
        <div className="text-center mt-12">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl">
            <div className="space-y-1">
              <h3 className="font-semibold font-poppins">Still have questions?</h3>
              <p className="text-sm text-muted-foreground">Our support team is here to help you get started.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
