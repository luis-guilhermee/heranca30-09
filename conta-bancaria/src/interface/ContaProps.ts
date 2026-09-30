// Interface Base
export interface ContaProps {
    numeroConta: string;
    titular: string;
    saldo: number;
}

export interface ContaCorrenteProps extends ContaProps {
    limiteChequeEspecial: number;
}

export interface ContaPoupancaProps extends ContaProps {
    taxaRendimentoMensal: number;
}