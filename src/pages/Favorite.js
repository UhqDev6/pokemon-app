import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import SpinnerLoading from '../components/atoms/SpinnerLoading';
import { asyncDeleteToFavorite } from '../states/favorite/action';
import Wrapper from '../components/atoms/Wrapper';

function Favorite() {
  const {
    favorite = [],
  } = useSelector((states) => states);
  const [isLoading, setIsloading] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(favorite);

  const handleDeleteFavorite = (key) => {
    dispatch(asyncDeleteToFavorite(key));
    navigate('/favorite');
  };

  useEffect(() => {
    setIsloading(false);
  }, []);

  return (
    <Wrapper>
      <Link to="/">
        <div className="ml-10">
          <BsArrowLeft size="30px" />
          <p className="text-slate-400">back to home</p>
        </div>
      </Link>
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
                <div className="
                      flex justify-center rounded-b-3xl
                      shadow-md
                      bg-violet-400
                      hover:bg-gradient-to-r
                      hover:from-violet-400
                      hover:to-fuchsia-300
                      cursor-pointer
                      p-2
                      text-white capitalize
                      overflow-hidden
                      tracking-wider"
                >
                  <button
                    type="button"
                    onClick={() => handleDeleteFavorite(fv.id)}
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
    </Wrapper>
  );
}

export default Favorite;
