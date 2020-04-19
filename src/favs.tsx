import React from 'react';
import { Store } from './Store/store';
import { toggleFavAction } from './action';

const EpisodesList = React.lazy<any>(() => import('./episodesList'));

function Favs(): JSX.Element {
  const { state, dispatch } = React.useContext(Store);

  const props = {
    episodes: state.favourites,
    store: { state, dispatch },
    toggleFavAction,
    favourites: state.favourites,
  };

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <div className='episode-layout'>
        <EpisodesList {...props} />
      </div>
    </React.Suspense>
  );
}

export default Favs;
