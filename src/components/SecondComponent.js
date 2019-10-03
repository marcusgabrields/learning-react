import React from 'react';


const CompA = props => <h1>First says: { props.value }</h1>;

const CompB = props => <h1>Second says: { props.value }</h1>;

export { CompB };
export default CompA;
