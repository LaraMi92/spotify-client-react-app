export const SEARCH = 'SEARCH';
export const SUBMIT_SEARCH_VALUE = 'SUBMIT_SEARCH_VALUE';
export const LOGIN_TOKEN = 'LOGIN_TOKEN';
export const UPDATE_VALUE = 'UPDATE_VALUE';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const DISPATCH_RESULTS = 'DISPATCH_RESULTS';
export const SHOW_ERROR = 'SHOW_ERROR';

// setting onChange on token
export const tokenLogged = (query) => ({
  type: LOGIN_TOKEN,
  token: query,
});

// setting onChange on search
export const setSearchValue = (value) => ({
  type: UPDATE_VALUE,
  inputValue: value,
});

// submitting search query
export const submitSearch = () => ({
  type: SUBMIT_SEARCH_VALUE,
});

// handling results
export const showResults = (data) => ({
  type: DISPATCH_RESULTS,
  items: data,
});

// handling errors
export const showError = (error) => ({
  type: SHOW_ERROR,
  error,
});
