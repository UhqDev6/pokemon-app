import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from '../components/atoms/Card';
import SpinnerLoading from '../components/atoms/SpinnerLoading';

function Favorite() {
  const {
    favorite = [],
  } = useSelector((states) => states);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    setIsloading(false);
  }, []);

  console.log(favorite);
  return (
    <div className="p-5 flex w-full mx-auto justify-center sm:justify-start">
      <div className="flex flex-wrap gap-5 justify-center">
        {
          isLoading ? (
            <SpinnerLoading />
          ) : (
            favorite.map((fv) => (
              <div className="md=flex md:flex-row justify-center">
                <Link to={`/pokemon/${fv.id}`}>
                  <div className="w-52 h-72 shadow-md rounded-t-full overflow-hidden -insert-0.5 bg-gradient-to-br from-violet-100 to-white opacity-75 transition duration-200 mt-8 border-[1px] hover:border-violet-400 cursor-pointer">
                    <div>
                      <div className="flex justify-center mx-auto mt-10 antialiased text-lg font-semibold uppercase">
                        <h1>{fv.name}</h1>
                      </div>
                      <div className="flex justify-center mx-auto antialiased font-light text-sm capitalize">
                        <p>{`#${fv.id.toString().padStart(3, '0')}`}</p>
                      </div>
                      <div className=" flex justify-center mx-auto mt-5">
                        <img className="w-32 h-24" src={fv.sprites.other.dream_world.front_default} alt={fv.sprites.other.dream_world.front_default} />
                      </div>
                      <div className="flex justify-center mx-auto antialiased font-light text-sm mt-4">
                        {
                          fv.types.map((type) => (
                            <span key={type.type.url} className={`${type.type.name}  rounded-full p-2 text-xs w-16 items-center ml-1 mr-1`}>
                              <p className="flex justify-center text-white font-bold">{`${type.type.name}`}</p>
                            </span>
                          ))
                        }
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="flex justify-center shadow-md bg-violet-400 hover:bg-violet-500 cursor-pointer p-2 rounded-b-3xl text-white">
                  <button
                    type="button"
                    className="capitalize"
                  >
                    delete to favorite
                  </button>
                </div>
              </div>
            ))
          )
        }
      </div>
    </div>
  );
}

export default Favorite;
