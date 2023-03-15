import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AboutUs from './AboutUs';
import NotFound from './NotFound';

describe('render Page component', () => {
  it('AboutUs', () => {
    render(<AboutUs />);
    expect(screen.getByText(/about/i)).toBeInTheDocument();
  });
  it('NotFound', () => {
    render(<NotFound />);
    expect(screen.getByText(/Page/i)).toBeInTheDocument();
  });
});
