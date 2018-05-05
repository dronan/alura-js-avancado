export class View {

	constructor(elemento) {
		this._elemento = elemento;
	}

	template(model) {
		throw new Error("O metodo template deve ser implementado"); // força o desenvolvedor lançar este metodo nas classes filhas, lançando um erro caso não o faça
	}

	update(model){
		this._elemento.innerHTML = this.template(model);
	}


}