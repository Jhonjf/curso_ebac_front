// Primeira parte do exercício
function multiplicar(a: number, b: number): number {
    return a * b;
}

// Segunda parte do exercício
function saudacao(nome: string): string {
    return "Olá " + nome;
}

// logs
const resultadoMultiplicacao = multiplicar(10, 3);
const mensagemSaudacao = saudacao("Jhon");

console.log(resultadoMultiplicacao);
console.log(mensagemSaudacao);
