const Node = require('node-cron')

exports.getData = (dados,cpf) => {


    try {
                
        dados = dados.values
        
        let new_values = processingValues(dados)
        
        let value = validation(new_values, cpf)
       
        
        let email = extractionEmails(dados,value["index"])
 
        
       if(value["find"]===true){
           return {
                "find": true,
                "elem": value["elem"],
                "index": value["index"],
                "emailProdutos" : email[1],
                "emailServicos": email[2],
                "emailEngenharia": email[3]
        }
      }
      else{
        return {
          "find": false
        }
      }

      } catch (e) {
        return e;
      }
    }
    
    function processingValues(values) {
      let new_values = [];
    
      for (let i = 0; i < values.length; i++) {
        new_values.push(values[i][0])
      }
    
    
      return new_values;
    }
    
    function validation(dados, cpf) {
    
    
    
      let dataIndex = dados.indexOf(cpf);
    
      if (dataIndex !== -1) {
        let elem = dados[dataIndex]
        return {
          "find": true,
          "elem": elem,
          "index": dataIndex
        }
      }
    
      return {
        "find": false,
        "elem": null,
        "index": -1
      }
    
    }
    function extractionEmails(dados,indice){
      dados = dados[indice]
      return dados
    }
