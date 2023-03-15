import { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <Link to="https://rs.school/react/">
          <img
            className="header__logo"
            src="https://react-component-alexkaroh.netlify.app/assets/rssLogo-7efcf651.svg"
            alt="RS-Shcoll"
          />
        </Link>

        <nav>
          <ul className="items">
            <li className="item">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="item">
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
