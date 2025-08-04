import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/trabalhos/instituto-deller')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/trabalhos/instituto-deller"!</div>
}
