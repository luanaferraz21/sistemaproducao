const paseto = require('./services/paseto');

module.exports = function (authorizationLevel) {
    return async function (req, res, next) {

        //Bypass Temporario!
        return next();

        let token;
        try {
            token = await paseto.readToken(req.header("authorization").split(' ')[1]);
        } catch{
            token= null;
        }

        if (!token) {
            return res.status(401).json({ "error ": " Token inválido!" });
        } else if (token.type_user < authorizationLevel) {
            return res.status(403).json({ "error ": " Nível de autorização insuficiente para acessar este recurso." });
        }

        return next();

    };
};
