const progressaoAritmetica = ({ n, a1, r }) => {
    let termosPA = [];
    let somaPA = 0;
  
    for (let i = 0; i < n; i++) {
      let termo = a1 + i * r;
      termosPA.push(termo);
      somaPA += termo;
    }
  
    console.log(`Os termos da PA: ${termosPA.join(', ')}`);
    console.log(`Soma dos termos da PA: ${somaPA}`);
};

const progressaoGeometrica = ({ n, a1, r }) => {
    let termosPG = [];
    let somaPG = 0;
  
    for (let i = 0; i < n; i++) {
      let termo = a1 * Math.pow(r, i);
      termosPG.push(termo);
      somaPG += termo;
    }
  
    console.log(`Os termos da PG: ${termosPG.join(', ')}`);
    console.log(`Soma dos termos da PG: ${somaPG}`);
};

// Objetos de exemplo para PA e PG
const parametrosPA = {
    id: 1,
    nome: 'Progressão Aritmética',
    n: 5,
    a1: 2,
    r: 3
};
  
const parametrosPG = {
    id: 2,
    nome: 'Progressão Geométrica',
    n: 4,
    a1: 3,
    r: 2
};
  
progressaoAritmetica(parametrosPA);
progressaoGeometrica(parametrosPG);
  