const connection = require('../database/connection');

module.exports = {

  async index(request, response) {
    const equipamentos = await connection('equipamentos').select('*');
  
    
    const serializedItems = equipamentos.map((equipamento) => {
      return {
        id: equipamento.id,
        nome: equipamento.nome
      };
    });

    return response.json(serializedItems);
  },
 
  async search(request, response) {

    const { inicio, fim, equipamentos, operadores} = request.body;

    let relatorios = null

    if (equipamentos == "all" && operadores == "all"){
      relatorios = await connection('equipamento_utilizado')
      .select('equipamento_utilizado.data','equipamentos.*','operadores.nome as operador')
      .whereBetween('equipamento_utilizado.data', [inicio, fim])
      .join('equipamentos', 'equipamentos.id', 'equipamento_utilizado.equipamento_id')
      .join('operadores', 'operadores.id', 'equipamento_utilizado.operador_id');
    } else if(equipamentos != "all" && operadores == "all"){
        relatorios = await connection('equipamento_utilizado')
        .select('equipamento_utilizado.data','equipamentos.*','operadores.nome as operador')
        .where({
          equipamento_id: equipamentos
        }).whereBetween('equipamento_utilizado.data', [inicio, fim])
        .join('equipamentos', 'equipamentos.id', 'equipamento_utilizado.equipamento_id')
        .join('operadores', 'operadores.id', 'equipamento_utilizado.operador_id');
    } else if(equipamentos == "all" && operadores != "all"){
      relatorios = await connection('equipamento_utilizado')
      .select('equipamento_utilizado.data','equipamentos.*','operadores.nome as operador')
      .where({
        operador_id:  operadores
      }).whereBetween('equipamento_utilizado.data', [inicio, fim])
      .join('equipamentos', 'equipamentos.id', 'equipamento_utilizado.equipamento_id')
      .join('operadores', 'operadores.id', 'equipamento_utilizado.operador_id');
    } else{
      relatorios = await connection('equipamento_utilizado')
      .select('equipamento_utilizado.data','equipamentos.*','operadores.nome as operador')
      .where({
        equipamento_id: equipamentos,
        operador_id:  operadores
      }).whereBetween('equipamento_utilizado.data', [inicio, fim])
      .join('equipamentos', 'equipamentos.id', 'equipamento_utilizado.equipamento_id')
      .join('operadores', 'operadores.id', 'equipamento_utilizado.operador_id');
    }
     
    

    const serializedItems = relatorios.map((relatorio) => {
      return {
        id: relatorio.id,
        data: relatorio.data,
        nome: relatorio.nome,
        aquisicao: relatorio.aquisicao,
        serie: relatorio.serie,
        operador: relatorio.operador
      };
    });

    return response.json(serializedItems);
  }
};