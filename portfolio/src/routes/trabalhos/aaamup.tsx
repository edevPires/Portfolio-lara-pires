import { createFileRoute } from '@tanstack/react-router'
import ResponsiveSection from '../../components/layout/responsive-section'
import ProjectLayout from '../../components/layout/project-layout'
import projects from '../../data/projects.json'

export const Route = createFileRoute('/trabalhos/aaamup')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <ResponsiveSection className='pt-32'>
      <ProjectLayout project={projects["project-3"]}/> 
    </ResponsiveSection>
  )
}
