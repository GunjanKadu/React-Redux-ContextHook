import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StoreProvider } from './Store/store';
import { Router, RouteComponentProps } from '@reach/router';
import HomePage from './home';
import Favpage from './favs';

const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent;

ReactDOM.render(
  <StoreProvider>
    <Router>
      <App path='/'>
        <RouterPage pageComponent={<HomePage />} path='/' />
        <RouterPage pageComponent={<Favpage />} path='/favs' />
      </App>
    </Router>
  </StoreProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
