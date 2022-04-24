const funcs = []
for(let i = 0 ; i <10;i+=1){
funcs.push(function(){
console.log(i);
});
}
funcs[3]()

//Diferentemente do var o let imprimir o valor passado no array
//pois o mesmo tem "memoria" de que valor está sendo passado.