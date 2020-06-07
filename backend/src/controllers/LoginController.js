const paseto = require('../middleware/services/paseto');
const connection = require('../database/connection');

module.exports = {
    async find(req, res) {
        const { email, password } = req.body;

        const user = await connection('operadores').where({
            email,
            senha: password,
        }).first('id', 'cargo')
      //  console.log(user)

        if (!user) {
            return res.status(401).json();
        }

        const { id, cargo } = user;


        return res.json(
            {
                "token": await paseto.generateToken(id, cargo),
                "type_user": cargo,
                //"name": id
            }
        );

    }
}