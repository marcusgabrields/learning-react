import React from 'react';

import Child from './Child';


export default props => {
  const notifyExit = place => alert(`You can go to ${place}`);

  return (
    <div>
      <Child notifyExit={ notifyExit }/>
    </div>
  )
}
