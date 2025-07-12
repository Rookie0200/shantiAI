
import { Brain, Heart, Shield, Mail, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-lg">
                <Brain className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold font-poppins">Luna Calm</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              AI-powered mental health support thats compassionate, secure, and available whenever you need it.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Shield className="h-4 w-4 text-secondary" />
                <span>HIPAA Compliant</span>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-4">
            <h3 className="font-semibold font-poppins">Product</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#features" className="hover:text-foreground transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-foreground transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">API</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Mobile App</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="space-y-4">
            <h3 className="font-semibold font-poppins">Support</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#faq" className="hover:text-foreground transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Crisis Resources</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Community</a></li>
            </ul>
          </div>

          {/* Legal & Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold font-poppins">Legal</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Accessibility</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="border-t border-border bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold font-poppins">
                Ready to Start Your Mental Health Journey?
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Join thousands who have found peace, support, and growth with Luna AI. 
                Your path to better mental health starts with a single conversation.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 font-medium group">
                <MessageCircle className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Talk to Luna Now
              </Button>
              <Button variant="outline" size="lg" className="font-medium group">
                <Heart className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Learn More
              </Button>
            </div>
            <div className="text-sm text-muted-foreground">
              Free to start • No credit card required • Complete privacy
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {currentYear} Luna Calm. All rights reserved. Made with ❤️ for mental wellness.
            </div>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <span>Emergency: 988 (Suicide & Crisis Lifeline)</span>
              <a href="mailto:support@lunacalm.ai" className="hover:text-foreground transition-colors flex items-center space-x-1">
                <Mail className="h-3 w-3" />
                <span>support@lunacalm.ai</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
