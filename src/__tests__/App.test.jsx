import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import App from '../App'

import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
  rest.get('/testGet', (req, res, ctx) => {
    return res(ctx.json({ greeting: 'hello there' }));
  }),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('App Componant', () => {
  test('allows proper use', () => {
    render(<App />)
    let urlInput = screen.getByTestId('form-input');
    let getSpan = screen.getByTestId('get-button');
    let button = screen.getByTestId('form-input');

    fireEvent.change(urlInput, {target: {value: './testGet'}});
    fireEvent.click(getSpan);
    fireEvent.click(button);

    let pre = screen.getByTestId('results-pre');
    expect(pre).toHaveTextContent('hello there');

    let methodDiv = screen.getByTestId('app-div-method');
    let urlDiv = screen.getByTestId('app-div-url');

    expect(methodDiv).toHaveTextContent('GET')
    expect(urlDiv).toHaveTextContent('/testGet')
  });
});