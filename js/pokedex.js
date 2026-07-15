import { criarPokemon } from './pokemon.js';
import { QUANTIDADE_POKEMONS } from './app.js';

let POKEDEX = [];



export async function carregarPokedex() { 
    const cache = localStorage.getItem("POKEDEX");

    if (cache) {
        POKEDEX = JSON.parse(cache);

        if (POKEDEX.length === QUANTIDADE_POKEMONS) {
            return;
        }

        localStorage.removeItem("POKEDEX");
        POKEDEX = [];
    }

    for (let i = 1; i <= QUANTIDADE_POKEMONS; i++) {
        POKEDEX[i-1] = await criarPokemon(i);
        console.log(`${POKEDEX[i-1].nome} criado!`);
    }

    localStorage.setItem("POKEDEX", JSON.stringify(POKEDEX));
}
