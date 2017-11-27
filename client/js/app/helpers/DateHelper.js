class DateHelper{

	constructor() {
		throw new Error("Esta classe não pode ser instanciada");
	}

	static dataParaTexto(data){ // static  evita criar uma instancia (new Classe) e ocupar memoria
		return data.getDate() +'/'+ (data.getMonth() + 1) +'/'+data.getFullYear(); 
	}

	static textoParaData(texto){
		return new Date(...texto.split("-").map((item, indice) => item - indice % 2)) // arrow function, e ainda em uma linha, posso omitir o return e as chaves
	}


}