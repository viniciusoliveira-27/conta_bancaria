import readlinesync = require("readline-sync");
import { colors } from "./src/util/Cores";

let opcao: number

do {

    menu();
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


function menu(): void {
    console.log(colors.bg.whitebright, colors.fg.blackstrong)
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

}
function about() {
    console.log("\nCriado por Vinicius\n")
}