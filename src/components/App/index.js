// == Import npm
import React from 'react';

import logoSpotify from 'src/assets/logo_spotify.png';
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
    <img src={logoSpotify} alt="spotify logo" className="logo" />
    <Search />
    <TrackResults />
    <Error />
  </div>
);

// == Export
export default App;
