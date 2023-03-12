/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { setFilteredByTypeActionCreator } from '../../states/filteredbyType/action';

function FilteredBar(props) {
  const {
    filteredByType,
  } = props;
  const dispatch = useDispatch();

  const handleFilteredByType = (key) => {
    dispatch(setFilteredByTypeActionCreator(key));
  };

  return (
    <div className="flex justify-end">
      <div className="bg-violet-300 w-72 h-screen absolute z-20 mt-5 rounded-l-3xl shadow-lg">
        <span className="flex justify-center mt-4 text-xl font-light text-white">Filter by type</span>
        <div className="w-full mt-8 ml-4">
          <div className="items-center pl-4">
            <button
              type="button"
              onClick={() => handleFilteredByType('grass')}
              className={`${filteredByType === 'grass' ? 'bg-orange-200 text-black p-1 rounded-xl transition duration-700' : 'text-white'}`}
            >
              <span>
                Grass
              </span>
            </button>
          </div>
          <div className="items-center pl-4">
            <button
              type="button"
              onClick={() => handleFilteredByType('fire')}
              className={`${filteredByType === 'fire' ? 'bg-orange-200 text-black p-1 rounded-xl transition duration-700' : 'text-white'}`}
            >
              <span>
                Fire
              </span>
            </button>
          </div>
          <div className="items-center pl-4">
            <button
              type="button"
              onClick={() => handleFilteredByType('steel')}
              className={`${filteredByType === 'steel' ? 'bg-orange-200 text-black p-1 rounded-xl transition duration-700' : 'text-white'}`}
            >
              <span>
                Steel
              </span>
            </button>
          </div>
          <div className="items-center pl-4">
            <button
              type="button"
              onClick={() => handleFilteredByType('water')}
              className={`${filteredByType === 'water' ? 'bg-orange-200 text-black p-1 rounded-xl transition duration-700' : 'text-white'}`}
            >
              <span>
                Water
              </span>
            </button>
          </div>
          <div className="items-center pl-4">
            <button
              type="button"
              onClick={() => handleFilteredByType('psychic')}
              className={`${filteredByType === 'psychic' ? 'bg-orange-200 text-black p-1 rounded-xl transition duration-700' : 'text-white'}`}
            >
              <span>
                Psychic
              </span>
            </button>
          </div>
          <div className="items-center pl-4">
            <button
              type="button"
              onClick={() => handleFilteredByType('ground')}
              className={`${filteredByType === 'ground' ? 'bg-orange-200 text-black p-1 rounded-xl transition duration-700' : 'text-white'}`}
            >
              <span>
                Ground
              </span>
            </button>
          </div>
          <div className="items-center pl-4">
            <button
              type="button"
              onClick={() => handleFilteredByType('ice')}
              className={`${filteredByType === 'ice' ? 'bg-orange-200 text-black p-1 rounded-xl transition duration-700' : 'text-white'}`}
            >
              <span>
                Ice
              </span>
            </button>
          </div>
          <div className="items-center pl-4">
            <button
              type="button"
              onClick={() => handleFilteredByType('flying')}
              className={`${filteredByType === 'flying' ? 'bg-orange-200 text-black p-1 rounded-xl transition duration-700' : 'text-white'}`}
            >
              <span>
                Flying
              </span>
            </button>
          </div>
          <div className="items-center pl-4">
            <button
              type="button"
              onClick={() => handleFilteredByType('ghost')}
              className={`${filteredByType === 'ghost' ? 'bg-orange-200 text-black p-1 rounded-xl transition duration-700' : 'text-white'}`}
            >
              <span>
                Ghost
              </span>
            </button>
          </div>
          <div className="items-center pl-4">
            <button
              type="button"
              onClick={() => handleFilteredByType('normal')}
              className={`${filteredByType === 'normal' ? 'bg-orange-200 text-black p-1 rounded-xl transition duration-700' : 'text-white'}`}
            >
              <span>
                Normal
              </span>
            </button>
          </div>
          <div className="items-center pl-4">
            <button
              type="button"
              onClick={() => handleFilteredByType('poison')}
              className={`${filteredByType === 'poison' ? 'bg-orange-200 text-black p-1 rounded-xl transition duration-700' : 'text-white'}`}
            >
              <span>
                Poison
              </span>
            </button>
          </div>
          <div className="items-center pl-4">
            <button
              type="button"
              onClick={() => handleFilteredByType('rock')}
              className={`${filteredByType === 'rock' ? 'bg-orange-200 text-black p-1 rounded-xl transition duration-700' : 'text-white'}`}
            >
              <span>
                Rock
              </span>
            </button>
          </div>
          <div className="items-center pl-4">
            <button
              type="button"
              onClick={() => handleFilteredByType('fighting')}
              className={`${filteredByType === 'fighting' ? 'bg-orange-200 text-black p-1 rounded-xl transition duration-700' : 'text-white'}`}
            >
              <span>
                Fighting
              </span>
            </button>
          </div>
          <div className="items-center pl-4">
            <button
              type="button"
              onClick={() => handleFilteredByType('dark')}
              className={`${filteredByType === 'dark' ? 'bg-orange-200 text-black p-1 rounded-xl transition duration-700' : 'text-white'}`}
            >
              <span>
                Dark
              </span>
            </button>
          </div>
          <div className="items-center pl-4">
            <button
              type="button"
              onClick={() => handleFilteredByType('bug')}
              className={`${filteredByType === 'bug' ? 'bg-orange-200 text-black p-1 rounded-xl transition duration-700' : 'text-white'}`}
            >
              <span>
                Bug
              </span>
            </button>
          </div>
          <div className="items-center pl-4">
            <button
              type="button"
              onClick={() => handleFilteredByType('dragon')}
              className={`${filteredByType === 'dragon' ? 'bg-orange-200 text-black p-1 rounded-xl transition duration-700' : 'text-white'}`}
            >
              <span>
                Dragon
              </span>
            </button>
          </div>
          <div className="items-center pl-4">
            <button
              type="button"
              onClick={() => handleFilteredByType('electric')}
              className={`${filteredByType === 'electric' ? 'bg-orange-200 text-black p-1 rounded-xl transition duration-700' : 'text-white'}`}
            >
              <span>
                Electric
              </span>
            </button>
          </div>
          <div className="items-center pl-4">
            <button
              type="button"
              onClick={() => handleFilteredByType('fairy')}
              className={`${filteredByType === 'fairy' ? 'bg-orange-200 text-black p-1 rounded-xl transition duration-700' : 'text-white'}`}
            >
              <span>
                Fairy
              </span>
            </button>
          </div>
          <div className="items-center pl-4">
            <button
              type="button"
              onClick={() => handleFilteredByType('shadow')}
              className={`${filteredByType === 'shadow' ? 'bg-orange-200 text-black p-1 rounded-xl transition duration-700' : 'text-white'}`}
            >
              <span>
                Shadow
              </span>
            </button>
          </div>
          <div className="items-center pl-4">
            <button
              type="button"
              onClick={() => handleFilteredByType('')}
              className={`${filteredByType === '' ? 'bg-orange-200 text-black p-1 rounded-xl transition duration-700' : 'text-white'}`}
            >
              <span>
                All...
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

FilteredBar.propTypes = {
  filteredByType: PropTypes.string,
};

FilteredBar.defaultProps = {
  filteredByType: '',
};

export default FilteredBar;
