const api = (() => {
  const BASE_URL = 'https://pokeapi.co/api/v2';

  const getAllPokemon = async () => {
    try {
      const response = await fetch(`${BASE_URL}/pokemon`);
      const responseJson = await response.json();

      const result = responseJson.results.map(async (pokemon) => {
        const res = await fetch(pokemon.url);
        const dataRes = await res.json();
        return dataRes;
      });
      const results = await Promise.all(result);
      return results;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const getDetailPokemon = async (id) => {
    const response = await fetch(`${BASE_URL}/pokemon/${id}`, {
      method: 'GET',
    });
    const data = await response.json();
    return data;
  };

  return {
    getAllPokemon,
    getDetailPokemon,
  };
})();

export default api;
