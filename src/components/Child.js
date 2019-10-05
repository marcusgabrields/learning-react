import React from 'react';


export default props =>
  <div>
    <button
      onClick={ () => props.notifyExit('Park') } >
      going out...
    </button>
  </div>
