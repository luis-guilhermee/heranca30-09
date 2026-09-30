import readLine from "readline-sync";
import { Termostato } from "./src/models/Termostato.js";

console.log("=== CADASTRO DE TERMOSTATO ===");

// Instanciando usando o objeto de propriedades (Interface)
const novoTermostato = new Termostato({
    idRede: "123456",
    nomeLocal: "Sala de Estar",
    isLigado: true,
    temperaturaAtual: 22,
    temperaturaAlvo: 25
});

console.log(`\nTERMOSTATO cadastrado: ${novoTermostato.getTemperaturaAtual}`);
console.log(`Temperatura Alvo: ${novoTermostato.getTemperaturaAlvo}`);

// Interação via teclado utilizando herança (Os setters continuam funcionando perfeitamente)
novoTermostato.setTemperaturaAtual = readLine.questionInt("\nDigite a temperatura atualizada do Termostato: ");
novoTermostato.setTemperaturaAlvo = readLine.questionInt("\nDigite a temperatura alvo atualizada do Termostato: ");

// Exibindo TODOS os dados do TERMOSTATO no final
console.log("\n================================================");
console.log("           DADOS COMPLETOS DO TERMOSTATO        ");
console.log("================================================");
// Dados herdados da classe Dispositivo
console.log(`ID da Rede:           ${novoTermostato.getIdRede}`);
console.log(`Nome do Local:        ${novoTermostato.getNomeLocal}`);
console.log(`Está Ligado:          ${novoTermostato.getIsLigado}`);
// Dados específicos da classe Termostato
console.log(`Temperatura Atual:    ${novoTermostato.getTemperaturaAtual}`);
console.log(`Temperatura Alvo:     ${novoTermostato.getTemperaturaAlvo}`);
console.log("================================================\n");