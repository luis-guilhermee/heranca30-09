import { Conta } from "./Conta.js";
import { ContaCorrenteProps } from "../interface/ContaProps.js";

// Passamos ContaCorrente para o Generic da classe mãe
export class ContaCorrente extends Conta<ContaCorrenteProps>{

    constructor(props: ContaCorrenteProps) {
        super(props); // Repassa o objeto inteiro para a mãe de uma vez só
    }

    public get getLimiteChequeEspecial(): number { return this.props.limiteChequeEspecial; }

    public set setLimiteChequeEspecial(novoLimiteChequeEspecial: number) {
        if (!novoLimiteChequeEspecial) {
            console.log("\n ERRO: O campo não pode ser vazio!");
            return;
        }
        this.props.limiteChequeEspecial = novoLimiteChequeEspecial;
    }
}