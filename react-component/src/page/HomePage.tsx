import { Component } from 'react';
import Search from '../components/Search';
import Title from '../components/Title';
import Cards from './Cards';

export default class HomePage extends Component<unknown> {
  render() {
    return (
      <div>
        <Title>Home Page</Title>
        <Search />
        <Cards />
      </div>
    );
  }
}
