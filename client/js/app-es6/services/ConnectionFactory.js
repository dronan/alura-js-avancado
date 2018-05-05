const stores = ['negociacoes'];
const version = 4;
const dbname = 'aluraframe';

let connection = null;
let close = null;

export class ConnectionFactory {

	constructor() {
		throw new Error ("Não é possivel instanciar esta classe");
	}

	static getConnection() {
		return new Promise((resolve, reject) => {
			let openRequest = window.indexedDB.open(dbname, version);

			openRequest.onupgradedneeded = e => {
				ConnectionFactory._createStores(e.target.result);
			};

			openRequest.onsuccess = e => {

				if(!connection) { 

					connection = e.target.result;

					close = connection.close.bind(connection);

					connection.close = function() {
						throw new Error("Voce nao pode fechar diretamente a conexao")
					}

				}

				resolve(connection);

			};

			openRequest.onerror = e => {
				console.log(e.target.error);
				reject(e.target.error.name);
			};

		});
	}

	static _createStores(connection) {
		stores.forEach(store => {

			if (connection.objectStoreNames.contains(store)) 
				connection.deleteObjectStore(store);

			connection.createObjectStore(store, { autoIncrement: true});

		});
	}

	static closeConnection(){
		if (connection){
			close();
			connection = null;
		}
	}

}
