import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Card(props) {
  const { children, pokemon } = props;

  return (
    <Link to={`/pokemon/${pokemon.id}`}>
      <div data-cy="activity-item" className="w-52 h-72 shadow-md rounded-2xl overflow-hidden -insert-0.5 bg-gradient-to-br from-violet-100 to-white opacity-75 transition duration-200 mt-8 border-[1px] hover:border-violet-400 cursor-pointer">
        {children}
      </div>
    </Link>
  );
}

function Title(props) {
  const { children } = props;
  return (
    <div className="p-8 mt-2">
      <h1 data-cy="activity-item-title" className="text-[18px] font-bold">
        {children}
      </h1>
    </div>
  );
}

function Body(props) {
  const { children } = props;
  return (
    <div className="p-8">
      {children}
    </div>
  );
}

function Footer(props) {
  const { children } = props;
  return (
    <div className="p-8">
      {children}
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node,
};
Title.propTypes = {
  children: PropTypes.node,
};
Body.propTypes = {
  children: PropTypes.node,
};
Footer.propTypes = {
  children: PropTypes.node,
};

Card.defaultProps = {
  children: '',
};
Title.defaultProps = {
  children: '',
};
Body.defaultProps = {
  children: '',
};
Footer.defaultProps = {
  children: '',
};

Card.Title = Title;
Card.Body = Body;
Card.Footer = Footer;

Card.propTypes = {
  pokemon: PropTypes.func,
};

Card.defaultProps = {
  pokemon: [],
};

export default Card;
