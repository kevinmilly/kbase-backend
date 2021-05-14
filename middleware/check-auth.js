const jwt = require("jsonwebtoken");
const env = require("../env");

module.exports = (req, res, next) => {
    try {
        const token =  req.headers.authorization.split(" ")[1];
        jwt.verify(
            token,
            env.secret
        )
        next();
    } catch(e) {
        res.status(401).json({message: "Auth failed!" });
    }

    

};