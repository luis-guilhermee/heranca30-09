import readLine from "readline-sync";
import { Cachorro } from "./src/models/Cachorro.js";

console.log("=== CADASTRO DE CACHORRO ===");

// Instanciando usando o objeto de propriedades (Interface)
const novoCachorro = new Cachorro({
    nomePaciente: "Pip  er",
    nomeTutor: "Carlos Silva",
    pesoKG: 20,
    porte: "grande",
    precisaTosa: true
});

console.log(`\nCACHORRO cadastrado: ${novoCachorro.getNomeTutor}`);
console.log(`Porte: ${novoCachorro.getPorte}`);
console.log(`PrecisaTosa: ${novoCachorro.getPrecisaTosa}`);

// Interação via teclado utilizando herança (Os setters continuam funcionando perfeitamente)
novoCachorro.setNomeTutor = readLine.question("\nDigite o nome do tutor atualizado do Cachorro: ");
novoCachorro.setPorte = readLine.question("\nDigite o porte atualizado do Cachorro: ");

// Exibindo TODOS os dados do CACHORRO no final
console.log("\n================================================");
console.log("           DADOS COMPLETOS DO CACHORRO          ");
console.log("================================================");
// Dados herdados da classe PessoaFisica
console.log(`nomePaciente:     ${novoCachorro.getNomePaciente}`);
console.log(`nomeTutor:        ${novoCachorro.getNomeTutor}`);
console.log(`pesoKG:           ${novoCachorro.getPesoKG}`);
// Dados específicos da classe Cachorro
console.log(`Porte:            ${novoCachorro.getPorte}`);
console.log(`PrecisaTosa:      ${novoCachorro.getPrecisaTosa}`);
console.log("================================================\n");