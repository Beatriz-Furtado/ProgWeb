const ePrimo = (num) => {
    if (num < 2) return false;
    
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    
    return true;
};
  
const imprimirPrimos = (inicio = 0, fim = 100) => {
    if (inicio > fim) {
        [inicio, fim] = [fim, inicio];
    }

    const primos = Array.from({ length: fim - inicio + 1 }, (_, i) => inicio + i)
                        .filter(ePrimo);

    console.log(`Números primos entre ${inicio} e ${fim}:`);
    console.log(primos);

    return primos;
};
  
imprimirPrimos();
imprimirPrimos(10, 50);
imprimirPrimos(50, 10);