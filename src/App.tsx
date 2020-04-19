import React from 'react';
import { Store } from './Store/store';
import './App.css';

function App(): JSX.Element {
  const { state, dispatch } = React.useContext(Store);

  React.useEffect(() => {
    state.episodes.length === 0 && fetchDataAction();
  });
  const fetchDataAction = async () => {
    const URL =
      'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes';
    const data = await fetch(URL);
    const dataJson = await data.json();
    return dispatch({
      type: 'FETCH_DATA',
      payload: dataJson._embedded.episodes,
    });
  };
  console.log(state);
  return (
    <React.Fragment>
      <header className='header'>
        <h1>Rick & Morty</h1>
        <p>Pick Your Favourite Character</p>
      </header>
      <section className='episode-layout'>
        {state.episodes.slice(0, 20).map((epi: any) => {
          return (
            <section key={epi.id} className='episode-name'>
              <img src={epi.image.medium} alt={epi.name} />
              <div>{epi.name}</div>
              <section>
                Season:{epi.season} Number:{epi.number}
              </section>
            </section>
          );
        })}
      </section>
    </React.Fragment>
  );
}

export default App;
