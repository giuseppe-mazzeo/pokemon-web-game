import { buscarPokemonAPI } from './pokemon.js';
import { QUANTIDADE_POKEMONS } from './app.js';

const pokedex = [];

for(let i = 1; i <= QUANTIDADE_POKEMONS; i++) {
    //pokedex[i-1] = await buscarPokemonAPI(i);
    //console.log(`${pokedex[i-1].nome} criado!`);   
}
