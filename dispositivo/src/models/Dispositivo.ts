import { DispositivoProps } from "../interface/DispositivoProps.js";

// A classe recebe o Generic <T> para entender as propriedades das classes filhas
export class Dispositivo<T extends DispositivoProps = DispositivoProps> {

    // O 'protected' permite que as filhas enxerguem o objeto 'props'
    constructor(protected props: T) {}

    public get getIdRede(): string { return this.props.idRede; }
    public get getNomeLocal(): string { return this.props.nomeLocal; }
    public get getIsLigado(): boolean { return this.props.isLigado; }

    public set setIdRede(novoIdRede: string) {
        if (novoIdRede.trim().length === 0) {
            console.log("\n ERRO: O campo não pode ser vazio!");
            return;
        }
        this.props.idRede = novoIdRede;
    }

    public set setNomeLocal(novoNomeLocal: string) {
        if (novoNomeLocal.trim().length === 0) {
            console.log("\n ERRO: O campo não pode ser vazio!");
            return;
        }
        this.props.nomeLocal = novoNomeLocal;
    }

    public set setIsLigado(novoIsLigado: boolean) {
        if (novoIsLigado === null || novoIsLigado === undefined) {
            console.log("\n ERRO: O campo não pode ser vazio!");
            return;
        }
        this.props.isLigado = novoIsLigado;
    }
}