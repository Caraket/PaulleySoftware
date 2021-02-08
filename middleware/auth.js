
const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = (req, res, next) => {
    let token = req.headers.authorization;
    if(!token) return res.status(401).send('Access Denied');

    try {
        token = token.split(' ')[1];

        if(token === 'null' || !token) return res.status(401).send("Unauthorized");

        let verifiedUser = jwt.verify(token, config.get('TOKEN_SECRET'));
        if(!verifiedUser) return res.status(401).send('Unauthorized');

        req.user = verifiedUser;
        next();

    } catch (error) {
        res.status(400).send("Invalid Token");
    }
}