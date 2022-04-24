function rand ({min = 0, max = 1000}) {
   if(min > max)[min,max] =[max,min] //aqui estou dizendo que quero inverter o min venha antes do max 
   const valor = Math.random() *(max - min)+min
    return Math.floor(valor)  
}

console.log(rand(50,40));

