import HeroSection from '@/components/hero-section'
import ServicesSection from '@/components/services-section'
import ProjectsSection from '@/components/projects-section'

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
    </div>
  )
}