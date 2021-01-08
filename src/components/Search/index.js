import React from 'react';
import PropTypes from 'prop-types';

import { Input, Form } from 'semantic-ui-react';

import './search.scss';

const SearchBar = ({ submitInput, setSearchValue, searchValue }) => (
  <>

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
