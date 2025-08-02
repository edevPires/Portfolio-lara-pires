import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/merdatomica')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='pt-24'>Hello "/merdatomica"!</div>
}
