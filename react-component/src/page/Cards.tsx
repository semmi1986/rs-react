import { Wrap } from '@chakra-ui/react';
import { Component } from 'react';

import product from '../assets/api.json';
import CardItem from '../components/CardItem';
import { DataState } from '../types';

export default class Cards extends Component<unknown, { items: DataState[] }> {
  constructor(props: unknown) {
    super(props);
    this.state = { items: product.products };
  }

  render() {
    // console.log(this.state.items);
    return (
      <Wrap>
        {this.state.items.map((item) => (
          <CardItem key={item.id} {...item} />
        ))}
      </Wrap>
    );
  }
}
