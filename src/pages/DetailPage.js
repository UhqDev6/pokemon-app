import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import ProgressBar from '@ramonak/react-progress-bar';
import SpinnerLoading from '../components/atoms/SpinnerLoading';
import { asyncReceivePokemonDetail } from '../states/pokemonDetail/action';
import { asyncAddToFavorite } from '../states/favorite/action';

function DetailPage() {
  const { id } = useParams();
  const [isLoading, setIsloading] = useState(true);
  const dispatch = useDispatch();

  const {
    pokemonDetail = [],
  } = useSelector((states) => states);

  const navigate = useNavigate();

  console.log(pokemonDetail);

  const handleFavorite = (key) => {
    dispatch(asyncAddToFavorite(key));
    navigate('/favorite');
  };

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
                  <p>{`#${pokemonDetail?.id.toString().padStart(3, '0')}`}</p>
                </div>
                <div className=" flex justify-center mx-auto mt-20">
                  <img className="w-52 h-44" src={pokemonDetail?.sprites.other.dream_world.front_default} alt={pokemonDetail?.sprites.other.dream_world.front_default} />
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
              <div className="md:flex-wrap md:w-1/2 md:justify-between -mt-2 md:mt-0 md:ml-10 p-5 md:p-0">
                <ol className="justify-center mt-10 capitalize text-sm">
                  <li className="text-base font-semibold">
                    About
                  </li>
                  <div className="w-full bg-violet-100 rounded-3xl p-3 mt-2">
                    <div className="flex gap-2">
                      Abilities:
                      {
                        pokemonDetail?.abilities.map((ability) => (
                          <p>{`${ability.ability.name}`}</p>
                        ))
                      }
                    </div>
                    <p>{`Strength: ${pokemonDetail?.moves[0].move.name}`}</p>
                    <p>{`Height: ${pokemonDetail?.height}`}</p>
                    <p>{`Weight: ${pokemonDetail?.weight}`}</p>
                  </div>
                  <li className="text-base font-semibold mt-4">Statistic</li>
                  <div className="w-full bg-violet-100 rounded-3xl p-3 mt-2">
                    <p>{pokemonDetail?.stats[0].stat.name}</p>
                    <ProgressBar completed={pokemonDetail?.stats[0].base_stat} bgColor="#9f60c5" labelSize="12px" />
                    <p>{pokemonDetail?.stats[1].stat.name}</p>
                    <ProgressBar completed={pokemonDetail?.stats[1].base_stat} bgColor="#9f60c5" labelSize="12px" />
                    <p>{pokemonDetail?.stats[2].stat.name}</p>
                    <ProgressBar completed={pokemonDetail?.stats[2].base_stat} bgColor="#9f60c5" labelSize="12px" />
                    <p>{pokemonDetail?.stats[3].stat.name}</p>
                    <ProgressBar completed={pokemonDetail?.stats[3].base_stat} bgColor="#9f60c5" labelSize="12px" />
                    <p>{pokemonDetail?.stats[4].stat.name}</p>
                    <ProgressBar completed={pokemonDetail?.stats[4].base_stat} bgColor="#9f60c5" labelSize="12px" />
                    <p>{pokemonDetail?.stats[5].stat.name}</p>
                    <ProgressBar completed={pokemonDetail?.stats[5].base_stat} bgColor="#9f60c5" labelSize="12px" />
                  </div>
                  <li className="text-base font-semibold mt-4">Versions</li>
                  <div className="w-full gap-4 border-violet-100 border-2 rounded-3xl p-3 mt-2">
                    <p>Generation-I</p>
                    <div className="flex gap-5 mt-2">
                      <img src={pokemonDetail?.sprites?.versions['generation-i']?.['red-blue']?.front_default} alt="foto" />
                      <img src={pokemonDetail?.sprites?.versions['generation-i']?.yellow?.front_default} alt="foto" />
                    </div>
                  </div>
                  <div className="w-full gap-4 border-violet-100 border-2 rounded-3xl p-3 mt-2">
                    <p>Generation-II</p>
                    <div className="flex gap-5 mt-2">
                      <img src={pokemonDetail?.sprites?.versions['generation-ii']?.crystal?.front_default} alt="foto" />
                      <img src={pokemonDetail?.sprites?.versions['generation-ii']?.gold?.front_default} alt="foto" />
                      <img src={pokemonDetail?.sprites?.versions['generation-ii']?.silver?.front_default} alt="foto" />
                    </div>
                  </div>
                  <div className="w-full gap-4 border-violet-100 border-2 rounded-3xl p-3 mt-2">
                    <p>Generation-III</p>
                    <div className="flex gap-5 mt-2">
                      <img src={pokemonDetail?.sprites?.versions['generation-iii']?.emerald?.front_default} alt="foto" />
                      <img src={pokemonDetail?.sprites?.versions['generation-iii']?.['firered-leafgreen']?.front_default} alt="foto" />
                      <img src={pokemonDetail?.sprites?.versions['generation-iii']?.['ruby-sapphire']?.front_default} alt="foto" />
                    </div>
                  </div>
                  <div className="w-full gap-4 border-violet-100 border-2 rounded-3xl p-3 mt-2">
                    <p>Generation-IV</p>
                    <div className="flex gap-5 mt-2">
                      <img src={pokemonDetail?.sprites?.versions['generation-iv']?.['diamond-pearl']?.front_default} alt="foto" />
                      <img src={pokemonDetail?.sprites?.versions['generation-iv']?.['heartgold-soulsilver']?.front_default} alt="foto" />
                      <img src={pokemonDetail?.sprites?.versions['generation-iv']?.platinum?.front_default} alt="foto" />
                    </div>
                  </div>
                  <div className="w-full gap-4 border-violet-100 border-2 rounded-3xl p-3 mt-2">
                    <p>Generation-V</p>
                    <div className="flex gap-5 mt-2">
                      <img src={pokemonDetail?.sprites?.versions['generation-v']?.['black-white']?.animated?.front_default} alt="foto" />
                    </div>
                  </div>
                </ol>
              </div>
              <div className="flex w-full justify-center shadow-md bg-violet-400 hover:bg-violet-500 cursor-pointer p-2 rounded-3xl text-white">
                <button
                  type="button"
                  className="capitalize"
                  onClick={() => handleFavorite(pokemonDetail.id)}
                >
                  add to favorite
                </button>
              </div>
            </>
          )
        }
      </div>
    </div>
  );
}

export default DetailPage;
