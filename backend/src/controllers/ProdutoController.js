const connection = require('../database/connection');

module.exports = {

  async index(request, response) {
    const produtos = await connection('produtos').select('*');
  
    
    const serializedItems = produtos.map((produto) => {
      return {
        id: produto.id,
        nome: produto.nome
      };
    });

    return response.json(serializedItems);
  }
  
};