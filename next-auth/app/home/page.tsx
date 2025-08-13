'use client';

import { Navigation } from '@/components/layout/Navigation';
import { HeroSection } from '@/components/sections/HeroSection';
import { useAuth } from '@/lib/auth-context';
import { ProtectedRoute } from '@/components/layout/ProtectedRoute';

export default function HomePage() {
  const { user } = useAuth();

  return (
    <ProtectedRoute>
      <div className="min-h-screen">
        <Navigation />
        <main>
          <HeroSection />
          
          {/* Additional authenticated content */}
          <section className="py-16 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-2xl font-semibold mb-4">Welcome back, {user?.name}!</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                You're now logged in and can access all the features of our application. 
                This is a protected area that only authenticated users can see.
              </p>
            </div>
          </section>
        </main>
      </div>
    </ProtectedRoute>
  );
}