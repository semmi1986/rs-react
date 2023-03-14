import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AboutUs from './AboutUs';
import HomePage from './HomePage';
import NotFound from './NotFound';

describe('render Page component', () => {
  it('AboutUs', () => {
    render(<AboutUs />);
    expect(screen.getByText(/About/i)).toBeInTheDocument();
  });
  it('HomePage', () => {
    render(<HomePage />);
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
  });
  it('NotFound', () => {
    render(<NotFound />);
    expect(screen.getByText(/Page/i)).toBeInTheDocument();
  });
});
