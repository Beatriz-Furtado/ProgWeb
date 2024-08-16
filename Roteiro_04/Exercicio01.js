const numeros = [1, 60, 232, 7, 25, 76, 29, 74, 92];

const lista = numeros.filter(num => num > 60 && num < 300);

let somatorio = 0;
lista.forEach(num => {
  somatorio += num;
});

const mensagem = `A lista dos valores maiores que 60 é: ${lista}. A soma dos elementos da lista é: ${somatorio}.`;
console.log(mensagem);
