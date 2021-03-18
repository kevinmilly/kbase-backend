const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const env = require('./env.js');

require('dotenv').config();


const app = express();

// const user = process.env.USER;
// const pw = process.env.PW;
// const cluster = process.env.CLUSTER;

const user = env.user;
const pw = env.pw;
const cluster = env.cluster;


const uri = `mongodb+srv://${user}:${pw}${cluster}`;




console.log(uri);

mongoose.connect(`${uri}`)
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch((e) => {
        console.log("connection failed",e);
    });

app.use(bodyParser.json());

app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods",
    "GET,POST,PATCH,DELETE,OPTIONS"
    );
    next();
})


// routes ==================================================
require('./routes')(app); // pass our application into our routes



module.exports = app;