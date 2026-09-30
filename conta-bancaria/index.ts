import readLine from "readline-sync";
import { ContaCorrente } from "./src/models/ContaCorrente.js";

console.log("=== CADASTRO DE CONTA CORRENTE ===");

// Instanciando usando o objeto de propriedades (Interface)
const novoContaCorrente = new ContaCorrente({
    numeroConta: "111.222.333-44",
    titular: "Carlos Silva",
    saldo: 200000000000000000000000000000000000000000,
    limiteChequeEspecial: 20000
});

console.log(`\nCONTA CORRENTE cadastrada: ${novoContaCorrente.getTitular}`);
console.log(`LimiteChequeEspecial: ${novoContaCorrente.getLimiteChequeEspecial}`);

// Interação via teclado utilizando herança (Os setters continuam funcionando perfeitamente)
novoContaCorrente.setTitular = readLine.question("\nDigite o titular atualizado do ContaCorrente: ");
novoContaCorrente.setLimiteChequeEspecial = readLine.questionInt("Digite o novo limite cheque especial: ");

// Exibindo TODOS os dados do CONTA CORRENTE no final
console.log("\n================================================");
console.log("        DADOS COMPLETOS DO CONTA CORRENTE       ");
console.log("================================================");
// Dados herdados da classe PessoaFisica
console.log(`numeroConta:                 ${novoContaCorrente.getNumeroConta}`);
console.log(`titular:                     ${novoContaCorrente.getTitular}`);
console.log(`saldo:                       ${novoContaCorrente.getSaldo}`);
// Dados específicos da classe ContaCorrente
console.log(`LimiteChequeEspecial:        ${novoContaCorrente.getLimiteChequeEspecial}`);
console.log("================================================\n");