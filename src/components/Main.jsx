import { useRef } from 'react'

import About from './sections/About'
import Contact from './sections/Contact'
import Expertise from './sections/Expertise'
import Home from './sections/Home'
import Portfolio from './sections/Portfolio'
import Team from './sections/Team'
import Reviews from './sections/Reviews'
import Questions from './sections/Questions'

const Main = () => {
  return (
    <main className="main">
      <Home />
      <Expertise />
      <Portfolio />
      <About />
      <Team />
      <Reviews />
      {/* <Contact /> */}
      {/* <Questions /> */}
    </main>
  )
}

export default Main
