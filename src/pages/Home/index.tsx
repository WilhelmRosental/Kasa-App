import React from 'react'
import Banner from '../../components/Banner'
import Cards from '../../components/Cards'
import './index.scss'

const textBanner = 'Chez vous, partout et ailleurs'

const Home: React.FC = () => {
  return (
    <main className="main-home">
      <Banner typeImg="home" text={textBanner} />
      <Cards />
    </main>
  )
}

export default Home
