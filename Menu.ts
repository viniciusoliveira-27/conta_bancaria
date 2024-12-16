import readlinesync = require("readline-sync");
import { colors } from "./src/util/Cores";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";
import { ContaController } from "./src/controller/ContaController";


export function main() {

    let opcao, numero, agencia, tipo, saldo, limite, aniversario, numeroDestino, valor: number;
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
        console.log("               8 - PIX entre Contas                         ")
        console.log("               9 - Buscar por Nome do Titular               ")
        console.log("               0 - Sair                                     ")
        console.log("\n************************************************************\n", colors.reset)
        opcao = readlinesync.questionInt("Digite a opcao desejada: ")

        if (opcao === 0) {
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
                tipo = readlinesync.keyInSelect(tipoContas, "", { cancel: false }) + 1;

                console.log("Digite o Saldo da Conta: ")
                saldo = readlinesync.questionFloat('');

                switch (tipo) {
                    case 1:
                        console.log("Digite o Limite da Conta: ")
                        limite = readlinesync.questionFloat('');
                        contas.cadastrar(new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite))
                        break;
                    case 2:
                        console.log("Digite o aniversario da Conta: ")
                        aniversario = readlinesync.questionInt('');
                        contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular, saldo, aniversario))
                        break;
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
                console.log(`\nAtualização da Conta!\n`)

                console.log(`Digite o numero da conta:`)
                numero = readlinesync.questionInt("")

                let conta = contas.buscarNoArray(numero)

                if (conta !== null) {

                    console.log("Digite o novo número da Agência: ")
                    agencia = readlinesync.questionInt('')

                    console.log("Digite o novo Nome do titular: ")
                    titular = readlinesync.question('')

                    console.log("Digite o novo Saldo da Conta: ")
                    saldo = readlinesync.questionFloat('');

                    tipo = conta.tipo;

                    switch (tipo) {
                        case 1:
                            console.log("Digite o novo Limite da Conta: ")
                            limite = readlinesync.questionFloat('');
                            contas.atualizar(new ContaCorrente(numero, agencia, tipo, titular, saldo, limite))
                            break;
                        case 2:
                            console.log("Digite o novo dia do aniversario da Conta: ")
                            aniversario = readlinesync.questionInt('');
                            contas.atualizar(new ContaPoupanca(numero, agencia, tipo, titular, saldo, aniversario))
                            break;
                    }

                } else {
                    console.log("Conta não encontrada!")
                }

                keyPress();
                break;

            case 5:
                console.log(`\nApagar conta!\n`)

                console.log(`Digite o numero da conta:`)
                numero = readlinesync.questionInt("")

                contas.deletar(numero)

                keyPress();
                break;

            case 6:
                console.log(`\nSaque!\n`)

                console.log(`Digite o numero da conta:`)
                numero = readlinesync.questionInt("")

                console.log(`Digite o valor do Saque:`)
                valor = readlinesync.questionInt("")

                contas.sacar(numero, valor)

                keyPress();
                break;
            case 7:
                console.log(`\nDeposito\n`)

                console.log(`Digite o numero da conta origem:`)
                numero = readlinesync.questionInt("")

                console.log(`Digite o valor do Deposito:`)
                valor = readlinesync.questionInt("")

                contas.depositar(numero, valor)

                keyPress();
                break;
            case 8:
                console.log(`\nPIX!\n`)

                console.log(`Digite o numero da conta origem:`)
                numero = readlinesync.questionInt("")

                console.log(`Digite o numero da conta destino:`)
                numeroDestino = readlinesync.questionInt("")

                console.log(`Digite o valor do PIX:`)
                valor = readlinesync.questionInt("")

                contas.transferir(numero, numeroDestino, valor);

                keyPress();
                break;
            case 9:

                console.log("\nDigite o nome do titular: ")
                titular = readlinesync.question("")
                contas.procurarPorTitular(titular);

                keyPress()
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