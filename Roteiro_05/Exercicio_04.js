function colocarTodasLetrasEmMaiusculoEm500ms(frase){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof frase !== 'string'){
                reject("Não é uma string!");
            }
            else{
                resolve(frase.toUpperCase());
            }
        }, 500);
    })
}

const inverteTodasLetras = novaFrase => {
    return new Promise((resolve) => {
        resolve(novaFrase.split("").reverse().join(""));
    });
}

const processarString = async (frase) => {
    try {
        const maiusculo = await colocarTodasLetrasEmMaiusculoEm500ms(frase);
        const invertido = await inverteTodasLetras(maiusculo);
        console.log(invertido);
    } catch (error) {
        console.error(error);
    }
};

processarString('exemplo');
processarString(12345);