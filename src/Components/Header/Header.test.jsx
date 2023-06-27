import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from '.';

describe('Header', () => {
  it('renders header as expected', () =>{
    render (<Header />)
    let heading = screen.getByText('RESTy')
    expect(heading.tagName).toBe('H1')
    expect(heading).toBeInTheDocument();
  });
});