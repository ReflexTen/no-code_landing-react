import { useRef } from 'react'

import About from './sections/About'
import Contact from './sections/Contact'
import Expertise from './sections/Expertise'
import Home from './sections/Home'
import Portfolio from './sections/Portfolio'
import Team from './sections/Team'

const Main = () => {
  const contentButtonText = useRef()
  setTimeout(() => {
    const contentButtonTextValue = contentButtonText.current
    contentButtonTextValue.innerHTML = contentButtonTextValue.innerText
      .split('')
      .map(
        (letter, i) =>
          `<span style="transform:rotate(${i * 10}deg")>${letter}</span>`
      )
      .join('')
  }, 1)

  return (
    <main className="main">
      <Home />
      <Expertise />
      <Portfolio contentButtonText={contentButtonText} />
      <About />
      <Team />
      <Contact />
    </main>
  )
}

export default Main
