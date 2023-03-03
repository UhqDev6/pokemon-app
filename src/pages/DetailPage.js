/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import SpinnerLoading from '../components/atoms/SpinnerLoading';
import { asyncReceivePokemonDetail } from '../states/pokemonDetail/action';

function DetailPage() {
  const { id } = useParams();
  const [isLoading, setIsloading] = useState(true);
  const dispatch = useDispatch();

  const {
    pokemonDetail = [],
  } = useSelector((states) => states);

  console.log(pokemonDetail);

  useEffect(() => {
    dispatch(asyncReceivePokemonDetail(id));
    setIsloading(false);
  }, [id, dispatch]);

  return (
    <div className="p-5 flex w-full mx-auto justify-center sm:justify-start">
      <div className="md:flex w-full md:flex-wrap gap-5 justify-center">
        {
          isLoading ? (
            <SpinnerLoading />
          ) : (
            <>
              <div className="md:flex-wrap md:w-[96]">
                <div className="flex justify-center mx-auto mt-10 antialiased text-3xl font-semibold uppercase">
                  <h1>{pokemonDetail?.name}</h1>
                </div>
                <div className="flex justify-center mx-auto antialiased font-light text-xl capitalize">
                  <p>{`#${pokemonDetail?.id}`}</p>
                </div>
                <div className=" flex justify-center mx-auto mt-20">
                  <img className="w-50 h-42" src={pokemonDetail?.sprites.other.dream_world.front_default} alt={pokemonDetail?.sprites.other.dream_world.front_default} />
                </div>
                <div className="flex justify-center mx-auto antialiased font-light text-sm mt-16">
                  {
                pokemonDetail?.types.map((type) => (
                  <span key={type.type.url} className={`${type.type.name}  rounded-full p-2 text-xs w-24 items-center ml-1 mr-1`}>
                    <p className="flex justify-center text-white text-lg font-bold">{`${type.type.name}`}</p>
                  </span>
                ))
              }
                </div>
              </div>
              <div className="md:flex-wrap md:w-1/2 md:justify-between mt-3 md:mt-0">
                <ol className="flex gap-5 justify-center mt-10 uppercase text-sm">
                  <li className="flex-none">About</li>
                  <li className="flex-initial">Statistic</li>
                  <li className="flex-initial">Evolution</li>
                </ol>
              </div>
            </>
          )
        }
      </div>
    </div>
  );
}

export default DetailPage;
