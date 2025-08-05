import { createFileRoute } from '@tanstack/react-router'
import { useScrollToTop } from '../../hooks/use-scroll-to-top'

export const Route = createFileRoute('/trabalhos/instituto-deller')({
  component: RouteComponent,
})

function RouteComponent() {
  useScrollToTop()

  return <div>Hello "/trabalhos/instituto-deller"!</div>
}
