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
    <div className="text"> Get a token <a href="https://developer.spotify.com/console/get-search-item/" target="_blank">here </a>
     and paste it above. You're all set to make a search and listen to music!</div>
    <Search />
    <TrackResults />
    <Error />
  </div>
);

// == Export
export default App;
