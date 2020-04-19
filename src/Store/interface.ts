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

export interface IState {
  episodes: Array<any>;
  favourites: Array<any>;
}
export interface IAction {
  type: string;
  payload: any;
}
