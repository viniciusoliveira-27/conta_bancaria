import readlinesync = require("readline-sync");
import { colors } from "./src/util/Cores";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";
import { ContaController } from "./src/controller/ContaController";


export function main() {

    let opcao, numero, agencia, tipo, saldo, limite, aniversario: number;
    let titular: string;
    const tipoContas = ['Conta Corrente', 'Conta Poupanca'];

    // Criando um objeto da classe ContaController
    const contas = new ContaController();

    //Novas Instâncias da Classe ContaCorrente (Objetos)
    contas.cadastrar(new ContaCorrente(contas.gerarNumero(), 1234, 1, 'Amanda Magro', 1000000.00, 100000.00));
    contas.cadastrar(new ContaCorrente(contas.gerarNumero(), 4578, 1, 'João da Silva', 1000.00, 100.00));
 
    // Novas Instâncias da Classe ContaPoupança (Objetos)
    contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), 5789, 2, "Geana Almeida", 10000, 10));
    contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), 5698, 2, "Jean Lima", 15000, 15));


    console.log("")
    do {
        console.log(colors.bg.purple, colors.fg.blackstrong)
        console.log("************************************************************")
        console.log("\n                   ViniBanks                            \n")
        console.log("************************************************************")
        console.log("               1 - Criar Conta                              ")
        console.log("               2 - Listar todas as Contas                   ")
        console.log("               3 - Buscar Conta por Numero                  ")
        console.log("               4 - Atualizar Dados da Conta                 ")
        console.log("               5 - Apagar Conta                             ")
        console.log("               6 - Sacar                                    ")
        console.log("               7 - Depositar                                ")
        console.log("               8 - Transferir valores entre Contas          ")
        console.log("               9 - Sair                                     ")
        console.log("\n************************************************************\n", colors.reset)
        opcao = readlinesync.questionInt("Digite a opcao desejada: ")

        if (opcao === 9) {
            about();
            process.exit(0)
        }

        switch (opcao) {
            case 1:
                console.log(`\ncolocar as cores aqui!\n`)
                console.log("Digite o número da Agência: ")
                agencia = readlinesync.questionInt('')

                console.log("Digite o Nome do titular: ")
                titular = readlinesync.question('')

                console.log("Escolha o Tipo da Conta: ")
                tipo = readlinesync.keyInSelect(tipoContas, "", {cancel: false}) + 1;

                console.log("Digite o Saldo da Conta: ")
                saldo = readlinesync.questionFloat('');

                switch(tipo) {
                    case 1:
                        console.log("Digite o Limite da Conta: ")
                        limite = readlinesync.questionFloat('');
                        contas.cadastrar(new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite))
                        break;
                    case 2:
                        console.log("Digite o aniversario da Conta: ")
                        aniversario = readlinesync.questionInt('');
                        contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular, saldo, aniversario))
                }
                keyPress();
                break;
            case 2:
                console.log(`\nTodas as contas: \n`)
                contas.listarTodas();
                keyPress();
                break;
            case 3:
                console.log(`\nFazendo Busca pelo Numero da conta...\n`)

                console.log(`Digite o numero da conta:`)
                numero = readlinesync.questionInt("")

                contas.procuraPorNumero(numero);


                keyPress();
                break;
            case 4:
                console.log(`\nConta Atualizada\n`)
                break;
                keyPress();
            case 5:
                console.log(`\nApagar conta!\n`)
                break;
                keyPress();
            case 6:
                console.log(`\nSaque!\n`)
                break;
                keyPress();
            case 7:
                console.log(`\nDeposito\n`)
                break;
                keyPress();
            case 8:
                console.log(`\nPIX!\n`)
                break;
                keyPress();
            case 9:
                break;

            default:
                console.log("Opcao invalida!")
        }

    } while (true)

}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}


function about() {
    console.log("\nSistema criado pelo desenvolvedor Vinicius Oliveira.\n")
}
main()