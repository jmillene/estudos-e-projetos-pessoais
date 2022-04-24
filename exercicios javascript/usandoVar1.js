var numero = 1;

{
    var numero = 2;
    console.log('dentro = ', numero);
}
console.log('fora = ', numero);

// declaro var ele subscreve, isso dará problemas posteriormente, caso use o mesmo nome de varivel

var numero = 5;
{
    let numero = 9;
    console.log('dentro = ', numero);
}
console.log('fora = ', numero);
// Usando let as duas se coexistem sem subescrever

