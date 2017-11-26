/**
Comunicacoes entre o usuario e o modelo
**/
class NegociacaoController {

	constructor() {
		
		let $ = document.querySelector.bind(document);

		this._inputData = $("#data");
		this._inputQuantidade = $("#quantidade");
		this._inputValor = $("#valor");
	}

	adiciona(event){
		event.preventDefault();

		//let data = new Date(this._inputData.value.split('-')); // O construtor de data aceita um array como valor
		//let data = new Date(this._inputData.value.replace(/-/g, ',')); // outra forma é dar um replace no hífen por virgula

		// outra forma é fazer um mapa a partir da array, subtrair 1 do segundo numero para não dar problema em um 12-11-2016, para não ser entendido como dezembro, e o construtor da data receber a data formatada corretamente
		let data = new Date(
							...this._inputData.value
											.split("-")
											.map((item, indice) => item - indice % 2) // arrow function, e ainda em uma linha, posso omitir o return e as chaves
			)

		let negociacao = new Negociacao(
				data,
				this._inputQuantidade.value,
				this._inputValor.value
				);

		console.log(negociacao);

	}

}