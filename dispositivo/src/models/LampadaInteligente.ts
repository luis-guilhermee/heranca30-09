import { Dispositivo } from "./Dispositivo.js";
import { LampadaInteligenteProps } from "../interface/DispositivoProps.js";

// Passamos LampadaInteligente para o Generic da classe mãe
export class LampadaInteligente extends Dispositivo<LampadaInteligenteProps>{

    constructor(props: LampadaInteligenteProps) {
        super(props); // Repassa o objeto inteiro para a mãe de uma vez só
    }

    public get getCorHexadecimal(): string { return this.props.corHexadecimal; }
    public get getNivelBrilho(): number { return this.props.nivelBrilho; }

    public set setCorHexadecimal(novaCorHexadecimal: string) {
        if (novaCorHexadecimal.trim().length === 0) {
            console.log("\n ERRO: O campo não pode ser vazio!");
            return;
        }
        this.props.corHexadecimal = novaCorHexadecimal;
    }
    public set setNivelBrilho(novoNivelBrilho: number) {
        if (!novoNivelBrilho) {
            console.log("\n ERRO: O campo não pode ser vazio!");
            return;
        }
        this.props.nivelBrilho = novoNivelBrilho;
    }
}