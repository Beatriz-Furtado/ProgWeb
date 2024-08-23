const http = require('https')
const dono = {
   "proprietario": "Silvio Santos",
   "endereco": {
       "cep": "hacked, pay to recover",
       "logradouro": "hacked, pay to recover",
       "complemento": "hacked, pay to recover",
       "bairro": "hacked, pay to recover",
       "localidade": "hacked, pay to recover",
       "uf": "",
       "geo": {
           "lat": "-23.61919020307765",
           "lng": "-46.70793551534256"
       }
   }
}


const preencherEndereco = () => {
   const cep = "05650-000";
   const viacepUrl = `https://viacep.com.br/ws/${cep}/json/`;
  
   return new Promise((resolve, reject) => {
       http.get(viacepUrl, res => {
           let resultado = '';
  
           res.on('data', dados => {
               resultado += dados;
           })
  
           res.on('end', () => {
               try {
                   resolve(JSON.parse(resultado));
               } catch(e) {
                   reject(e);
               }
           })
       })
   })
}


preencherEndereco().then( data => {
   dono.endereco.cep = data.cep;
   dono.endereco.logradouro = data.logradouro;
   dono.endereco.bairro = data.bairro;
   dono.endereco.localidade = data.localidade;
   dono.endereco.uf = data.uf;
  
   const { proprietario, endereco: { cep, bairro, localidade, geo: { lat, lng } } } = dono;
   const resultado = `${proprietario} - ${cep} - ${bairro}, ${localidade} (${lat}, ${lng})`;
   console.log(resultado);
   }).catch(e => console.log(e.message));

