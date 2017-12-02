/**
Comunicacoes entre o usuario e o modelo
**/
class NegociacaoController {

	constructor() {
		
		let $ = document.querySelector.bind(document);

		this._inputData = $("#data");
		this._inputQuantidade = $("#quantidade");
		this._inputValor = $("#valor");

		this._listaNegociacoes = new ListaNegociacoes(function(model){
			this._negociacoesView.update(model); // quando chamar a lista, o update da lista tambem sera acionado
		});
		
		this._negociacoesView = new NegociacoesView($('#negociacoesView'));
		this._negociacoesView.update(this._listaNegociacoes); // a view recebe o model para carregar a tabela

		this._mensagem = new Mensagem();
		this._mensagemView = new MensagemView($('#mensagemView'));
		this._mensagemView.update(this._mensagem);
	}

	adiciona(event){
		event.preventDefault();

		this._listaNegociacoes.adiciona(this._criaNegociacao());

		// O update pode ser omitido a partir do momento que foi repassado para o construtor da listaNegociacoes
		//this._negociacoesView.update(this._listaNegociacoes); 

		this._mensagem.texto = "Negociação adicionada com sucesso!";
		this._mensagemView.update(this._mensagem);
		
		this._limpaFormulario();

		//console.log(this._listaNegociacoes.negociacoes);
	}

	apaga() {

		this._listaNegociacoes.esvazia();
		
		// O update pode ser omitido a partir do momento que foi repassado para o construtor da listaNegociacoes
		//this._negociacoesView.update(this._listaNegociacoes); 

		this._mensagem.texto = "Necogiações apagadas com sucesso!";
		this._mensagemView.update(this._mensagem);
	}

	_criaNegociacao() {
		return new Negociacao(
					DateHelper.textoParaData(this._inputData.value),
					this._inputQuantidade.value,
					this._inputValor.value
					);
	}

	_limpaFormulario() {
		this._inputData.value = '';
		this._inputQuantidade.value = 1;
		this._inputValor.value = 0.0;

		this._inputData.focus();
	}

}