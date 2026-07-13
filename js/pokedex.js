import { criarPokemon } from './pokemon.js';
import { QUANTIDADE_POKEMONS } from './app.js';

const POKEDEX = [];



export async function carregarPokedex() { 
    for (let i = 1; i <= QUANTIDADE_POKEMONS; i++) {
        POKEDEX[i-1] = await criarPokemon(i);
        //console.log(`${POKEDEX[i-1].nome} criado!`);
    } 
    
    //console.log(POKEDEX);
}
