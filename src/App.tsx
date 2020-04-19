import React from 'react';
import { Store } from './Store/store';
import './App.css';
import * as I from './Store/interface';

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
  const toggleFavAction = (episode: I.IEpisodes): I.IAction => {
    const epiInFavs = state.favourites.includes(episode);
    let dispatchObj = {
      type: 'ADD_FAV',
      payload: episode,
    };
    if (epiInFavs) {
      const favWithoutEpisode = state.favourites.filter(
        (fav: I.IEpisodes) => fav.id !== episode.id
      );
      dispatchObj = {
        type: 'REMOVE_FAV',
        payload: favWithoutEpisode,
      };
    }
    return dispatch(dispatchObj);
  };
  console.log(state);
  return (
    <React.Fragment>
      <header className='header'>
        <div>
          <h1>Rick & Morty</h1>
          <p>Pick Your Favourite Character</p>
        </div>
        <div>Favourite(s):{state.favourites.length}</div>
      </header>
      <section className='episode-layout'>
        {state.episodes.slice(0, 20).map((epi: any) => {
          return (
            <section key={epi.id} className='episode-box'>
              <img src={epi.image.medium} alt={epi.name} />
              <div>{epi.name}</div>
              <section>
                <div>
                  Season:{epi.season} Number:{epi.number}
                </div>
                <button type='button' onClick={() => toggleFavAction(epi)}>
                  {state.favourites.find(
                    (fav: I.IEpisodes) => fav.id === epi.id
                  )
                    ? 'Unfav'
                    : 'Fav'}
                </button>
              </section>
            </section>
          );
        })}
      </section>
    </React.Fragment>
  );
}

export default App;
