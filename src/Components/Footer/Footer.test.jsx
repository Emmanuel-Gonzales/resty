import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Footer from '.';

describe('Footer', () => {
  it('renders footer as expected', () =>{
    render (<Footer />)
    let heading = screen.getByText('© 2018')
    expect(heading.tagName).toBe('FOOTER')
    expect(heading).toBeInTheDocument();
  });
});