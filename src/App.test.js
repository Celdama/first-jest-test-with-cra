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
import userEvent from '@testing-library/user-event';
// no need to import Jest, it will automatically detect jest files

// all this above package come preinstalled and the scripts preconfigured with cra

// test('renders learn react link', () => {
//   // https://testing-library.com/docs/react-testing-library/api/#render
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// COMMENT THIS UTILITY TO TEST USER EVENT IN OTHER UTILITY

/**
describe('App component', () => {
  it('renders correct heading', () => {
    render(<App />);
    // getByRole is just one of the dozen query methods that wa could've used.
    // Queries are classified into three types: getBy, queryBy, findBy
    // https://testing-library.com/docs/queries/about/
    // this is my first query
    expect(screen.getByRole('heading').textContent).toMatch(/our first test/i);
    // and this is my second query, with specificity improved
    expect(
      screen.getByRole('heading', { name: 'Our First Test' }).textContent
    ).toMatch(/our first test/i);
    // => as stated by the React Testing Library docs, byRole methods are the favored methods for querying, especially
    // when paired with the name option. (check second test above).
    // Queries that are done through ByRole ensure that our UI is accessible to everyone
    // no matter what mode they use to navigate the webpage. (i.e mouse or assistive technologies)
  });
});
*/

describe('App component para', () => {
  it('render correct paragraph', () => {
    render(<App />);
    expect(screen.getByText('paragraph').className).toMatch('test');
  });
});

// SIMULATE USER EVENT
describe('App component', () => {
  it('renders magnificent monkeys', () => {
    // since screen does not have the container property, we'll destructure render to obtain container for this test
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });

  it('renders radical rhinos after button click', () => {
    // React Testing Library provides the screen object which has all the methods for querying
    // With screen, we don't have to worry about keeping render's destructuring up-to-date.
    // Hence, it's better to use screen to access queries rather than to destructure render.
    render(<App />);
    const button = screen.getByRole('button', { name: 'Click Me' });

    userEvent.click(button);

    expect(screen.getByRole('heading').textContent).toMatch(/radical rhinos/i);
  });

  // the tests speak for themselves.
  // In the first test, we utilize snapshots to check whether all the nodes render as we expect them to.
  // In the second test, we simulate a click event. Then we check if the heading changed.
  // toMatch is one of the various assertions we could have made.

  // It's also important to note that after every test, React Testin Library unmounts the rendered components.
  // That's why we render for each test. For a lot of tests for a component, the beforeEach jest function could prove handy.
});

/**  
# What are snapshots ? 

snapshots testing is just comparing our rendered component whith an associated snapshot file.
for example, take a look at the snpashot file which was automatically generated after we ran the "magnificent monkey renders" test.
It's an HTML representation of the App component. And it will be comparend against the App in future snapshot assertions. 
If the App changes, even slightly, the test fails. 

Snapshot tests are fast and easy to write. One assertion saves us from writing multiple lines of code. 
For example, with a toMatchSnapshot, we’re spared of asserting the existence of the button and the heading. 
They also don’t let unexpected changes creep into our code.
https://jestjs.io/docs/snapshot-testing

Snapshots might seem the best thing that has happened to us while testing thus far. 
But we are forced to wonder, what exactly are we testing? What’s being validated? 
If a snapshot passes, what does it convey about the correctness of the component?

Snapshot tests may cause false positives. Since we cannot ascertain the validity of the component from a snapshot test,
a bug might go undetected. 
Over-reliance on snapshots can make developers more confident about their code than they should be.

The other issue with snapshots is false negatives. Even the most insignificant of changes compel the test to fail. 
Fixing punctuation? Snapshot will fail. Replacing an HTML tag to a more semantic one? Snapshot will fail. 
This might cause us to lose our confidence in the test suite altogether. Snapshots aren’t inherently bad; 
they do serve a purpose. But it’s beneficial to understand when to snapshot, and when not to snapshot.

## ressources 

- all available query methods on react testing library
- no nedd to use then all, but it's optimal to employ a specific method for a specific query. 
https://testing-library.com/docs/dom-testing-library/cheatsheet/

- if none of the query methods suffice, there's an option to use test ids.
https://testing-library.com/docs/queries/bytestid/


- how to achieve user simulation
https://testing-library.com/docs/user-event/intro/

- pros & cons of jest snapshot tests 
https://tsh.io/blog/pros-and-cons-of-jest-snapshot-tests/

- explaining what is snapshots tesing in programming in general
https://www.sitepen.com/blog/snapshot-testing-benefits-and-drawbacks


## knowledge check 
- [] What packages are required for React testing?
- [] What is the significance of the user-event package?
- [] What does the render method do?
- [] What is the most preferred method for querying?
- [] How would you test for a click event with userEvent?
- [] What is the advantage of snapshot tests?
- [] What are the disadvantages of snapshot tests?


## extra 

https://academind.com/tutorials/testing-react-apps

https://www.youtube.com/watch?v=YQLn7ycfzEo
*/
