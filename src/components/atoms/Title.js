import React from 'react';
import PropTypes from 'prop-types';

function Title({ className = '', children }) {
  return (
    <div className={`${className}`}>
      {children }
    </div>
  );
}

Title.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Title;
