import { Card, CardContent } from '@/components/ui/card';
import { UserPlus, MessageSquare, TrendingUp, Target } from 'lucide-react';

export function HowItWorksSection() {
  const steps = [
    {
      step: '01',
      icon: UserPlus,
      title: 'Create Your Safe Space',
      description: 'Sign up securely and complete a brief assessment to help Luna understand your mental health needs and preferences.',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50 dark:bg-blue-950/30'
    },
    {
      step: '02',
      icon: MessageSquare,
      title: 'Connect with Luna AI',
      description: 'Start chatting with your compassionate AI therapist who provides personalized support and evidence-based therapeutic techniques.',
      color: 'text-green-500',
      bgColor: 'bg-green-50 dark:bg-green-950/30'
    },
    {
      step: '03',
      icon: TrendingUp,
      title: 'Track Your Progress',
      description: 'Monitor your mood patterns, complete therapeutic activities, and receive AI-generated insights about your mental health journey.',
      color: 'text-purple-500',
      bgColor: 'bg-purple-50 dark:bg-purple-950/30'
    },
    {
      step: '04',
      icon: Target,
      title: 'Build Lasting Wellness',
      description: 'Develop healthy coping strategies, achieve your mental health goals, and maintain long-term emotional wellbeing with ongoing support.',
      color: 'text-orange-500',
      bgColor: 'bg-orange-50 dark:bg-orange-950/30'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins mb-6">
            How <span className="text-primary">Luna Calm</span> Works
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Getting started with your mental health journey is simple. Follow these four steps to begin 
            your path toward better emotional wellbeing with AI-powered support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection Line (Desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-border to-transparent z-0"></div>
              )}
              
              <Card className={`relative z-10 group hover:shadow-xl transition-all duration-300 border-0 ${step.bgColor} hover:scale-105`}>
                <CardContent className="p-8 text-center">
                  <div className="space-y-6">
                    {/* Step Number */}
                    <div className="relative">
                      <div className={`w-16 h-16 rounded-2xl ${step.bgColor} border-2 border-white dark:border-gray-800 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
                        <step.icon className={`h-8 w-8 ${step.color}`} />
                      </div>
                      <div className={`absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary text-white text-sm font-bold flex items-center justify-center`}>
                        {step.step}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold font-poppins group-hover:text-primary transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row gap-4 p-8 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-3xl">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold font-poppins">Ready to start your journey?</h3>
              <p className="text-muted-foreground">Join thousands who have found peace and support with Luna.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
