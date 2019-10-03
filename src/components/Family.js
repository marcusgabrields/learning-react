import React from 'react';

import { childrenWithProps } from '../helpers/helper';


export default props =>
  <div>
    <h1>Family</h1>

    { childrenWithProps(props) }

    {/* { React.Children.map(props.children, child => {
      return React.cloneElement(child, { ...props })
    }) } */}

    {/* { React.cloneElement(props.children, { ...props }) } */}

    {/* { React.cloneElement(props.children,
      { last_name: props.last_name }) } */}

    {/* { props.children } */}
  </div>
