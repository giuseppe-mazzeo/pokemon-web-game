// TODO - moves & descricao

class Pokemon {
    constructor() {
        this.id = 0;
        this.nivel = 0;
        this.visto = false;
        this.captura = false;

        this.hp_base = 0;
        this.atk_base = 0;
        this.dfs_base = 0;
        this.spc_atk_base = 0;
        this.spc_dfs_base = 0;
        this.spd_base = 0;

        this.tipagem = [];

        this.nome = "";
        this.sexo = "";
        this.shiny = false;

        this.peso = 0;
        this.altura = 0;

        this.experiencia_base = 0;

        this.todos_movimentos = [];
        this.movimentos_atuais = [];

        this.som_emitido = "";

        this.sprite_back = "";
        this.sprite_front = "";
        this.icone = "";
    }
}




function gerarNivelAleatorio() {
    return Math.floor(Math.random() * 100) + 1;
}


// M -> Macho
// F -> Fêmea
function gerarSexo() {
    return Math.random() < 0.5 ? "M" : "F";
}


function gerarShinyAleatorio() {
    return false;
}


function guardarInfoPokemon(dados) {
    const novoPokemon = new Pokemon();

    novoPokemon.id = dados.id;
    novoPokemon.nivel = gerarNivelAleatorio();

    novoPokemon.hp_base = dados.stats[0].base_stat;
    novoPokemon.atk_base = dados.stats[1].base_stat;
    novoPokemon.dfs_base = dados.stats[2].base_stat;
    novoPokemon.spc_atk_base = dados.stats[3].base_stat;
    novoPokemon.spc_dfs_base = dados.stats[4].base_stat;
    novoPokemon.spd_base = dados.stats[5].base_stat;

    const types = dados.types;
    novoPokemon.tipagem.length = types.length;
    for (let i = 0; i < types.length; i++) {
        novoPokemon.tipagem[i] = types[i].type.name;
    }
    
    novoPokemon.nome = dados.name;
    novoPokemon.sexo = gerarSexo();
    novoPokemon.shiny = gerarShinyAleatorio();

    novoPokemon.peso = dados.weight;
    novoPokemon.altura = dados.height;

    novoPokemon.experiencia_base = dados.base_experience;

    novoPokemon.todos_movimentos = dados.moves;
    novoPokemon.movimentos_atuais = ["1", "2", "3", "4"];

    novoPokemon.som_emitido = dados.cries.legacy;

    if (!novoPokemon.shiny) {
        novoPokemon.sprite_back = dados.sprites.versions['generation-v']['black-white'].animated.back_default;
        novoPokemon.sprite_front = dados.sprites.versions['generation-v']['black-white'].animated.front_default;
    } else {
        novoPokemon.sprite_back = dados.sprites.versions['generation-v']['black-white'].animated.back_shiny;
        novoPokemon.sprite_front = dados.sprites.versions['generation-v']['black-white'].animated.front_shiny;
    }
    novoPokemon.icone = `assets/pokemon/icons/${dados.id}.png`;

    return novoPokemon;
}


// https://pokeapi.co/api/v2/pokemon/1
export async function buscarPokemonAPI(idPokedex) {
    const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${idPokedex}`);

    if (!resposta.ok) {
        throw new Error("Erro na rede");
    }

    const dados = await resposta.json();

    return guardarInfoPokemon(dados);
}