import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header';

describe('Header', () => {
  it('render the Header component', () => {
    render(<Header />);
    expect(screen.getByAltText('RS-Shcoll')).toBeInTheDocument();
  });
});
