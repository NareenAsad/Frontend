import { Button } from '@/components/ui/button';
import { Heading } from '@/components/typography/Heading';
import { Text } from '@/components/typography/Text';
import { ArrowRight, Shield, Zap, Users } from 'lucide-react';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          {/* Main heading */}
          <div className="space-y-4">
            <Heading level={1} className="max-w-4xl mx-auto leading-tight">
              Build Amazing Apps with{' '}
              <span className="text-primary">Modern Architecture</span>
            </Heading>
            <Text 
              size="xl" 
              variant="secondary" 
              className="max-w-2xl mx-auto leading-relaxed"
            >
              Experience the power of component-driven development with our 
              beautifully crafted authentication system and scalable architecture.
            </Text>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/auth">
              <Button size="lg" className="group transition-all duration-200 hover:scale-105">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="transition-all duration-200 hover:scale-105">
              Learn More
            </Button>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
            <div className="group p-6 rounded-lg border bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-200 hover:scale-105">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-primary/20 transition-colors">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <Heading level={4} className="mb-2">Secure Authentication</Heading>
              <Text variant="secondary" size="sm">
                Built-in security features with modern authentication patterns and best practices.
              </Text>
            </div>

            <div className="group p-6 rounded-lg border bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-200 hover:scale-105">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-primary/20 transition-colors">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <Heading level={4} className="mb-2">Lightning Fast</Heading>
              <Text variant="secondary" size="sm">
                Optimized performance with modern React patterns and Next.js architecture.
              </Text>
            </div>

            <div className="group p-6 rounded-lg border bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-200 hover:scale-105">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-primary/20 transition-colors">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <Heading level={4} className="mb-2">User Friendly</Heading>
              <Text variant="secondary" size="sm">
                Intuitive design with seamless user experience and responsive layouts.
              </Text>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}