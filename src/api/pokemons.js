import axios from 'axios';

export const pokemonsAPI = {
  getPokemons() {
    return axios.get('https://gabbyapp.com/pockemons/data.json');
  },
};
