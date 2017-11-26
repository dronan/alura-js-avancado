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
		let data = new Date(this._inputData.value.replace(/-/g, ',')); // outra forma é dar um replace no hífen por virgula

		let negociacao = new Negociacao(
				data,
				this._inputQuantidade.value,
				this._inputValor.value
				);

	}

}