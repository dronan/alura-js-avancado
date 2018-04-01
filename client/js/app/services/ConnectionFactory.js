var ConnectionFactory = (function () {
	var stores = ['negociacoes'];
	var version = 4;
	var dbname = 'aluraframe';
	var connection = null;

	return class ConnectionFactory {

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

					if(!connection) connection = e.target.result;

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

	}
})(); // funcao anonima auto executavel