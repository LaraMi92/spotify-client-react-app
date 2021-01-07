import React from 'react';
import PropTypes from 'prop-types';

import { Input } from 'semantic-ui-react';

import './login.scss';

const Login = ({
  token, setAccessToken,
}) => (
  // only handling an input onChange event - no submit
  <Input
    className="login"
    icon="lock open"
    placeholder="Access token"
    value={token}
    onChange={(event) => {
      setAccessToken(event.target.value);
    }}
  />

);

Login.propTypes = {
  token: PropTypes.string.isRequired,
  setAccessToken: PropTypes.func.isRequired,

};

export default Login;
