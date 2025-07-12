import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Marketing Manager',
      content: 'Luna has been a game-changer for my anxiety. Having 24/7 access to compassionate AI support means I never feel alone during panic attacks. The breathing exercises and mood tracking have become essential parts of my daily routine.',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Software Developer',
      content: 'As someone who struggles with depression, Luna provides the consistent support I need. The AI is surprisingly empathetic and the progress tracking helps me see how far I\'ve come. It\'s like having a therapist in my pocket.',
      rating: 5,
      avatar: '👨‍💻'
    },
    {
      name: 'Emily Watson',
      role: 'Graduate Student',
      content: 'The stress detection feature has been incredible during my thesis writing. Luna immediately provides calming techniques when my stress levels spike. The privacy and security give me complete confidence to share openly.',
      rating: 5,
      avatar: '👩‍🎓'
    },
    {
      name: 'David Kim',
      role: 'Healthcare Worker',
      content: 'Working in healthcare during challenging times, Luna has been my emotional anchor. The AI understands the unique stresses of my job and provides targeted coping strategies. I recommend it to all my colleagues.',
      rating: 5,
      avatar: '👨‍⚕️'
    },
    {
      name: 'Amanda Foster',
      role: 'Teacher',
      content: 'Luna helped me through my burnout recovery. The mood analytics showed patterns I hadn\'t noticed, and the personalized therapeutic activities fit perfectly into my busy schedule. It\'s been transformative.',
      rating: 5,
      avatar: '👩‍🏫'
    },
    {
      name: 'James Park',
      role: 'Entrepreneur',
      content: 'Managing startup stress became much easier with Luna. The AI provides practical strategies for handling pressure and the crisis support feature has been a lifesaver during particularly tough periods.',
      rating: 5,
      avatar: '👨‍💼'
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins mb-6">
            What Our Users Say About{' '}
            <span className="text-primary">Luna</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real stories from people who have found support, healing, and growth through their journey with Luna AI.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="space-y-6">
                  {/* Quote Icon */}
                  <Quote className="h-8 w-8 text-primary/30 group-hover:text-primary/50 transition-colors" />

                  {/* Rating */}
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Content */}
                  <blockquote className="text-muted-foreground leading-relaxed italic">
                    {testimonial.content}
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center space-x-3 pt-4 border-t border-border">
                    <div className="text-2xl">{testimonial.avatar}</div>
                    <div>
                      <div className="font-semibold font-poppins group-hover:text-primary transition-colors">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Stats */}
        <div className="mt-16 text-center">
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">4.9/5</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-secondary">100K+</div>
              <div className="text-sm text-muted-foreground">Happy Users</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent">50M+</div>
              <div className="text-sm text-muted-foreground">Messages Exchanged</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
