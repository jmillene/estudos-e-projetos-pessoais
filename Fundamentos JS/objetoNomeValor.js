 //par nome/valor
 const saudacao = 'opa' //contexto lógico

 function exec() {
     const saudacao = 'Falaaa'
     return saudacao;
 }
 const cliente = {
     nome : 'Jessica',
     idade : 29,
     peso : 100,
     endereco : {
        logradouro : "Rua Palmeiras",
        numero :123
     }
 }
 console.table(cliente);