const express = require('express');
const Usuario = require('./../models/user');


const app = express();

// EN PROCESO - SIN TERMINAR
app.post('/user/modify', async(req, res) => {
    let body = req.body;
    console.log(body)

    const { _id, email, password, username } = body;
    const doc = await Usuario.findOne({ _id });
    doc.overwrite({username: username, email: email, password: password});
    await doc.save();
});

module.exports = app;