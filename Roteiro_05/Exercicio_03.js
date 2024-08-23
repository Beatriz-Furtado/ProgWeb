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

colocarTodasLetrasEmMaiusculoEm500ms("Programação WEB")
    .then(frase => {console.log(frase)
        inverteTodasLetras(frase)
        .then(novaFrase => console.log(novaFrase))})
        .catch(error => console.error(error));

colocarTodasLetrasEmMaiusculoEm500ms(12345)
.then(frase => {console.log(frase)
    inverteTodasLetras(frase)
    .then(novaFrase => console.log(novaFrase))})
    .catch(error => console.error(error));