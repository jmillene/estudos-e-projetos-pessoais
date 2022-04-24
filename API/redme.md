## API RESTfull
 De modo simples, uma API REST permite a você enviar (push – traduzido do inglês a partir do significado no contexto) e receber (pull – traduzido do inglês a partir do significado no contexto) dados de um datastore, ou local de armazenamento de dados. 

 - GET — Obter dados de uma API. Por exemplo, obter um usuário do Twitter com base em seu nome de usuário.
- POST — Enviar dados para a API. Por exemplo, criar um novo registro de usuário  - com nome, idade e endereço de e-mail.
- PUT — Atualizar um registro existente com novos dados. Por exemplo, atualizar o endereço de e-mail do usuário.
- DELETE — Remover um registro. Por exemplo, excluir um usuário de um banco de dados.

## Fetch API
Fetch API é uma versão mais simples e mais fácil de usar da XMLHttpRequest para consumir recursos de modo assíncrono. Fetch permite que você trabalhe com as APIs REST com opções adicionais como cache de dados, leitura de respostas em streaming e mais.
A maior diferença está no fato de que Fetch trabalha com promises em vez de callbacks. Os desenvolvedores de JavaScript vêm, aos poucos, fugindo das callbacks desde a introdução das promises.

Ex : 
// Solicitação GET.
fetch('https://api.github.com/users/manishmshiva')
    // Tratamento do sucesso
    .then(response => response.json())  // converter para json
    .then(json => console.log(json))    //imprimir dados no console
    .catch(err => console.log('Erro de solicitação', err)); // lidar com os erros por catch
O primeiro parâmetro da função Fetch deve sempre ser o URL. Fetch recebe um segundo objeto JSON com opções como método, cabeçalhos, corpo da solicitação e assim por diante.

Há uma diferença importante entre o objeto de resposta (response) de XMLHttpRequest e de Fetch.

XMLHttpRequest returna os dados como uma resposta, enquanto o objeto de resposta de Fetch contém informações sobre o próprio objeto. Isso inclui cabeçalhos, código de status etc. Chamamos a função "res.json()" para obter os dados de que necessitamos do objeto de resposta.

Outra diferença importante é o fato de Fetch API não lançar um erro se a resposta retornar com o código de status 400 ou 500. A resposta ainda será considerada um sucesso e passada para a função 'then'.

Fetch somente lança um erro se a própria solicitação for interrompida. Para tratar de respostas com os status 400 e 500, você pode criar uma lógica personalizada usando 'response.status'. A propriedade 'status' dará a você o código de status da resposta retornada.

Ótimo. Agora que você entende como funciona a Fetch API, vamos examinar mais alguns exemplos de como passar os dados e de como trabalhar com os cabeçalhos.

<!-- Ref : https://www.freecodecamp.org/portuguese/news/tutorial-de-fetch-api-em-javascript-exemplos-de-post-e-cabecalho/ -->


