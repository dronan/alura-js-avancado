export class DateHelper{

	constructor() {
		throw new Error("Esta classe não pode ser instanciada");
	}

	static dataParaTexto(data){ // static  evita criar uma instancia (new Classe) e ocupar memoria
		//return data.getDate() +'/'+ (data.getMonth() + 1) +'/'+data.getFullYear(); 
		return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`; // concatenacao com template string
	}

	static textoParaData(texto){
		
		if(!/\d{2}\/\d{2}\/\d{4}/.test(texto)) throw new Error("Deve estar no formato DD/MM/AAAA");

		return new Date(...texto.split("/").reverse().map((item, indice) => item - indice % 2)); // inverte-se para ficar aaaa-mm-dd
	}


}