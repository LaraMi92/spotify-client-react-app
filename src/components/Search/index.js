import React from 'react';
import PropTypes from 'prop-types';

import { Icon, Form } from 'semantic-ui-react';

import './search.scss';

const SearchBar = ({ submitInput, setSearchValue, searchValue }) => (
  <>

    <Form
      className="search__form"
      onSubmit={() => {
        submitInput();
      }}
    >
      <div className="ui icon input">
        <input
          type="text"
          placeholder="Search for a track"
          value={searchValue}
          onChange={(event) => {
            setSearchValue(event.target.value);
          }}
        />
        <button type="button" onClick={submitInput} className="ui icon button">
          <Icon name="search" color="green" />
        </button>
      </div>
    </Form>
  </>
);

SearchBar.propTypes = {
  searchValue: PropTypes.string.isRequired,
  setSearchValue: PropTypes.func.isRequired,
  submitInput: PropTypes.func.isRequired,
};

export default SearchBar;
