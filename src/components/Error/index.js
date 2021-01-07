// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

import './error.scss';

// == Composant
const Error = ({ error }) => {
  if (error === '') {
    return null;
  } return (
    <div className="app error">
      <span>Oops, it seems like there was a problem.</span>
    </div>
  );
};

Error.propTypes = {
  error: PropTypes.string,
};

// == Export
export default Error;
