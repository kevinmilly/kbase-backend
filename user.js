const User = require("./models/user")
var bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

const env = require("./env");

module.exports = function(app) {
    
    app.post("/api/user/signup", (req,res,next) => {
        bcrypt.hash(req.body.password, 10)
            .then(hash => {
                const user = new User({
                    name: req.body.name,
                    email: req.body.email,
                    password: hash
                })
                user.save()
                    .then(result => {
                        res.status(201).json({
                            message: 'User created',
                            result:result
                        })
                    })
                    .catch(err => {
                        res.status(500).json({
                            error:err
                        })
                    })
            })
        

    })

    app.post("/api/user/login", (req, res, next) => {
        let fetchedUser; 
        User.findOne({ email:req.body.email })
            .then(user => {
                console.dir(user.name);
                if(!user) {
                    return res.status(401).json({
                        message: "Auth failed!"
                    })
                }
                fetchedUser = user;
                return bcrypt.compare(req.body.password, user.password);
            })
            .then(result => {
                if(!result) {
                    return res.status(401).json({
                        message: "Auth failed!"
                    })
                }
                const token = jwt.sign(
                    {email:fetchedUser.email, userId: fetchedUser._id, name: fetchedUser.name}, 
                    env.secret,
                    {expiresIn: "1h"}
                    )
                console.dir(token);
                res.status(200).json({
                    token:token,
                    user:{name:fetchedUser.name, email: fetchedUser.email},
                    expiresIn: 3600
                })
            })
            .catch(err => {
                return res.status(401).json({
                    message: "Auth failed!"
                })
              })  

    })

}