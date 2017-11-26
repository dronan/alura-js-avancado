class Negociacao {

	constructor(data, quantidade, valor) {

		// _atributo -> o underline diz que é um atributo privado
		this._data = data;
		this._quantidade = quantidade;
		this._valor = valor;

	}

	get volume(){
		return this._quantidade * this._valor;
	}

	get quantidade(){
		return _quantidade;
	}

	get data(){
		return _data;
	}

	get valor(){
		return _valor;
	}
}