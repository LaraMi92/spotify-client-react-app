import React from 'react';
import PropTypes from 'prop-types';

import { Input } from 'semantic-ui-react';

import './login.scss';

const Login = ({
  token, setAccessToken,
}) => (
  // only handling an input onChange event - no submit.
  // Change of icon depending on token length onchange
  <Input
    className="login"
    icon={token.length === 163 ? 'lock' : 'lock open'}
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
