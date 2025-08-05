import * as React from 'react'
import Header from '../components/ui/header'
import Sidebar from '../components/ui/sidebar'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import Footer from '../components/ui/footer'
import { useScrollToTop } from '../hooks/use-scroll-to-top'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  const [isOpen, setIsOpen] = React.useState(false)

  useScrollToTop()

  return (
    <React.Fragment>
      <Header setIsOpen={setIsOpen}/>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}/>
      <div className='max-w-[1920px]'>
        <Outlet />
        <Footer />
      </div>
    </React.Fragment>
  )
}
