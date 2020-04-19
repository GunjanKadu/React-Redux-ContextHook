import React from 'react';
import * as I from './interface';

const initialState: I.IState = { episodes: [], favourites: [] };

export const Store = React.createContext<I.IState | any>(initialState);

function reducer(state: I.IState, action: I.IAction): I.IState {
  switch (action.type) {
    case 'FETCH_DATA':
      return { ...state, episodes: action.payload };
    case 'ADD_FAV':
      return { ...state, favourites: [...state.favourites, action.payload] };
    default:
      return state;
  }
}

export function StoreProvider(props: any): JSX.Element {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>
      {props.children}
    </Store.Provider>
  );
}
