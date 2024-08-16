const numeros = [1, 60, 232, 7, 25, 76, 29, 74, 92];

// Filtrar os valores maiores que 60 e menores que 300
const lista = numeros.filter(num => num > 60 && num < 300);

// Somar todos os valores filtrados
let somatorio = 0;
lista.forEach(num => {
  somatorio += num;
});

const mensagem = `A lista dos valores maiores que 60 é: ${lista}. A soma dos elementos da lista é: ${somatorio}.`;
console.log(mensagem);
