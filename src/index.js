import React from 'react';
import ReactDOM from 'react-dom';

// import FirstComponent from './components/FirstComponent';
// import { CompA, CompB } from './components/SecondComponent';
import MultiElements from './components/MultiElements';


const element = document.getElementById('root');
ReactDOM.render(
  <div>
    <MultiElements />

    {/* <CompA value='Hi Im A!'/>
    <CompB value='B here!' /> */}

    {/* <FirstComponent value='Good Morning!' />
    <FirstComponent value={42} /> */}
  </div>
, element)
