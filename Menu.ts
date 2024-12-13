import readlinesync = require("readline-sync");
import { colors } from "./src/util/Cores";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";

let opcao: number

export function main() {

    //Contas correntes
    // const cc1 = new ContaCorrente(3, 789, 1, "Galega", 200000, 1000);
    // cc1.visualizar();
    // //Saque na CC
    // cc1.sacar(200500);
    // cc1.visualizar();

    // //Deposito na CC
    // cc1.depositar(1000);
    // cc1.visualizar();

    const cp1 = new ContaPoupanca(3, 7895, 2, "Galega", 200000, 27);
    cp1.visualizar();
    //Saque na Conta Poupança
    cp1.sacar(200);
    cp1.visualizar();

    //Deposito na Conta Poupança
    cp1.depositar(1000);
    cp1.visualizar();

    console.log("")
    do {
        console.log(colors.bg.orange, colors.fg.blackstrong)
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
                console.log(`\nConta criada com Sucesso!\n`)

                break;
            case 2:
                console.log(`\nTodas as contas: \n`)

                break;
            case 3:
                console.log(`\nFazendo Busca pelo Numero da conta...\n`)

                break;
            case 4:
                console.log(`\nConta Atualizada\n`)
                break;

            case 5:
                console.log(`\nApagar conta!\n`)
                break;

            case 6:
                console.log(`\nSaque!\n`)
                break;

            case 7:
                console.log(`\nDeposito\n`)
                break;

            case 8:
                console.log(`\nPIX!\n`)
                break;

            case 9:
                break;

            default:
                console.log("Opcao invalida!")
        }

    } while (true)

} 
function about() {
    console.log("\nSistema criado pelo desenvolvedor Vinicius Oliveira.\n")
}
main()