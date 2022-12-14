import { useState } from 'react'
import {Link, NavLink } from 'react-router-dom'
import './navbar.css'
import Logo from '../Images/logo.png'
import {links} from '../data'
import {GoThreeBars} from 'react-icons/go'
import {MdOutlineClose} from 'react-icons/md'
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
    const [isNavShowing, setIsNavShowing] = useState(false);
    const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  
  
  return (
    <nav>
        <div className="container nav__container">
        <Link to="/" className= 'logo' onClick={() => setIsNavShowing(false)}>
            <img src={Logo} alt="Nav Logo" />
        </Link>
        <ul className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__nav'}`}>
          {
            links.map(({name, path}, index) => {
              return(
                <li key={index}>
                  <NavLink to={path} className={({isActive}) => isActive ? 'active-nav' : ''} onClick={() => setIsNavShowing(prev => !prev )} >{name} </NavLink>
                </li>
              ) 
            })
          }
        </ul>
        <li>{isAuthenticated && <p>{user.name}</p>}
        </li>
        {
          isAuthenticated ? (
          <li>
            <button onClick={() => logout({ returnTo: window.location.origin })}>
              Log Out
            </button>
          </li>
          ) : (
            <li>
              <button onClick={() => loginWithRedirect()}>Log In</button>;
            </li>
          )}
        

        <button className="nav__toggle-btn" onClick={() => setIsNavShowing(prev => !prev )}>
          {
            isNavShowing ? <MdOutlineClose/> : <GoThreeBars/>
          }
        </button>
      </div>
    </nav>
  )
}

export default Navbar