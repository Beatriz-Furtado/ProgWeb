// Atribuir conceito as notas
const atribuirConceitos = (notas) => notas.map((nota) => {
    if (nota >= 0.0 && nota <= 4.9) return 'D';
    if (nota >= 5.0 && nota <= 6.9) return 'C';
    if (nota >= 7.0 && nota <= 8.9) return 'B';
    if (nota >= 9.0 && nota <= 10.0) return 'A';
    return 'Nota inválida';
});

// Exemplo de uso
const notas = [3.5, 7.2, 9.8, 5.6, 8.0, 2.1, 10.0];
const conceitos = atribuirConceitos(notas);
console.log(conceitos);
  