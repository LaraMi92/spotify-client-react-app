import axios from 'axios';

import { SUBMIT_SEARCH_VALUE, showResults, showError } from 'src/store/actions';

const loadData = (store) => (next) => (action) => {
  // get the token and query stored in reducer
  const { token, searchValue } = store.getState();

  if (action.type === SUBMIT_SEARCH_VALUE) {
    const config = {
      method: 'get',
      url: `https://api.spotify.com/v1/search?q=${searchValue}&type=track&market=FR&limit=10&offset=0`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    // dispatch actions in case of results/failure
    axios(config)
      .then((response) => {
        console.log(response.data.tracks.items);
        if (response.data.tracks.items.length === 0) {
          store.dispatch(showError('There was no content found'));
        }
        else {
          store.dispatch(showResults(response.data));
        }
      })
      .catch((error) => {
        store.dispatch(showError(error));
      });
    next(action);
  }
  next(action);
};

export default loadData;
