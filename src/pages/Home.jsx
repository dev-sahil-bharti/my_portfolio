import { HeroSection } from '../components/sections/HeroSection'
import { AboutSection } from '../components/sections/AboutSection'
import WorkSection from '../components/sections/WorkSection'
import { ProjectsSection } from '../components/sections/ProjectsSection'
import { BlogsSection } from '../components/sections/BlogsSection'
import ContactSection from '../components/sections/ContactSection'
import { SkillsSection } from '../components/sections/SkillsSection'

export function Home() {
  return (
    <div className="">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <WorkSection />
      <SkillsSection />
      <BlogsSection />
      <ContactSection />
    </div>
  )
}