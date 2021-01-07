import { LOGIN_TOKEN, UPDATE_VALUE, DISPATCH_RESULTS } from 'src/store/actions';

const initialState = {
  items: {},
  searchValue: '',
  token: '',
  error: '',
};

function reducer(oldState = initialState, action) {
  switch (action.type) {
    case LOGIN_TOKEN:
      return {
        ...oldState,
        token: action.token,
      };

    case UPDATE_VALUE:
      return {
        ...oldState,
        searchValue: action.inputValue,
      };

    case DISPATCH_RESULTS:
      return {
        ...oldState,
        items: action.items,
      };
    default:
      return { ...oldState };
  }
}

export default reducer;
