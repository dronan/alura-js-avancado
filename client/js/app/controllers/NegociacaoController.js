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

		let negociacao = new Negociacao(
				DateHelper.textoParaData(this._inputData.value),
				this._inputQuantidade.value,
				this._inputValor.value
				);

		let diaMesAno = DateHelper.dataParaTexto(negociacao.data);


	}

}