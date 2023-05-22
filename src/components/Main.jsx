import { useState } from 'react'

import About from './sections/About'
import Contact from './sections/Contact'
import Expertise from './sections/Expertise'
import Home from './sections/Home'
import Portfolio from './sections/Portfolio'
import Team from './sections/Team'
import Reviews from './sections/Reviews'
import Questions from './sections/Questions'

const Main = () => {
  const [statePortfolioList, setStatePortfolioList] = useState(false)
  const [heightPortfolioList, setHeightPortfolioList] = useState(0)

  function activePortfolioList(tag, heightList) {
    if (tag === true) {
      setStatePortfolioList(false)
      setHeightPortfolioList(400)
    } else {
      setStatePortfolioList(!statePortfolioList)
      setHeightPortfolioList(heightList)
    }
  }

  return (
    <main className="main">
      <Home />
      <Expertise />
      <Portfolio
        statePortfolioList={statePortfolioList}
        heightPortfolioList={heightPortfolioList}
        activePortfolioList={activePortfolioList}
      />
      <About />
      <Team />
      <Reviews />
      <Contact />
      <Questions />
    </main>
  )
}

export default Main
