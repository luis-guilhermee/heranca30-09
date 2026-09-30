import { Animal } from "./Animal.js";
import { CachorroProps } from "../interface/AnimalProps.js";

// Passamos Cachorro para o Generic da classe mãe
export class Cachorro extends Animal<CachorroProps>{

    constructor(props: CachorroProps) {
        super(props); // Repassa o objeto inteiro para a mãe de uma vez só
    }

    public get getPorte(): string { return this.props.porte; }
    public get getPrecisaTosa(): boolean { return this.props.precisaTosa; }

    public set setPorte(novaPorte: string) {
        if (novaPorte.trim().length === 0) {
            console.log("\n ERRO: O campo não pode ser vazio!");
            return;
        }
        this.props.porte = novaPorte;
    }
    public set setPrecisaTosa(novoPrecisaTosa: boolean) {
        if (novoPrecisaTosa === null || novoPrecisaTosa === undefined) {
            console.log("\n ERRO: O campo não pode ser vazio!");
            return;
        }
        this.props.precisaTosa = novoPrecisaTosa;
    }
}