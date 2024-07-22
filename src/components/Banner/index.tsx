import './index.scss'
import React from 'react'

interface BannerProps {
  typeImg: 'home' | 'aboutus' | string
  text?: string
}

const Banner: React.FC<BannerProps> = ({ typeImg, text }) => {
  let classImg = 'banner__bgDefault'
  switch (typeImg) {
    case 'home':
      classImg = 'banner__bg1'
      break
    case 'aboutus':
      classImg = 'banner__bg2'
      break
  }

  return (
    <header className={`banner ${classImg}`}>
      {text ? <p className="banner__text">{text}</p> : ''}
    </header>
  )
}

export default Banner
