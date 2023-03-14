import React from 'react';
import { render, screen } from '@testing-library/react';
import Search from './Search';
import '@testing-library/jest-dom';

describe('render Search component', () => {
  it('should render the Search component', () => {
    render(<Search />);
    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();
  });
});
