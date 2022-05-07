import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';
import './Button.css';

function Button({ search, term, label, backgroundColor }) {
  const style = { backgroundColor };
  const debouncedSearch = debounce(() => search(term), 150);

  useEffect(() => debouncedSearch.cancel(), [debouncedSearch]);

  return (
    <div className="search-button">
      <a onClick={debouncedSearch} style={style}>
        {label}
      </a>
    </div>
  );
}

Button.propTypes = {
  search: PropTypes.func,
  term: PropTypes.string,
  label: PropTypes.oneOf(['SEARCH', 'GO']),
  backgroundColor: PropTypes.string
}

export default Button;