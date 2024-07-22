import './index.scss'
import React from 'react'
import data from '../../data/apartments.json'
import Card from '../Card'
import { Link } from 'react-router-dom'

interface Apartment {
  id: string
  title: string
  cover: string
}

const Cards: React.FC = () => {
  return (
    <ul className="cards-section">
      {data.map((element: Apartment, index: number) => (
        <Card
          key={index}
          id={element.id}
          title={element.title}
          img={element.cover}
        />
      ))}
      <li className="card">
        <Link to={`/logement/falseId`} className="card__link">
          <h2 className="card__title">Exemple génère erreur</h2>
        </Link>
      </li>
    </ul>
  )
}

export default Cards
