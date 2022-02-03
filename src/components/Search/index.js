import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Icon, Form } from 'semantic-ui-react';
import './search.scss';

const SearchBar = ({ submitInput, setSearchValue, searchValue, token }) => {
  
  const [error, setError] = useState('');

  const submit = (e) => {
    e.preventDefault();
    if(searchValue === ''){
      setError('Please provide a value!');
      return;
    }
    if(token === ''){
      setError('Please provide a valid token!');
      return;
    } 
    submitInput();
  };

  return(
  <>
    <Form
      className="search__form"
      onSubmit={(e) => submit(e)}
    >
      <div className="ui icon input">
        <input
          type="text"
          placeholder="Search for a track"
          value={searchValue}
          onChange={(event) => {
            setSearchValue(event.target.value);
            setError('');
          }}
        />
        <button type="submit" onClick={(e) => submit(e)} className="ui icon button">
          <Icon name="search" color="green" />
        </button>
      </div>
    </Form>
    {error !== '' && <div className="app error">{error}</div>}
  </>
  )};

SearchBar.propTypes = {
  searchValue: PropTypes.string.isRequired,
  setSearchValue: PropTypes.func.isRequired,
  submitInput: PropTypes.func.isRequired,
};

export default SearchBar;
