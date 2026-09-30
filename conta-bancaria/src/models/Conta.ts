import { ContaProps } from "../interface/ContaProps.js";

// A classe recebe o Generic <T> para entender as propriedades das classes filhas
export class Conta<T extends ContaProps = ContaProps> {

    // O 'protected' permite que as filhas enxerguem o objeto 'props'
    constructor(protected props: T) {}

    public get getNumeroConta(): string { return this.props.numeroConta; }
    public get getTitular(): string { return this.props.titular; }
    public get getSaldo(): number { return this.props.saldo; }

    public set setNumeroConta(novoNumeroConta: string) {
        if (novoNumeroConta.trim().length === 0) {
            console.log("\n ERRO: O campo não pode ser vazio!");
            return;
        }
        this.props.numeroConta = novoNumeroConta;
    }

    public set setTitular(novoTitular: string) {
        if (novoTitular.trim().length === 0) {
            console.log("\n ERRO: O campo não pode ser vazio!");
            return;
        }
        this.props.titular = novoTitular;
    }

    public set setSaldo(novoSaldo: number) {
        if (!novoSaldo) {
            console.log("\n ERRO: O campo não pode ser vazio!");
            return;
        }
        this.props.saldo = novoSaldo;
    }
}