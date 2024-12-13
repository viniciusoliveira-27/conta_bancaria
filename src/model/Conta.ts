export abstract class Conta{

    //definição do modelo de dados (esses são os atributos da conta)
    private _numero: number;
    private _agencia: number;
    private _tipo: number;
    private _titular: string;
    private _saldo: number;

    // Gerar o metodo construtor
	constructor(numero: number, agencia: number, tipo: number, titular: string, saldo: number) {
		this._numero = numero;
		this._agencia = agencia;
		this._tipo = tipo;
		this._titular = titular;
		this._saldo = saldo;
	}

    //Gerar os metodos Getter's e Setter's

	public get numero(): number {
		return this._numero;
	}

	public get agencia(): number {
		return this._agencia;
	}

	public get tipo(): number {
		return this._tipo;
	}

	public get titular(): string {
		return this._titular;
	}

	public get saldo(): number {
		return this._saldo;
	}


    //Setters
	public set numero(value: number) {
		this._numero = value;
	}

	public set agencia(value: number) {
		this._agencia = value;
	}

	public set tipo(value: number) {
		this._tipo = value;
	}

	public set titular(value: string) {
		this._titular = value;
	}

	public set saldo(value: number) {
		this._saldo = value;
	}

    //Metodo Sacar
    public sacar(valor: number): boolean {
        if(valor > this._saldo){
            console.log("Saldo Insuficiente!")
            return false;
        }

        this._saldo -= valor
        return true;
    }

    //Metodo depositar
    public depositar(valor: number) {
        this._saldo += valor
    }


    //metodo para visualizar os dados do objeto
    public visualizar() {
        let tipo: string;

        switch(this._tipo) {
            case 1:
                tipo = "Conta corrente"
                break;
            case 2:
                tipo = "Conta Poupança"
                break;
            default:
                tipo = "Tipo de conta Invalida"
        }
        console.log("************************************")
        console.log("\n         Dados da Conta\n")
        console.log("************************************\n")
        console.log(`Numero da Conta: ${this._numero}`)
        console.log(`Numero da Agencia: ${this._agencia}`)
        console.log(`Tipo da Conta: ${tipo}`)
        console.log(`Nome do Titular da Conta: ${this._titular}`)
        console.log(`Saldo da Conta: ${this._saldo}\n`)
    }
}