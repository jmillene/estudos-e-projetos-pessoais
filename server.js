const { response } = require("express");
const express = require("express");
const res = require("express/lib/response");
// const express = require('express'); chamei meu express
const app = express();
// const app = express(); instaciei ele nessa const
const data = require("./data.json");

// O que é o framework Express?
// Express é um popular framework web estruturado, escrit
//  em JavaScript que roda sobre o ambiente node. js em tempo de execução.
//  Este módulo explica alguns dos principais benefícios deste framework,
//  como configurar o seu ambiente de desenvolvimento e como executar
// tarefas comuns de desenvolvimento e implantação da web.

// o endpoint que iremos utiizar é o clients.
// Um endpoint de um web service é a URL
// onde seu serviço pode ser acessado por uma aplicação cliente.
// Uma API é um conjunto de rotinas, protocolos e ferramentas
// para construir aplicações. APIs podem existir sem endpoints

// coloco o Ids para poder manipula-lo depois,ou
// seja caso queira mexer em um cliente
// O cliente vai fazer uma requisição(request) e o server vai dá uma response(resposta);
app.get("/clients", function (request, response) {
  app.use(express.json());
  // Estou pedindo ao meu express para usar meu json
  response.json(data);
  // devolvendo uma resposta para meus clientes

  // Aqui estou falando se não existir o cliente para me retornar um erro.
});
app.get("/clients:id", function (request,response){
    const {id} = request.params; 
    // params são os parametros da minha requisição
    const client = data.find(cli => cli = id);
    // aqui estou dando um find e informar para ele procurar o cliente que tem o id 
    // passado acima na minha clients:id
    if(!client)return response.status(404).json();  
});
app.post("/clients:id");
app.put("/clients:id");
app.delete("/clients:id");
app.listen(3000, function () {
  // aqui eu estou iniciando meu servidor na porta 3000
  console.log("iniciando servidor");
});
