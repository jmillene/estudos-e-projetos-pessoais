// # API, REST, RESTFUL

Cliente(client(app,page web) que faz a requisição)
Garçon(pedidos, levar seus pedidos, para cozinha) (API)
Cozinha (server)

- Comparação com youtube, meu app faz uma requisição para a API e a API solicita para o sever
- Ela é responsavel por estabelecer - Scomunicação entre diferentes serviços.
meio de campo entre as tecnologias

## REST

A transfencia de dados, geralmenre usando o protocolo HTTP.
O Rest, delimita algumas obrigações nessas transferências de dados

No caso do restaurante o graçom leva os dados através de um bloquinho de notas(HTTP)

## 6 NECESSIDADES (constraints) para ser RESTful

- Uniform Interface: Manter uma uniformidade, uma constância, um padrão na construção da interface. Nossa API precisa ser coerente para quem vai consumi-lá. Precisa fazer sentido para o cliente e não ser confusa. Logo, coisas como: o uso correto dos verbos HTTP; endpoints coerentes (todos os endpoints no plural, por exemplo); usar somente uma linguagem de comunicação (json) e não várias ao mesmo tempo; sempre enviar respostas aos clientes; são exemplos de aplicação de uma interface uniforme.

- Client-server: Separação do cliente e do armazenamento de dados (servidor), dessa forma, poderemos ter uma portabilidade do nosso sistema, usando o React para WEB e React Native para o smartphone, por exemplo.

- Stateless: Cada requisição que o cliente faz para o servidor, deverá conter todas as informações necessárias para o servidor entender e responder (RESPONSE) a requisição (REQUEST). Exemplo: A sessão do usuário deverá ser enviada em todas as requisições, para saber se aquele usuário está autenticado e apto a usar os serviços, e o servidor não pode lembrar que o cliente foi autenticado na requisição anterior. Nos nossos cursos, temos por padrão usar tokens para as comunicações.

- Cacheable: As respostas para uma requisição, deverão ser explicitas ao dizer se aquela resquição, pode ou não ser cacheada pelo cliente.

- Layered System: O cliente acessa a um endpoint, sem precisar saber da complexidade, de quais passos estão sendo necessários para o servidor responder a requisição, ou quais outras camadas o servidor estará lidando, para que a requisição seja respondida.

- Code on demand (optional): Dá a possibilidade da nossa aplicação pegar códigos, como o javascript, por exemplo, e executar no cliente.

## RESTFULL

- RESTful, é a aplicação dos padrões REST.

## BOAS PRÁTICAS
- Utilizar verbos HTTP para nossas requisições.
- Utilizar plural ou singular na criação dos endpoints? NÃO IMPORTA! use um padrão!!
- Não deixar barra no final do endpoint
- Nunca deixe o cliente sem resposta!
## VERBOS HTTP
- GET: Receber dados de um Resource.
- POST: Enviar dados ou informações para serem processados por um Resource.
- PUT: Atualizar dados de um Resource.
- DELETE: Deletar um Resource
- STATUS DAS RESPOSTAS
- 1xx: Informação
- 2xx: Sucesso
- 200: OK
- 201: CREATED
- 204: Não tem conteúdo PUT POST DELETE
- 3xx: Redirection
- 4xx: Client Error
- 400: Bad Request
- 404: Not Found!
- 5xx: Server Error 500: Internal Server Error

## Repositorio copiado de https://github.com/rocketseat-content/youtube-api-rest-restful/blob/master/README.md onde estou estudando sobre APIs