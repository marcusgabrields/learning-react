import React from 'react';


export default props =>
  <div>
    <h1>Family</h1>
    { React.cloneElement(props.children, { ...props }) }

    {/* { React.cloneElement(props.children,
      { last_name: props.last_name }) } */}

    {/* { props.children } */}
  </div>
