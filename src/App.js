import './App.css';
import { useState } from 'react';

const App = () => {
  const [heading, setHeading] = useState('Magnificent Monkeys');

  const handleChangeHeader = () => {
    setHeading('Radical Rhinos');
  };

  return (
    <>
      <h1>{heading}</h1>
      <p className='test'>paragraph</p>
      <button onClick={handleChangeHeader}>Click Me</button>
    </>
  );
};

export default App;
