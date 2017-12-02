class MensagemView extends View {

    constructor(elemento) {
        super(elemento); // passa a responsabilidade para a view
    }
    
	_template(model) {
		return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : `<p></p>`;
	}

}