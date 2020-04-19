import React, { Component } from 'react';
import * as I from './Store/interface';
import { Store } from './Store/store';
import { fetchDataAction, toggleFavAction } from './action';

// const EpisodesList = React.lazy<any>(() => import('./EpisodesList'));
const EpisodesList = React.lazy<any>(() => import('./episodesList'));
export default function Home() {
  const { state, dispatch } = React.useContext(Store);

  React.useEffect(() => {
    state.episodes.length === 0 && fetchDataAction(dispatch);
  });

  const props: I.IEpisodeProps = {
    episodes: state.episodes,
    store: { state, dispatch },
    toggleFavAction,
    favourites: state.favourites,
  };
  return (
    <React.Fragment>
      <React.Suspense fallback={<div>Loading...</div>}>
        <section className='episode-layout'>
          <EpisodesList {...props} />
        </section>
      </React.Suspense>
    </React.Fragment>
  );
}
