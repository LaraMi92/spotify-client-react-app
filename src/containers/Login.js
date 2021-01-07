import { connect } from 'react-redux';

import Login from 'src/components/Login';

import { tokenLogged } from 'src/store/actions';

const mapStateToProps = (state) => ({
  token: state.token,
});

const mapDispatchToProps = (dispatch) => ({
  setAccessToken: (value) => {
    dispatch(tokenLogged(value));
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
