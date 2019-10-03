import React from 'react';
import ReactDOM from 'react-dom';

// import FirstComponent from './components/FirstComponent';
// import CompA, { CompB } from './components/SecondComponent';
// import MultiElements from './components/MultiElements';
import SilvaFamily from './components/SilvaFamily';
import Family from './components/Family';
import Member from './components/Member';


const element = document.getElementById('root');
ReactDOM.render(
  <div>
    <Family last_name='Pereira'>
      <Member name='Andre' />
      <Member name='Mariana' />
    </Family>

    <SilvaFamily />

    {/* <MultiElements /> */}

    {/* <CompA value='Hi Im A!'/>
    <CompB value='B here!' /> */}

    {/* <FirstComponent value='Good Morning!' />
    <FirstComponent value={42} /> */}
  </div>
, element)
