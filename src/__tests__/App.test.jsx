import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import App from '../App'

describe('App Componant', () => {
  test('allows proper use', () => {
    render(<App />)
    let urlInput = screen.getByTestId('form-input');
    let postSpan = screen.getByTestId('post-button');
    let button = screen.getByTestId('form-input');

    fireEvent.change(urlInput, {target: {value: 'test.com'}});
    fireEvent.change(postSpan);
    fireEvent.change(button);

    let pre = screen.getByTestId('results-pre');
    // expect(pre).toHaveTextContent('fake thing 2');

    let methodDiv = screen.getByTestId('app-div-method');
    let urlDiv = screen.getByTestId('app-div-url');

    expect(methodDiv).toHaveTextContent('POST')
    expect(urlDiv).toHaveTextContent('test.com')
  });
});