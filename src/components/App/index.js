// == Import npm
import React from 'react';

import Login from 'src/containers/Login';
import Search from 'src/containers/Search';
import TrackResults from 'src/containers/TrackResults';
import Error from 'src/containers/Error';

import 'semantic-ui-css/semantic.min.css';
import './app.scss';

// == Composant
const App = () => (
  <div className="app">
    <Login />
    <Search />
    <TrackResults />
    <Error />
  </div>
);

// == Export
export default App;
