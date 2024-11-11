import axios from 'axios';

const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
});

export const fetchPokemons = async () => {
    const response = await api.get('pokemon?limit=151');
    return response.data.results;
};