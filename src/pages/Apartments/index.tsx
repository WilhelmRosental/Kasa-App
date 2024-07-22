import './index.scss'
import { useNavigate, useParams } from 'react-router-dom'
import data from '../../data/apartments.json'
import { useEffect, useState } from 'react'
import Dropdown from '../../components/Dropdown'
import { ReactComponent as Star } from '../../assets/star-icon.svg'
import Carousel from '../../components/Carousel'

interface Apartment {
  id: string
  title: string
  location: string
  tags: string[]
  host: {
    name: string
    picture: string
  }
  rating: number
  pictures: string[]
  description: string
  equipments: string[]
}

export default function Apartments() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [apartment, setApartment] = useState<Apartment | null>(null)

  useEffect(() => {
    const checked = data.find((element) => element.id === id)
    if (checked === undefined) {
      navigate('/erreur-logement')
    } else {
      setApartment(checked)
    }
  }, [id, navigate])

  return (
    <>
      {apartment === null ? (
        <p>{'Chargement en cours'}</p>
      ) : (
        <main className="apartment-main">
          <article className="apartment">
            {apartment.pictures.length === 1 ? (
              <img
                className="apartment__img"
                src={apartment.pictures[0]}
                alt={`Photo du logement de ${apartment.host.name}`}
              />
            ) : (
              <Carousel images={apartment.pictures} classImg="apartment__img" />
            )}
            <header className="apartment__header">
              <section className="apartment__announce">
                <h2 className="apartment__title fontSize-title">
                  {apartment.title}
                </h2>
                <p className="apartment__city fontSize-paragraph">
                  {apartment.location}
                </p>
                <ul className="apartment__tags">
                  {apartment.tags.map((element, index) => (
                    <li key={index} className="apartment__tag">
                      {element}
                    </li>
                  ))}
                </ul>
              </section>
              <div className="apartment__profil">
                <div className="apartment__user">
                  <h3 className="apartment__name fontSize-paragraph2">
                    {apartment.host.name}
                  </h3>
                  <img
                    className="apartment__imgProfil"
                    src={apartment.host.picture}
                    alt={`Photo de ${apartment.host.name}`}
                  />
                </div>
                <ul className="apartment__rates">
                  {Array(5)
                    .fill(null)
                    .map((_, index) => (
                      <li
                        key={index}
                        className={` apartment__star ${
                          index < apartment.rating
                            ? 'apartment__star--active'
                            : 'apartment__star--disable'
                        } `}
                      >
                        <Star />
                      </li>
                    ))}
                </ul>
              </div>
            </header>
            <ul className="apartment__dropdowns">
              <Dropdown customKey={0} title="Description">
                {({ isOpen, customKey }) => (
                  <div
                    id={`dropdown__content${customKey}`}
                    className={`dropdown__content ${isOpen ? 'open' : ''}`}
                  >
                    <p>{apartment.description}</p>
                  </div>
                )}
              </Dropdown>
              <Dropdown customKey={1} title="Équipements">
                {({ isOpen, customKey }) => (
                  <ul
                    id={`dropdown__content${customKey}`}
                    className={`dropdown__content ${isOpen ? 'open' : ''}`}
                  >
                    {apartment.equipments.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}
              </Dropdown>
            </ul>
          </article>
        </main>
      )}
    </>
  )
}
