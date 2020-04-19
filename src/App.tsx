import React from 'react';
import { Store } from './Store/store';
import './App.css';

function App(): JSX.Element {
  const store = React.useContext(Store);

  return (
    <React.Fragment>
      {console.log(store)}
      <h1>Rick & Morty</h1>
      <p>Pick Your Favourite Character</p>
    </React.Fragment>
  );
}

export default App;
