class DateHelper{

	constructor() {
		throw new Error("Esta classe não pode ser instanciada");
	}

	static dataParaTexto(data){ // static  evita criar uma instancia (new Classe) e ocupar memoria
		//return data.getDate() +'/'+ (data.getMonth() + 1) +'/'+data.getFullYear(); 
		return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`; // concatenacao com template string
	}

	static textoParaData(texto){
		
		if(!/^\d{4}-\d{2}-\d{2}$/.test(texto)) throw new Error("Deve estar no formato YYY-MM-DD");

		return new Date(...texto.split("-").map((item, indice) => item - indice % 2)); // arrow function, e ainda em uma linha, posso omitir o return e as chaves
	}


}