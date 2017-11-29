class ArquivoController {

    constructor() {
        this._inputDados = document.querySelector('.dados-arquivo');
    }

    envia() {
        //cria um Arquivo com as suas propriedades;
        let _arrayRetorno = this._geraDados(this._inputDados.value.toUpperCase());
        let arquivo = new Arquivo(..._arrayRetorno);
        
		console.log(`Dados: ${arquivo.nome}, ${arquivo.tamanho}, ${arquivo.tipo}`);
    
        this._limpaFormulario();
        // exibe mensagem no console com os dados do arquivo.
    }

    _limpaFormulario() {
        this._inputDados.value = '';
        this._inputDados.focus();
    }

    _geraDados(dados) {
    	return dados.split("/");
    }
}