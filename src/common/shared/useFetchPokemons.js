import { useEffect, useState } from 'react';
import { pokemonsAPI } from '../../api/pokemons';

export const useFetchPokemons = () => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getPokemons = async () => {
      setError(false);
      setLoading(true);

      try {
        const res = await pokemonsAPI.getPokemons();
        setResponse(res.data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getPokemons();
  }, []);

  return [response, loading, error];
};
