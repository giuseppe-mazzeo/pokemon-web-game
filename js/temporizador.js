export class Temporizador {
    constructor() {
        this.segundos = 0;
        this.minutos = 0;
        this.horas = 0;

        this.timer = null;
    }

    iniciar() {
        if (this.timer !== null) return;

        this.timer = setInterval(() => {
            ++this.segundos;
            if (this.segundos === 60) {
                this.segundos = 0;
                this.minutos++;
                if (this.minutos === 60) {
                    this.minutos = 0;
                    this.horas++;
                }
            };
        }, 1000);
    }

    pausar() {
        clearInterval(this.timer);
        this.timer = null;
    }

    obterTempo() {
        return `${this.horas}h ${this.minutos}min ${this.segundos}s`
    }
}