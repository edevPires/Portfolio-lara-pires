import { createFileRoute } from '@tanstack/react-router'
import ResponsiveSection from '../../components/layout/responsive-section'
import ProjectLayout from '../../components/layout/project-layout'
import projects from '../../data/projects.json'
import { useScrollToTop } from '../../hooks/use-scroll-to-top'

export const Route = createFileRoute('/trabalhos/mestre-cilso')({
  component: RouteComponent,
})

function RouteComponent() {
  useScrollToTop();

  return (
    <ResponsiveSection className='pt-32'>
      <ProjectLayout project={projects["project-2"]}/> 
    </ResponsiveSection>
  )
}
