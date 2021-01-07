import { connect } from 'react-redux';

import Search from 'src/components/Search';

import { submitSearch, setSearchValue } from 'src/store/actions';

const mapDispatchToProps = (dispatch) => ({
  submitInput: () => {
    dispatch(submitSearch());
  },

  setSearchValue: (value) => {
    dispatch(setSearchValue(value));
  },
});

const mapStateToProps = (state) => ({
  searchValue: state.searchValue,

});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
