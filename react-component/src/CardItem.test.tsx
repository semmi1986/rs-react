import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CardItem from './components/CardItem';

describe('render Cards component', () => {
  const props = {
    id: 1,
    title: 'string',
    description: 'string',
    price: 420,
    thumbnail: 'string',
  };

  it('Cards', () => {
    render(<CardItem {...props} />);
    expect(screen.getByAltText(/product image/i)).toBeInTheDocument();
  });
});
