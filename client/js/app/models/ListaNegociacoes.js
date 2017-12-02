class ListaNegociacoes {

	constructor(contexto, armadilha) {
		this._negociacoes = [];
		this._armadilha = armadilha;
		this._contexto = contexto;
	}

	adiciona(negociacao){
		this._negociacoes.push(negociacao);
		Reflect.apply(this._armadilha, this._contexto, [this]);
		//this._armadilha(this);
	}

	get negociacoes() {
		return [].concat(this._negociacoes); // o retorno e concatenacao de array, evita que um this._listaNegociacoes.negociacoes.push(this._criaNegociacao()); crie uma negociacao adicionando-a a lista, coisa que só o adiciona deve fazer, blindando a classe.
	}

	esvazia() {
		this._negociacoes = [];
		Reflect.apply(this._armadilha, this._contexto, [this]);
		//this._armadilha(this);
	}

}