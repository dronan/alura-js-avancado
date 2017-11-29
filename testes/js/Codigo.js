class Codigo {

	constructor(texto){
		if ( !this._validacao(texto) ) throw new Error("Codigo invalido");
		this._texto = texto;
	}
	
	get texto(){
		return this._texto;
	}

	_validacao(texto){
		return /\D{3}-\D{2}-\d{2}/.test(texto);
	}


}

/*
Solução procedural:

let codigo = 'GWZ-JJ-12';

function validaCodigo(codigo) {

    if(/\D{3}-\D{2}-\d{2}/.test(codigo)) {
          alert('Código válido!');
      } else {
          alert('Código inválido');
      }

}

validaCodigo('GWZ-JJ-12'); // válido
validaCodigo('1X1-JJ-12'); // inválido

*/