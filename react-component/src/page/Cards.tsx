import { Wrap } from '@chakra-ui/react';
import { useState } from 'react';
import product from '../assets/api.json';
import CardItem from '../components/CardItem';

function Cards() {
  const [items, setItems] = useState(product.products);

  return (
    <Wrap>
      {items.map((item) => (
        <CardItem
          key={item.id}
          id={item.id}
          title={item.title}
          thumbnail={item.thumbnail}
          description={item.description}
          price={item.price}
        />
      ))}
    </Wrap>
  );
}

export default Cards;
