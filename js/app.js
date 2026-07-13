import { TODOS_MOVIMENTOS, buscarMovimentosAPI } from "./movimentos.js";
import { carregarPokedex } from "./pokedex.js";
import { criarJogador } from "./jogador.js";
import { Batalha } from "./batalha.js";
import { criarPokemon } from "./pokemon.js";

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

    const jogador1 = criarJogador("Jog1", "M");
    jogador1.adicionarNaEquipe(await criarPokemon(1));
    const jogador2 = criarJogador("Jog2", "f");
    jogador2.adicionarNaEquipe(await criarPokemon(4));

    const batalha = new Batalha(jogador1.pokemonInicialBatalha(), jogador2.pokemonInicialBatalha());
    
    batalha.inicarBatalha();

    console.log(jogador1.pokemonInicialBatalha());
    console.log(jogador2.pokemonInicialBatalha());
    

}



iniciarJogo();