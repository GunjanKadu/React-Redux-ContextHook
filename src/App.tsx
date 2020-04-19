import React from 'react';
import { Store } from './Store/store';
import './App.css';
import * as I from './Store/interface';

const EpisodesList = React.lazy<any>(() => import('./episodesList'));

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
  const props = {
    episodes: state.episodes,
    toggleFavAction: toggleFavAction,
    favourites: state.favourites,
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
      <React.Suspense fallback={<div>Loading...</div>}>
        <section className='episode-layout'>
          <EpisodesList {...props} />
        </section>
      </React.Suspense>
    </React.Fragment>
  );
}

export default App;
