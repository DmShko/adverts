import { NavLink } from 'react-router-dom';

import he from './Header.module.scss'

const Header = () => {
  return (
    
    <header className={he.header}>
        <div className={he.container}>
          <nav className={he.nav}>

            <NavLink className={he.link} to="/">
              <p>Home</p>
            </NavLink>

            <NavLink className={he.link} to="/catalog">
              <p>Catalog</p>
            </NavLink>

            <NavLink className={he.link} to="/favorites">
              <p>Favorites</p>
            </NavLink>
            
          </nav> 
        </div>   
    </header>
  )
}

export default Header