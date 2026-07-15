import { QUANTIDADE_MOVIMENTOS } from "./app.js";

class Movimento {
    constructor() {
        this.id = 0;

        this.nome = "";
        this.tipagem = "";
        this.dano = 0;
        this.pp = 0;
        this.precisao = 0;
        this.prioridade = 0;
        this.fisico = false;

        this.descricao = "";
    }
}


export let TODOS_MOVIMENTOS = [];


function guardarInfoMovimento(dados) {
    const movimento = new Movimento();

    movimento.id = dados.id;
    movimento.nome = dados.name;
    movimento.tipagem = dados.type.name;
    movimento.dano = dados.power;
    movimento.pp = dados.pp;
    movimento.precisao = dados.accuracy;
    movimento.prioridade = dados.priority;
    movimento.fisico = (dados["damage_class"].name) ? true : false;

    try {
        movimento.descricao = dados["flavor_text_entries"][1]["flavor_text"].replace(/[\n\f]/g, " ").replace(/\s+/g, " ").trim();
    } catch {
        movimento.descricao = "..."
    }

    return movimento;
}


// https://pokeapi.co/api/v2/move/24/
export async function buscarMovimentosAPI() {
    
    const cache = localStorage.getItem("TODOS_MOVIMENTOS");

    if (cache) {
        TODOS_MOVIMENTOS = JSON.parse(cache);

        if (TODOS_MOVIMENTOS.length === QUANTIDADE_MOVIMENTOS+1) {
            return;
        }
        
        localStorage.removeItem("TODOS_MOVIMENTOS");
        TODOS_MOVIMENTOS = [];
    }

    

    for (let i = 1; i <= QUANTIDADE_MOVIMENTOS; i++) {
        const resposta = await fetch(`https://pokeapi.co/api/v2/move/${i}/`);

        if (!resposta.ok) {
            throw new Error("Erro na rede");
        }

        const dados = await resposta.json();

        TODOS_MOVIMENTOS[i] = guardarInfoMovimento(dados);

        console.log(`${TODOS_MOVIMENTOS[i].id} - ${TODOS_MOVIMENTOS[i].nome} criado!`);
    }

    localStorage.setItem("TODOS_MOVIMENTOS", JSON.stringify(TODOS_MOVIMENTOS));
}
