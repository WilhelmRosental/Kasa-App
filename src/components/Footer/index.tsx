import './index.scss'
import React from 'react'
import { ReactComponent as Logo } from '../../assets/logo-secondary.svg'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <Logo />
      <p className="fontSize-subtitle">
        &#169; {currentYear} Kasa. All rights Reserved
      </p>
    </footer>
  )
}

export default Footer
