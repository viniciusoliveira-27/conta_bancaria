import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";

export class ContaController implements ContaRepository{

    // Coleção Array que vai armazenar os objetos Conta (simulando o BD)
    private listaContas = new Array<Conta>();

    // Controlas os numeros das contas
    public numero: number = 0;

    procuraPorNumero(numero: number): void {
        const buscaConta = this.buscarNoArray(numero);

        if (buscaConta !== null)
            buscaConta.visualizar()
        else
            console.log("\nConta não encontrada")
    }

    listarTodas(): void {
        for(let conta of this.listaContas) {
            conta.visualizar();
        }
    }

    public cadastrar(conta: Conta): void {
        this.listaContas.push(conta);
        console.log("A Conta foi cadastrada com sucesso")
    }

    atualizar(conta: Conta): void {
        const buscaConta = this.buscarNoArray(conta.numero);

        if (buscaConta !== null) {
            this.listaContas[this.listaContas.indexOf(buscaConta)] = conta;
            console.log("A conta foi atualizada com sucesso!");
        }else
            console.log("\nConta não encontrada")
    }

    deletar(numero: number): void {
        const buscaConta = this.buscarNoArray(numero);

        if (buscaConta !== null) {
            this.listaContas.splice(this.listaContas.indexOf(buscaConta), 1);
            console.log("A conta foi deletada com sucesso!");
        }else
            console.log("\nConta não encontrada")
    }

    sacar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }

    depositar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }

    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        throw new Error("Method not implemented.");
    }

    //metodos auxiliares

    public gerarNumero(): number{
        return  ++this.numero;
    }

    public buscarNoArray(numero: number): Conta | null{
        for(let conta of this.listaContas) {
            if (conta.numero === numero)
                return conta;
        }

        return null;
    }
}