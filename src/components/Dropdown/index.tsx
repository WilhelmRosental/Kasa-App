import './index.scss'
import React, { useState } from 'react'

interface DropdownProps {
  customKey: number;
  title: string;
  children: (props: { isOpen: boolean, customKey: number }) => React.ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({ customKey, title, children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <li className="dropdown">
      <button
        className="dropdown__title"
        role="combobox"
        onClick={toggleDropdown}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-controls={`dropdown__content${customKey}`}
      >
        {title}
        <span
          className={`dropdown__title--arrow ${isOpen ? 'open' : ''}`}
        ></span>
      </button>

      {children({ isOpen, customKey })}
    </li>
  )
}

export default Dropdown
