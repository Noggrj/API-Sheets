
Dependências: 

npm install express googleapis nodemon

Resumo:

Essa API tem a capacidade de consultar, adicionar ou alterar, uma planilha GoogleSheets.

O script searchData.js verifica se um dado CPF já está cadastrado na planilha, e retorna uma chave.

Essa chave contém cada e-mail de cada atendente, para cada uma das 3 filas Produtos, Serviços e Engenharia.

Caso o CPF, não esteja cadastrado na planilha, retornará "find":false.