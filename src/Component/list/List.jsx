import { useState } from 'react';
import './list.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faList,
  faHome,
  faBook,
  faFileAudio,
  faDice,
  faBookOpen,
  faBookmark,
  faXmark
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function List() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Шилтемелерди иреттүү тизме кылып алдык
  const menuItems = [
    { to: '/', icon: faHome, label: 'Башкы барак' },
    { to: '/books', icon: faBook, label: 'Китептер' },
    { to: '/audio', icon: faFileAudio, label: 'Аудиолор' },
    { to: '/games', icon: faDice, label: 'Оюндар' },
    { to: '/library', icon: faBookOpen, label: 'Китепкана' },
    { to: '/history', icon: faBookmark, label: 'таарых' },
  ];

  return (
    <aside className="mobile-menu">
      {/* Менюну ачуучу иконка */}
      {!isOpen && (
        <button 
          className="mobile-menu__trigger" 
          onClick={toggleMenu} 
          aria-label="Менюну ачуу"
        >
          <FontAwesomeIcon icon={faList} />
        </button>
      )}

      {/* Толук экранды каптаган меню оверлейи */}
      <div className={`mobile-menu__overlay ${isOpen ? 'mobile-menu__overlay--open' : ''}`}>
        <div className="mobile-menu__header">
          <span className="mobile-menu__title">Мазмун</span>
          <button 
            className="mobile-menu__close" 
            onClick={toggleMenu} 
            aria-label="Жабуу"
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>

        <nav className="mobile-menu__nav">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              className="mobile-menu__link"
              onClick={toggleMenu}
            >
              <FontAwesomeIcon icon={item.icon} className="mobile-menu__icon" />
              <span className="mobile-menu__label">{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}

export default List;