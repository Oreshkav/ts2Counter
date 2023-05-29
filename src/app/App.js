import React from 'react';
import './App.css';
import MyComponent from '../components/MyComponent';
import Counter from '../components/Counter' ;
import ComponentA2 from '../components/ComponentA';

function App() {
  const name = "Dear Friend";

  return (
    <> 
    {/* <> = <React.Fragment></React.Fragment>*/ }
      <h1> Hello, {name}!</h1>
      <p> This is example</p>
      <MyComponent/>
      <ComponentA2/>
      <Counter/>
      {/* <ComponentA2 /> */}
    </>
  )
}

export default App;
