class DateHelper{

	dataParaTexto(data){
		return data.getDate() +'/'+ (data.getMonth() + 1) +'/'+data.getFullYear(); 
	}
	
	textoParaData(texto){
		return new Date(...texto.split("-").map((item, indice) => item - indice % 2)) // arrow function, e ainda em uma linha, posso omitir o return e as chaves
	}


}