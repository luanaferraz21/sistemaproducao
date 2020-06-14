const connection = require('../database/connection');

module.exports = {
  async index(request, response) {
    const operadores = await connection('operadores').select('*');
  
    
    const serializedItems = operadores.map((operador) => {
      return {
        id: operador.id,
        nome: operador.nome
      };
    });

    return response.json(serializedItems);
  },

  async create(request, response) {

    const { id, nome, email, cargo, data, entrada, saida, senha } = request.body;
     
    await connection('operadores').insert({
      id,
      nome, 
      email,
      cargo, 
      data, 
      entrada, 
      saida,
      senha
    })

    return response.json({ id });
  }
};