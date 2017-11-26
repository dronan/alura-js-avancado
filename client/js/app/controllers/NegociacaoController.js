/**
Comunicacoes entre o usuario e o modelo
**/
class NegociacaoController {

	constructor() {
		
		let $ = document.querySelector.bind(document);

		this.inputData = $("#data");
		this.inputQuantidade = $("#quantidade");
		this.inputValor = $("#valor");
	}

	adiciona(event){
		event.preventDefault();
		console.log(this.inputData.value);

	}

}