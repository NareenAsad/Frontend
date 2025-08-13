'use client';

import { Navigation } from '@/components/layout/Navigation';
import { HeroSection } from '@/components/sections/HeroSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
    </div>
  );
}