const paseto = require('paseto');

const { V2 } = paseto;

let key;

async function generateKey() {
    key = await V2.generateKey('local');
    console.log("--> Chaves Geradas!!!  <--")
};

generateKey();

module.exports = {
    async generateToken(id, type) {

        if (!key) {
            await generateKey();
        }
        try {
            const payload = {
                'id_people': id,
                'type_user': type,
            }

            const oi =  await V2.encrypt(payload, key, {
                audience: 'semanadetecnologia.com.br',
                issuer: 'https://api.semanadetecnologia.com.br',
                expiresIn: '1 hour'
            })
            return oi;
        } catch{
            return null;
        }
    },

    async readToken(token) {
        if (!key) {
            await generateKey();
        }
        try {
            return await V2.decrypt(token, key, {
                audience: 'semanadetecnologia.com.br',
                issuer: 'https://api.semanadetecnologia.com.br',
                clockTolerance: '1 min'
            })
        } catch{
            return null;
        }

    },

    async openToken(req) {
        if (!key) {
            await generateKey();
        }
        try {
 
            const token = req.header("authorization").split(' ')[1];

            return await this.readToken(token);

        } catch{
            return null;
        }

    }

}
