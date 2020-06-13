const connection = require('../database/connection');

module.exports = {
  async index(request, response) {
    const { page = 1 } = request.query;

    const [count] = await connection('demandas').count();

    const demandas = await connection('demandas')
      .join('produtos', 'produtos.id', '=', 'demandas.produtos_id')
      .select([
        'demandas.*', 
        'produtos.nome'
    
      ]);

    response.header('X-Total-Count', count['count(*)']);

    return response.json(demandas);
  },

  async create(request, response) {
    const { quantidade, data, produto } = request.body;

    console.log(produto);

    const produto_id = produto;
     
    const [id] = await connection('demandas').insert({
        quantidade,
        data,
        produto_id
    });

    return response.json({ id });
  }


};