import * as React from 'react'
import Header from '../components/ui/header'
import Sidebar from '../components/ui/sidebar'
import { Outlet, createRootRoute } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <React.Fragment>
      <Header setIsOpen={setIsOpen}/>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}/>
      <div className='max-w-[1920px]'>
        <Outlet />
      </div>
    </React.Fragment>
  )
}
