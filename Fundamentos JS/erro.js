function trataErroELanca(error) {
    throw {
        name: error.name,
        msg: error.message,
        data : new Date
    }
}
function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() +'!!!')
    } catch (error) {
        trataErroELanca(error)
    }
    finally{
        console.log('Final');
    }
    
    
}
const obj = {nome: 'Jessica'}
imprimirNomeGritado(obj)