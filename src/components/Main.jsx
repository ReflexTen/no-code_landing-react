import About from './sections/About'
import Contact from './sections/Contact'
import Expertise from './sections/Expertise'
import Home from './sections/Home'
import Portfolio from './sections/Portfolio'

const Main = () => {
  return (
    <main className="main">
      <Home />
      <Expertise />
      <Portfolio />
      <About />
      <Contact />
    </main>
  )
}

export default Main
