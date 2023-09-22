import {React, lazy, Suspense} from 'react'
const Home = lazy(() => import('./Home'))
const Section = lazy(() => import('./Section'))
const Footer = lazy(() => import('./Footer'))
const Contact = lazy(() => import('./Contact'))


const Main = () => {
  return (
    <div>
      <Suspense>
        <Home />
        <Section />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  )
}

export default Main
