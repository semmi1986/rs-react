import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Cards from './page/Cards';

describe('render Cards component', () => {
  it('Cards', () => {
    render(<Cards />);
    const cards = screen.getAllByTestId('cards');
    expect(cards.length).toBe(7);
  });
});
