Dependências:

npm install express googleapis nodemon



Resumo:

Essa API tem a capacidade de consultar, adicionar ou alterar, uma planilha GoogleSheets.

O script searchData.js verifica se um dado CPF já está cadastrado na planilha, e retorna uma chave.

Essa chave contém cada e-mail de cada atendente, para cada uma das 3 filas Produtos, Serviços e Engenharia.

Caso o CPF, não esteja cadastrado na planilha, retornará "find":false.



Exemplos de Requisições para consulta:


Requisição 1 (com CPF existente na planilha):

CPF = 00539975000192

Get http://localhost:$/checkClient/CPF

Resposta:

{
"find": true,
"elem": "00539975000192",
"index": 40,
"emailProdutos": "sabrina.ferreira@apscomponentes.com.br",
"emailServicos": "samea.omar@apscomponentes.com.br",
"emailEngenharia": "mariana.rodrigues@apscomponentes.com.br"
}


Requisição 2 (com CPF não existente na planilha):


CPF = 17650905715

Get http://localhost:$/checkClient/CPF

Resposta 2:

{
"find": false
}


Link planilha-> ""

Código da planilha: ""

Porta Local usada : ""
