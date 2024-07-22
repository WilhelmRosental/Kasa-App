import './index.scss'
import React, { useState, KeyboardEvent } from 'react'

interface CarouselProps {
  images: string[]
  classImg: string
}

const Carousel: React.FC<CarouselProps> = ({ images, classImg }) => {
  const [numeroImg, setNumeroImg] = useState(0)
  const totalImg = images.length - 1

  function nextImg() {
    const newNumeroImg = numeroImg + 1
    if (newNumeroImg > totalImg) {
      setNumeroImg(0)
    } else {
      setNumeroImg(newNumeroImg)
    }
  }

  function prevImg() {
    const newNumeroImg = numeroImg - 1
    if (newNumeroImg < 0) {
      setNumeroImg(totalImg)
    } else {
      setNumeroImg(newNumeroImg)
    }
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    ;(document.querySelector('.carousel') as HTMLElement).focus()

    setTimeout(() => {
      if (event.key === 'ArrowLeft' || event.keyCode === 37) {
        prevImg()
      } else if (event.key === 'ArrowRight' || event.keyCode === 39) {
        nextImg()
      }
    }, 300)
  }

  return (
    <figure className="carousel" onKeyDown={handleKeyDown} tabIndex={0}>
      <figcaption className="sr-only">Galerie image du logement</figcaption>
      <button
        className="carousel__btn carousel__btn--prev"
        onClick={() => prevImg()}
      >
        <span className="sr-only">Image précédente</span>
      </button>
      <button
        className="carousel__btn carousel__btn--next"
        onClick={() => nextImg()}
      >
        <span className="sr-only">Image suivante</span>
      </button>
      <img
        className={classImg}
        src={images[numeroImg]}
        alt={`Image ${numeroImg} du caroussel`}
      />
      <span className="carousel__index">{`${numeroImg + 1}/${
        totalImg + 1
      }`}</span>
    </figure>
  )
}

export default Carousel
