import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/notfound.jpg';

function Error404() {
  return (
    <>
      <div className="flex justify-center">
        <Link to="/">
          <p className="mt-36 font-bold text-3xl text-purple-400">Back Home</p>
        </Link>
      </div>
      <div className="flex justify-center mt-20">
        <img src={Logo} alt="Not Found" className="w-1/4 rounded-3xl animate-pulse" />
      </div>
    </>
  );
}

export default Error404;
