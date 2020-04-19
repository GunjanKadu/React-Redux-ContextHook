export interface IEpisodes {
  id: number;
  url: string;
  name: string;
  season: 1;
  number: 1;
  airdate: string;
  airtime: string;
  airstamp: string;
  runtime: 30;
  image: { medium: string; original: string };
  summary: string;
}

export interface IEpisodeProps {
  episodes: Array<IEpisodes>;
  toggleFavAction: (
    state: IState,
    dispatch: any,
    episode: IEpisodes
  ) => IAction;
  favourites: Array<IEpisodes>;
  store: { state: IState; dispatch: any };
}

export interface IState {
  episodes: Array<IEpisodes>;
  favourites: Array<IEpisodes>;
}
export interface IAction {
  type: string;
  payload: any;
}
