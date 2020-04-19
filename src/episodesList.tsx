import React from 'react';
import * as I from './Store/interface';
export default function episodesList(props: any): Array<JSX.Element> {
  const { episodes, toggleFavAction, favourites, store } = props;
  const { state, dispatch } = store;

  return episodes.slice(0, 36).map((epi: I.IEpisodes) => {
    return (
      <section key={epi.id} className='episode-box'>
        <img src={epi.image.medium} alt={epi.name} />
        <div>{epi.name}</div>
        <section style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            Season:{epi.season} Number:{epi.number}
          </div>
          <button
            type='button'
            onClick={() => toggleFavAction(state, dispatch, epi)}
          >
            {favourites.find((fav: I.IEpisodes) => fav.id === epi.id)
              ? 'Unfav'
              : 'Fav'}
          </button>
        </section>
      </section>
    );
  });
}
