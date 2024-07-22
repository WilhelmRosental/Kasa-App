import './index.scss'
import Banner from '../../components/Banner'
import Dropdown from '../../components/Dropdown'

interface DropdownData {
  title: string
  content: string
}

const dropdownsData: DropdownData[] = [
  {
    title: 'Fiabilité',
    content:
      'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.',
  },
  {
    title: 'Respect',
    content:
      'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
  },
  {
    title: 'Service',
    content:
      'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
  },
  {
    title: 'Sécurité',
    content:
      "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  },
]

const AboutUs: React.FC = () => {
  return (
    <main className="main-aboutus">
      <Banner typeImg="aboutus" />
      <ul className="dropdown-container">
        {dropdownsData.map((data, index) => (
          <Dropdown key={index} title={data.title} customKey={index}>
            {({ isOpen, customKey }) => (
              <div
                id={`dropdown__content${customKey}`}
                className={`dropdown__content ${isOpen ? 'open' : ''}`}
              >
                <p>{data.content}</p>
              </div>
            )}
          </Dropdown>
        ))}
      </ul>
    </main>
  )
}

export default AboutUs
