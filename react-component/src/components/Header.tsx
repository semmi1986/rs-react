import { Text } from '@chakra-ui/react';
import { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { withRouter, WithRouterProps } from '../HOC/WithRouteHOC';

class Header extends Component<WithRouterProps> {
  render() {
    const titleLink = this.props.location.pathname.slice(1);

    return (
      <header className="header">
        <Link to="https://rs.school/react/">
          <img
            className="header__logo"
            src="https://react-component-alexkaroh.netlify.app/assets/rssLogo-7efcf651.svg"
            alt="RS-Shcoll"
          />
        </Link>

        <Text color="white">{titleLink === '' ? 'Home page' : titleLink}</Text>

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
}

export default withRouter(Header);
