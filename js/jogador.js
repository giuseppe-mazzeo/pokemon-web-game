import { Temporizador } from "./temporizador.js";
import { Inventario } from "./inventario.js";

class Jogador {
    constructor() {
        this.nome = "";
        this.sexo = "";

        this.dinheiro = 1000;
        this.inventario = new Inventario();
        
        this.equipe = [];

        this.duracao_jogo = new Temporizador();
        this.pokedex = [];

        this.sprite_back = "";
        this.sprite_left = "";
        this.sprite_right = "";
        this.sprite_front = "";
    }
}



function criarJogador(nome, sexo) {
    const novoJogador = new Jogador();

    novoJogador.nome = nome;
    novoJogador.sexo = sexo;

    novoJogador.sprite_back = "";
    novoJogador.sprite_left = "";
    novoJogador.sprite_right = "";
    novoJogador.sprite_front = "";

    novoJogador.duracao_jogo.iniciar();

    return novoJogador;
}
