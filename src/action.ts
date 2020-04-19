import * as I from './Store/interface';
export const fetchDataAction = async (dispatch: any) => {
  const URL =
    'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes';
  const data = await fetch(URL);
  const dataJson = await data.json();
  return dispatch({
    type: 'FETCH_DATA',
    payload: dataJson._embedded.episodes,
  });
};

export const toggleFavAction = (
  state: I.IState,
  dispatch: any,
  episode: I.IEpisodes | any
): I.IAction => {
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
