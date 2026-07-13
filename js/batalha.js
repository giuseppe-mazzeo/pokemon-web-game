// pokemon atacar
// pokemon sofrer dano
// turno
// tipagem

export class Batalha {
    constructor(pkmJogador, pkmInimigo) {
        this.pkmJogador = pkmJogador;
        this.pkmInimigo = pkmInimigo;

        this.turnoAtual = 0;
        this.clima = "";

        this.jogadorComecaTurno = false;
        this.batalhaAcabou = false;
    }

    quemIniciaTurno() {
        if (this.pkmJogador.spd_base > this.pkmInimigo.spd_base) {
            this.jogadorComecaTurno = true;
        } else if (this.pkmJogador.spd_base < this.pkmInimigo.spd_base) {
            this.jogadorComecaTurno = false;
        } else {
            this.jogadorComecaTurno = (Math.random() < 0.5) ? true : false;
        }
    }


    turno(atacante, alvo, movimento) {
        exibirMensagem(`${atacante.nome} executou ${movimento.nome}`);

        if (executarAtaque(atacante, alvo, movimento)) {
            exibirMensagem(`${atacante.nome} derrotou ${alvo.nome}`);
            this.batalhaAcabou = true;
        }
    }


    iniciarTurno() {
        this.quemIniciaTurno();

        const movimentoJogador = this.pkmJogador.selecionarAtaque(0);
        const movimentoInimigo = this.pkmInimigo.selecionarAtaque(Math.floor(Math.floor(Math.random() * 4)));

        exibirMensagem(`Turno ${this.turnoAtual}`);

        if (this.jogadorComecaTurno) {
            this.turno(this.pkmJogador, this.pkmInimigo, movimentoJogador);

            if (!this.batalhaAcabou) {
                this.turno(this.pkmInimigo, this.pkmJogador, movimentoInimigo);
            }
        } else {
            this.turno(this.pkmInimigo, this.pkmJogador, movimentoInimigo);

            if (!this.batalhaAcabou) {
                this.turno(this.pkmJogador, this.pkmInimigo, movimentoJogador);
            }
        }
    }


    inicarBatalha() {
        exibirMensagem(`${this.pkmJogador.nome} encontrou-se com ${this.pkmInimigo.nome}`);

        while (!this.batalhaAcabou) {
            this.iniciarTurno();
            this.turnoAtual++;
        }

    }

}


function exibirMensagem(mensagem) {
    console.log(mensagem);
}


function executarAtaque(atacante, alvo, movimento) {
    if (movimento.pp <= 0) {
        return false;
    }

    const ataque = (movimento.fisico) ? atacante.atk_base : atacante.spc_atk_base;
    const defesa = (movimento.fisico) ? alvo.dfs_base : alvo.spc_dfs_base;

    const dano = Math.floor((((2 * atacante.nivel / 5 + 2) * movimento.dano * ataque / defesa) / 50) + 2);

    movimento.pp--;

    if (alvo.hp_base <= dano) {
        alvo.hp_base = 0;
        return true;
    }

    alvo.hp_base -= dano;
    return false;
}
