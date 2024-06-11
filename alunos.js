// Array de objetos com nome e nota dos alunos
const alunos = [
    { nome: 'Gustavo', nota: 7 },
    { nome: 'Julia', nota: 5 },
    { nome: 'Paula', nota: 8 },
    { nome: 'Wagner', nota: 4 },
    { nome: 'Lucio', nota: 6 }
];

// filtro para alunos com nota superior a 6
function filtrarAlunosAprovados(alunos) {
    return alunos.filter(function(aluno) {
        return aluno.nota >= 6;
    });
}

// Puxando a função e vendo o resultado
const alunosAprovados = filtrarAlunosAprovados(alunos);
console.log(alunosAprovados);
