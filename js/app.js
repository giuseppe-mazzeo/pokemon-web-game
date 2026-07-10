import { TODOS_MOVIMENTOS, buscarMovimentosAPI } from "./movimentos.js";
import { carregarPokedex } from "./pokedex.js";

export const QUANTIDADE_POKEMONS = 2; //151
export const QUANTIDADE_MOVIMENTOS = 919; //919



async function carregarBancoMovimentos() {
    await buscarMovimentosAPI();
}

async function carregarBancoPokemons() {
    await carregarPokedex();
}



async function iniciarJogo() {
    await carregarBancoMovimentos();
    await carregarBancoPokemons();
}



iniciarJogo();