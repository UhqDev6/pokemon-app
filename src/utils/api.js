const api = (() => {
  const BASE_URL = 'https://pokeapi.co/api/v2';

  const getAllPokemon = async (limit = 50) => {
    try {
      const response = await fetch(`${BASE_URL}/pokemon`);
      const responseJson = await response.json();

      const result = responseJson.results.map(async (pokemon) => {
        const res = await fetch(pokemon.url);
        const dataRes = await res.json();
        return dataRes;
      });
      const results = await Promise.all(result);
      console.log(results);
      return results;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const getDetailPokemon = async (id) => {
    const response = await fetch(`${BASE_URL}/pokemon/${id}`, {
      method: 'GET',
    });
    const responseJson = await response.json();
    return responseJson;
  };

  return {
    getAllPokemon,
    getDetailPokemon,
  };
})();

export default api;
