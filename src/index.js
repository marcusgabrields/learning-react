import React from 'react';
import ReactDOM from 'react-dom';

// import FirstComponent from './components/FirstComponent';
// import CompA, { CompB } from './components/SecondComponent';
// import MultiElements from './components/MultiElements';
// import SilvaFamily from './components/SilvaFamily';
// import Family from './components/Family';
// import Member from './components/Member';
// import ComponentWithFunction from './components/ComponentWithFunction';
// import Parent from './components/Parent';
// import ClassComponent from './components/ClassComponent';
// import Counter from './components/Counter';
import Hook from './components/Hook';


const element = document.getElementById('root');
ReactDOM.render(
  <div>
    <Hook />

    {/* <Counter initialNumber={52} /> */}

    {/* <ClassComponent value="I'm a class component"/> */}

    {/* <Parent /> */}

    {/* <ComponentWithFunction /> */}

    {/* <Family last_name='Pereira'>
      <Member name='Andre' />
      <Member name='Mariana' />
    </Family> */}

    {/* <SilvaFamily /> */}

    {/* <MultiElements /> */}

    {/* <CompA value='Hi Im A!'/>
    <CompB value='B here!' /> */}

    {/* <FirstComponent value='Good Morning!' />
    <FirstComponent value={42} /> */}
  </div>
, element)
