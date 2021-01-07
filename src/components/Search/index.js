import React from 'react';
import PropTypes from 'prop-types';

import { Input, Form, Image } from 'semantic-ui-react';

import logoSpotify from 'src/assets/logo_spotify.png';
import './search.scss';

const SearchBar = ({ submitInput, setSearchValue, searchValue }) => (
  <>
    <Image centered size="medium" src={logoSpotify} />
    <Form
      className="search__form"
      onSubmit={() => {
        submitInput();
      }}
    >
      <Input
        fluid
        icon="search"
        placeholder="Search for a track"
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}

      />
    </Form>
  </>
);

SearchBar.propTypes = {
  searchValue: PropTypes.string.isRequired,
  setSearchValue: PropTypes.func.isRequired,
  submitInput: PropTypes.func.isRequired,
};

export default SearchBar;
