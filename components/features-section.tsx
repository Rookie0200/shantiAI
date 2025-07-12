
import { Card, CardContent } from '@/components/ui/card';
import { 
  MessageCircle, 
  Activity, 
  TrendingUp, 
  Shield, 
  Zap, 
  Heart,
  Brain,
  Moon,
  BarChart3
} from 'lucide-react';

export function FeaturesSection() {
  const features = [
    {
      icon: MessageCircle,
      title: 'AI-Powered Therapy Chat',
      description: 'Connect with Luna, our empathetic AI therapist trained to provide compassionate, personalized mental health support 24/7.',
      gradient: 'from-blue-500 to-blue-600',
      bgColor: 'bg-calm-blue'
    },
    {
      icon: Activity,
      title: 'Real-time Stress Detection',
      description: 'Advanced AI monitors your emotional patterns and provides immediate support during moments of crisis or high stress.',
      gradient: 'from-red-500 to-pink-500',
      bgColor: 'bg-warm-peach'
    },
    {
      icon: Heart,
      title: 'Guided Therapeutic Activities',
      description: 'Access breathing exercises, meditation sessions, zen garden simulations, and peaceful forest walks to center yourself.',
      gradient: 'from-green-500 to-emerald-500',
      bgColor: 'bg-calm-green'
    },
    {
      icon: TrendingUp,
      title: 'Mood Tracking & Analytics',
      description: 'Visualize your emotional journey with intelligent mood tracking and receive AI-generated insights about your mental health patterns.',
      gradient: 'from-purple-500 to-indigo-500',
      bgColor: 'bg-soft-purple'
    },
    {
      icon: BarChart3,
      title: 'Progress Dashboard',
      description: 'Monitor your mental health journey with comprehensive analytics, goal tracking, and personalized progress reports.',
      gradient: 'from-orange-500 to-yellow-500',
      bgColor: 'bg-warm-peach'
    },
    {
      icon: Shield,
      title: 'Privacy & Security',
      description: 'Your conversations are encrypted end-to-end. We are HIPAA compliant and your mental health data stays completely private.',
      gradient: 'from-gray-600 to-gray-700',
      bgColor: 'bg-muted'
    }
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Brain className="h-4 w-4 mr-2" />
            Intelligent Features for Your Wellbeing
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins mb-6">
            Everything You Need for{' '}
            <span className="text-primary">Mental Wellness</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our AI-powered platform combines cutting-edge technology with evidence-based therapeutic approaches 
            to provide comprehensive mental health support tailored to your unique needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-xl transition-all duration-300 border-0 ${feature.bgColor} hover:scale-105`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold font-poppins group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Trust Section */}
        <div className="mt-16 text-center">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="space-y-2">
              <Moon className="h-8 w-8 text-primary mx-auto" />
              <h4 className="font-semibold">24/7 Availability</h4>
              <p className="text-sm text-muted-foreground">Always here when you need support, any time of day or night</p>
            </div>
            <div className="space-y-2">
              <Zap className="h-8 w-8 text-secondary mx-auto" />
              <h4 className="font-semibold">Instant Response</h4>
              <p className="text-sm text-muted-foreground">Get immediate support and coping strategies when you need them most</p>
            </div>
            <div className="space-y-2">
              <Brain className="h-8 w-8 text-accent mx-auto" />
              <h4 className="font-semibold">Personalized AI</h4>
              <p className="text-sm text-muted-foreground">AI that learns your patterns and adapts to your unique mental health needs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
