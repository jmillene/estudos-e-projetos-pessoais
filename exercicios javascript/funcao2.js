//Armazenando função em uma variável

const imprimirSoma = function(a,b){
    console.log(a+b);
}
imprimirSoma(2,3)

//Armazenar uma função arrow em uma váriavel
const soma = (a,b) =>{
    return a+b;
}
console.log(soma(5,4));

//retono implicito
const subtracao = (a,b) => a-b;
console.log(subtracao(10,4));