import React from 'react';
import PropTypes from 'prop-types';

function Search(props) {
  const {
    search,
    searchChange,
  } = props;

  return (
    <input
      type="text"
      value={search}
      onChange={(event) => {
        searchChange(event.target.value);
      }}
      placeholder="Search pokemon by name...."
      className="bg-violet-50 w-full md:w-1/2 h-[34px] rounded-full p-4 text-xs flex mx-auto"
    />
  );
}

Search.propTypes = {
  search: PropTypes.string.isRequired,
  searchChange: PropTypes.func.isRequired,
};

export default Search;
