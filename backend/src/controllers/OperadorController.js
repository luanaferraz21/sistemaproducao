const connection = require('../database/connection');

module.exports = {
  async index(request, response) {
    const operadores = await connection('operadores').select('*');
  
    return response.json(operadores);
  },

  async create(request, response) {

    const { id, nome, email, cargo, data, entrada, saida } = request.body;
     
    await connection('operadores').insert({
      id,
      nome, 
      email,
      cargo, 
      data, 
      entrada, 
      saida
    })

    return response.json({ id });
  }
};