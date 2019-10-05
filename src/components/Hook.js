import React, { useState, useEffect } from 'react';


export default props => {
  const [counter, setCounter] = useState(100);
  const [status, setStatus] = useState('Par');

  useEffect((counter) => {
    counter % 2 === 0 ? setStatus('Even') : setStatus('Odd');
  }, []);

  return (
    <div>
      <h1>{ counter } is { status }</h1>
      <button onClick={ () => setCounter(counter - 1) }>--</button>
      <button onClick={ () => setCounter(counter + 1) }>++</button>
    </div>
  )
}
