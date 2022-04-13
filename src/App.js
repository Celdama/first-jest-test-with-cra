import './App.css';
import { useState } from 'react';

const App = () => {
  const [heading, setHeading] = useState('Our First Test');

  const handleChangeHeader = () => {
    setHeading('Radical Rhinos');
  };

  return (
    <>
      <h1>{heading}</h1>
      <p className='test'>paragraph</p>
      <button onClick={handleChangeHeader}>Click me</button>
    </>
  );
};

export default App;
