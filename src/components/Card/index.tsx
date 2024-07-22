import './index.scss'
import React from 'react'
import { Link } from 'react-router-dom'

interface CardProps {
  id: string
  title: string
  img: string
}

const Card: React.FC<CardProps> = ({ id, title, img }) => {
  return (
    <li className="card">
      <Link to={`/logement/${id}`} className="card__link">
        <img className="card__img" src={img} alt={title} />
        <h2 className="card__title">{title}</h2>
      </Link>
    </li>
  )
}

export default Card
