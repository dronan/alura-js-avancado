'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NegociacaoService = function () {
	function NegociacaoService() {
		_classCallCheck(this, NegociacaoService);

		this._http = new HttpService();
	}

	_createClass(NegociacaoService, [{
		key: 'obterNegociacoes',
		value: function obterNegociacoes() {
			return Promise.all([this.obterNegociacoesDaSemana(), this.obterNegociacoesDaSemanaAnterior(), this.obterNegociacoesDaSemanaRetrasada()]).then(function (periodos) {
				var negociacoes = periodos.reduce(function (dados, periodo) {
					return dados.concat(periodo);
				}, []);
				return negociacoes;
			}).catch(function (erro) {
				throw new Error(erro);
			});
		}
	}, {
		key: 'obterNegociacoesDaSemana',
		value: function obterNegociacoesDaSemana() {
			var _this = this;

			return new Promise(function (resolve, reject) {

				_this._http.get('negociacoes/semana').then(function (negociacoes) {
					resolve(negociacoes.map(function (objeto) {
						return new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor);
					}));
				}).catch(function (err) {
					console.log(err);
					reject("Não foi possivel obter as negociacoes da semana");
				});
			});
		}
	}, {
		key: 'obterNegociacoesDaSemanaAnterior',
		value: function obterNegociacoesDaSemanaAnterior() {
			var _this2 = this;

			return new Promise(function (resolve, reject) {

				_this2._http.get('negociacoes/anterior').then(function (negociacoes) {
					resolve(negociacoes.map(function (objeto) {
						return new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor);
					}));
				}).catch(function (err) {
					console.log(err);
					reject("Não foi possivel obter as negociacoes da semana anterior");
				});
			});
		}
	}, {
		key: 'obterNegociacoesDaSemanaRetrasada',
		value: function obterNegociacoesDaSemanaRetrasada() {
			var _this3 = this;

			return new Promise(function (resolve, reject) {

				_this3._http.get('negociacoes/retrasada').then(function (negociacoes) {
					resolve(negociacoes.map(function (objeto) {
						return new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor);
					}));
				}).catch(function (err) {
					console.log(err);
					reject("Não foi possivel obter as negociacoes da semana retrasada");
				});
			});
		}
	}, {
		key: 'cadastra',
		value: function cadastra(negociacao) {

			return ConnectionFactory.getConnection().then(function (conexao) {
				return new NegociacaoDao(conexao);
			}).then(function (dao) {
				return dao.adiciona(negociacao);
			}).then(function () {
				return "Negociação adicionada com sucesso!";
			}).catch(function (erro) {
				console.log(erro);
				throw new Error("Não foi possivel adicionar a negociação");
			});
		}
	}, {
		key: 'lista',
		value: function lista() {

			return ConnectionFactory.getConnection().then(function (conexao) {
				return new NegociacaoDao(conexao);
			}).then(function (dao) {
				return dao.listaTodos();
			}).catch(function (erro) {
				console.log("Erro", erro);
				throw new Error("Não foi possivel adicionar a negociação");
			});
		}
	}, {
		key: 'apaga',
		value: function apaga() {

			return ConnectionFactory.getConnection().then(function (conexao) {
				return new NegociacaoDao(conexao);
			}).then(function (dao) {
				return dao.apagaTodos();
			}).then(function () {
				return "Negociacao apagada com sucesso";
			}).catch(function (erro) {
				console.log("Erro", erro);
				throw new Error("Não foi possivel apagar a negociação");
			});
		}
	}, {
		key: 'importa',
		value: function importa(listaAtual) {

			return this.obterNegociacoes().then(function (negociacoes) {
				return negociacoes.filter(function (negociacao) {
					return !listaAtual.some(function (negociacaoExistente) {
						return negociacao.isEquals(negociacaoExistente);
					});
				});
			}).catch(function (error) {
				console.log(error);
				throw new Error("Não foi possivel importar as negociacoes");
			});
		}
	}]);

	return NegociacaoService;
}();
//# sourceMappingURL=NegociacaoService.js.map