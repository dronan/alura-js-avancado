class ListaNegociacoes {

	constructor(armadilha) {
		this._negociacoes = [];
		this._armadilha = armadilha;
	}

	adiciona(negociacao){
		this._negociacoes.push(negociacao);
		this._armadilha(this);
	}

	get negociacoes() {
		return [].concat(this._negociacoes); // o retorno e concatenacao de array, evita que um this._listaNegociacoes.negociacoes.push(this._criaNegociacao()); crie uma negociacao adicionando-a a lista, coisa que só o adiciona deve fazer, blindando a classe.
	}

	esvazia() {
		this._negociacoes = [];
		this._armadilha(this);
	}

}