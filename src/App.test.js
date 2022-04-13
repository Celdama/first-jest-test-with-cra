// give us access to useful functions like render
import { render, screen } from '@testing-library/react';
// includes some handy custom matchers (assertive functions) like toBeInTheDocument and more.
import '@testing-library/jest-dom';
// provides the userEvent API that simulates user interactions with the webpage.
// Alternatively, we could import the fireEvent API from @testing-library/react
// fireEvent is an inferior counterpart to userEvent, so userEvent should always be preferred in practice
// import userEvent from '@testing-library/user-event';
// import TestComponent from 'path-to-test-component';
import App from './App';
// no need to import Jest, it will automatically detect jest files

// all this above package come preinstalled and the scripts preconfigured with cra

// test('renders learn react link', () => {
//   // https://testing-library.com/docs/react-testing-library/api/#render
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe('App component', () => {
  it('renders correct heading', () => {
    render(<App />);
    // getByRole is just one of the dozen query methods that wa could've used.
    // Queries are classified into three types: getBy, queryBy, findBy
    // https://testing-library.com/docs/queries/about/
    expect(screen.getByRole('heading').textContent).toMatch(/our first test/i);
  });
});

describe('App component para', () => {
  it('render correct paragraph', () => {
    render(<App />);
    expect(screen.getByText('paragraph').className).toMatch('test');
  });
});
