const somaParesConsecutivos = (x) => {
    const valorInicial = x % 2 === 0 ? x : x + 1;
  
    const somar = (pares) => pares.reduce((acc, num) => acc + num, 0);
    const pares = Array.from({ length: 5 }, (_, i) => valorInicial + i * 2);
  
    const soma = somar(pares);
    console.log(soma);
};
  

somaParesConsecutivos(4);
somaParesConsecutivos(11);
  