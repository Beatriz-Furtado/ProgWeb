const crypto = require('crypto');

// Criptografia de dados
const criptografar = (texto, chaveSecreta) => {
    const algorithm = 'aes-256-cbc';
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv(algorithm, Buffer.from(chaveSecreta), iv);
    let encrypted = cipher.update(texto, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    // Retorna o IV junto com o texto criptografado
    return `${iv.toString('hex')}:${encrypted}`;
}

// Função para descriptografar dados
const descriptografar = (textoCriptografado, chaveSecreta) => {
    const algorithm = 'aes-256-cbc';
    const [ivHex, encrypted] = textoCriptografado.split(':');
    const iv = Buffer.from(ivHex, 'hex');
    const decipher = crypto.createDecipheriv(algorithm, Buffer.from(chaveSecreta), iv);
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

const processarNumeros = (numeros, callbackFunction) => {
    const numerosPares = numeros.filter(num => num % 2 === 0);
    const numerosCriptografados = numerosPares.map(num => callbackFunction(num.toString()));
    return numerosCriptografados;
}

const chaveSecreta = '01234567891011121314151617181920';
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Criptografado:");
const resCripto = processarNumeros(numeros, num => criptografar(num, chaveSecreta));
console.log(resCripto);

console.log("Descriptografado:");
const resDescripto = resCripto.map(cripto => descriptografar(cripto, chaveSecreta));
console.log(resDescripto);