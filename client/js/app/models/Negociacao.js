class Negociacao {

	constructor(data, quantidade, valor) {

		// _atributo -> o underline diz que é um atributo privado
		this._data = data;
		this._quantidade = quantidade;
		this._valor = valor;

		Object.freeze(this); // asim não é possivel alterar a propriedade definida no construtor da classe

	}

	get volume(){
		return this._quantidade * this._valor;
	}

	get quantidade(){
		return this._quantidade;
	}

	get data(){
		return this._data;
	}

	get valor(){
		return this._valor;
	}
}