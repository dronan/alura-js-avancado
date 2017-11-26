class Negociacao {

	constructor(data, quantidade, valor) {

		// _atributo -> o underline diz que é um atributo privado
		this._data = data;
		this._quantidade = quantidade;
		this._valor = valor;

	}

	getVolume(){
		return this._quantidade * this._valor;
	}

	getQuantidade(){
		return _quantidade;
	}

	getDate(){
		return _data;
	}

	getValor(){
		return _valor;
	}
}