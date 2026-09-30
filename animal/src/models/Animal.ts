import { AnimalProps } from "../interface/AnimalProps.js";

// A classe recebe o Generic <T> para entender as propriedades das classes filhas
export class Animal<T extends AnimalProps = AnimalProps> {

    // O 'protected' permite que as filhas enxerguem o objeto 'props'
    constructor(protected props: T) {}

    public get getNomePaciente(): string { return this.props.nomePaciente; }
    public get getNomeTutor(): string { return this.props.nomeTutor; }
    public get getPesoKG(): number { return this.props.pesoKG; }

    public set setNomePaciente(novoNomePaciente: string) {
        if (novoNomePaciente.trim().length === 0) {
            console.log("\n ERRO: O campo não pode ser vazio!");
            return;
        }
        this.props.nomePaciente = novoNomePaciente;
    }

    public set setNomeTutor(novoNomeTutor: string) {
        if (novoNomeTutor.trim().length === 0) {
            console.log("\n ERRO: O campo não pode ser vazio!");
            return;
        }
        this.props.nomeTutor = novoNomeTutor;
    }

    public set setPesoKG(novoPesoKG: number) {
        if (!novoPesoKG) {
            console.log("\n ERRO: O campo não pode ser vazio!");
            return;
        }
        this.props.pesoKG = novoPesoKG;
    }
}