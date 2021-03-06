import {HttpService} from './HttpService';
import {Negociacao} from '../models/Negociacao';
import {NegociacaoDao} from '../dao/NegociacaoDao';
import {ConnectionFactory} from '../services/ConnectionFactory';

export class NegociacaoService {

	constructor() {
		this._http = new HttpService();
	}

	obterNegociacoes() {
		return Promise.all([
				this.obterNegociacoesDaSemana(),
				this.obterNegociacoesDaSemanaAnterior(),
				this.obterNegociacoesDaSemanaRetrasada()
		])
		.then(periodos => {
			let negociacoes = periodos
			.reduce((dados, periodo) => dados.concat(periodo), [])
			return negociacoes;
		})
		.catch(erro => {
			throw new Error(erro);
		});
	}

	obterNegociacoesDaSemana() {

		return new Promise((resolve, reject) => {
			
			this._http
			.get('negociacoes/semana')
			.then(negociacoes => {
				resolve(negociacoes.map (objeto =>  new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor )));
			})
			.catch(err => {
				console.log(err);
				reject("Não foi possivel obter as negociacoes da semana");
			});
		});
	}

	obterNegociacoesDaSemanaAnterior() {

		return new Promise((resolve, reject) => {
			
			this._http
			.get('negociacoes/anterior')
			.then(negociacoes => {
				resolve(negociacoes.map (objeto =>  new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor )));
			})
			.catch(err => {
				console.log(err);
				reject("Não foi possivel obter as negociacoes da semana anterior");
			});
		});
	}

	obterNegociacoesDaSemanaRetrasada() {

		return new Promise((resolve, reject) => {
			
			this._http
			.get('negociacoes/retrasada')
			.then(negociacoes => {
				resolve(negociacoes.map (objeto =>  new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor )));
			})
			.catch(err => {
				console.log(err);
				reject("Não foi possivel obter as negociacoes da semana retrasada");
			});
		});
	}

	cadastra(negociacao){

		return ConnectionFactory
				.getConnection()
				.then(conexao => new NegociacaoDao(conexao))
				.then(dao => dao.adiciona(negociacao))
				.then(() => "Negociação adicionada com sucesso!")
				.catch(erro => {
					console.log(erro);
					throw new Error("Não foi possivel adicionar a negociação");
				});

	}

	lista(){

		return ConnectionFactory
				.getConnection()
				.then(conexao => new NegociacaoDao(conexao))
				.then(dao => dao.listaTodos())
				.catch(erro => {
					console.log("Erro", erro);
					throw new Error("Não foi possivel adicionar a negociação");
				});
				
	}


	apaga() {

		return ConnectionFactory
				.getConnection()
				.then(conexao => new NegociacaoDao(conexao))
				.then(dao => dao.apagaTodos())
				.then( () => "Negociacao apagada com sucesso")
				.catch(erro => {
					console.log("Erro", erro);
					throw new Error("Não foi possivel apagar a negociação");
				});
	}

	importa(listaAtual) {

		return this.obterNegociacoes()
					.then( negociacoes => 
						negociacoes.filter(negociacao => 
							!listaAtual.some(negociacaoExistente =>
								negociacao.isEquals(negociacaoExistente))))
					.catch(error => {
						console.log(error);
						throw new Error("Não foi possivel importar as negociacoes")
					});
	}

}