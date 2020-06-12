const connection = require('../database/connection');
const paseto = require('../middleware/services/paseto')

module.exports = {
  async index(request, response) {
    const { page = 1 } = request.query;

    const producao = await connection('producao')
      .join('produtos', 'produtos.id', '=', 'producao.produto_id')
      .select([
        'producao.*', 
        'produtos.nome'
      ])
  
    return response.json(producao);
  },

  async create(request, response) {

    const { quantidade, defeito, data, produtos_id } = request.body;
    const { id_people } = await paseto.openToken(request)

    console.log(request.body);
    console.log(id_people);
    await connection('producao').insert({
      quantidade, 
      defeito,
      data, 
      operadores_id: id_people, 
      produtos_id
    })

    return response.json();
  }
};