import { Conta } from "./Conta.js";
import { ContaPoupancaProps } from "../interface/ContaProps.js";

// Passamos ContaPoupanca para o Generic da classe mãe
export class ContaPoupanca extends Conta<ContaPoupancaProps>{

    constructor(props: ContaPoupancaProps) {
        super(props); // Repassa o objeto inteiro para a mãe de uma vez só
    }

    public get getTaxaRendimentoMensal(): number { return this.props.taxaRendimentoMensal; }

    public set setTaxaRendimentoMensal(novaTaxaRendimentoMensal: number) {
        if (!novaTaxaRendimentoMensal) {
            console.log("\n ERRO: O campo não pode ser vazio!");
            return;
        }
        this.props.taxaRendimentoMensal = novaTaxaRendimentoMensal;
    }
}