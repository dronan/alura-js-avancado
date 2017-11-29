class Aluno {

    constructor(matricula, nome) {
        this.matricula = matricula;
        this.nome = nome;
    }
}

class Prova {

    constructor(aluno, nota) {
        this.aluno = aluno;
        this.nota = nota;
    }
}

var avaliacoes = [
    new Prova(new Aluno(1, 'Luana'), 8),
    new Prova(new Aluno(2, 'Cássio'), 6),
    new Prova(new Aluno(3, 'Barney'), 9),
    new Prova(new Aluno(4, 'Bira'), 5)
];

var aprovados = avaliacoes
    .filter(function(prova) { return prova.nota >= 7; }) // cria um array que passa pelo teste
    .map(function(prova) { return prova.aluno.nome;}); // cria um array com base no array fornecido

//console.log(aprovados);


/* Mesmo retorno com Arrow Functions */
var arrowfunctions = avaliacoes
    .filter (prova => prova.nota >= 7) // cria um array que passa pelo teste
    .map (prova => prova.aluno.nome); // cria um array com base no array fornecido

console.log(arrowfunctions);