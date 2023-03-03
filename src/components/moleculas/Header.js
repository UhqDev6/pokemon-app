import React from 'react';
import Title from '../atoms/Title';

function Header() {
  return (
    <div className="w-full flex items-center h-24 mx-auto bg-gradient-to-b from-violet-200 ">
      <div className="flex mx-auto">
        <Title className="w-full flex text-4xl uppercase font-bold text-pink-400">
          <img className="w-32 h-12" src="https://pokeapi.co/static/pokeapi_256.3fa72200.png" alt="poke-icon" />
        </Title>
      </div>
    </div>
  );
}

export default Header;
