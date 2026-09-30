import { TermostatoProps } from "../interface/DispositivoProps.js";
import { Dispositivo } from "./Dispositivo.js";

// Passamos Termostato para o Generic da classe mãe
export class Termostato extends Dispositivo<TermostatoProps>{

    constructor(props: TermostatoProps) {
        super(props); // Repassa o objeto inteiro para a mãe de uma vez só
    }

    public get getTemperaturaAtual(): number { return this.props.temperaturaAtual; }
    public get getTemperaturaAlvo(): number { return this.props.temperaturaAlvo; }

    public set setTemperaturaAtual(novoTemperaturaAtual: number) { 
        if (!novoTemperaturaAtual) {
            console.log("\n ERRO: O campo não pode ser vazio!");
            return;
        }
        this.props.temperaturaAtual = novoTemperaturaAtual;
    }
    public set setTemperaturaAlvo(novoTemperaturaAlvo: number) {
        if (!novoTemperaturaAlvo) {
            console.log("\n ERRO: O campo não pode ser vazio!");
            return;
        }
        this.props.temperaturaAlvo = novoTemperaturaAlvo;
    }
}