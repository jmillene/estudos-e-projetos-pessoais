const pessoa =  {
    nome : 'Jessica',
    idade : 29,
    peso : 100,
    endereco : {
       logradouro : "Rua Palmeiras",
       numero :123
    }
}

const{nome, idade} = pessoa;
console.log(nome, idade);

const {endereco: { logradouro, numero}} = pessoa;
console.log(logradouro, numero);