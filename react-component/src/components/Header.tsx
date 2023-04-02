import { Text } from '@chakra-ui/react';
import { Link, NavLink, useLocation } from 'react-router-dom';

function Header() {
  const title = useLocation().pathname.slice(1);

  return (
    <header className="header">
      <Link to="https://rs.school/react/">
        <img
          className="header__logo"
          src="https://react-component-alexkaroh.netlify.app/assets/rssLogo-7efcf651.svg"
          alt="RS-Shcoll"
        />
      </Link>

      <Text color="white">{title === '' ? 'Home page' : title}</Text>

      <nav>
        <ul className="items">
          <li className="item">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="item">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="item">
            <NavLink to="/form">Form</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
