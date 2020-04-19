import React from 'react';
import { Store } from './Store/store';
import './App.css';

import { Link } from '@reach/router';

function App(props: any): JSX.Element {
  const { state } = React.useContext(Store);

  return (
    <React.Fragment>
      <header className='header'>
        <div>
          <h1>Rick & Morty</h1>
          <p>Pick Your Favourite Character</p>
        </div>
        <div>
          <Link style={{ marginRight: '10px' }} to='/'>
            Home
          </Link>
          <Link to='/favs'>Favourite(s):{state.favourites.length}</Link>
        </div>
      </header>
      {props.children}
    </React.Fragment>
  );
}

export default App;
