const express = require('express');
const bcrypt = require('bcryptjs');
const Usuario = require('./../models/user');
const app = express();

app.post('/login', function (req, res) {

    let body = req.body;
    console.log(body)

    Usuario.findOne({ email: body.email }, (erro, usuarioDB)=>{
        console.log(usuarioDB)
        if (erro) {
            return res.status(500).json({
                ok: false,
                err: erro
            })
        }

        // Verifica que exista un usuario con el mail escrita por el usuario.
        if (!usuarioDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: "Usuario o contraseña incorrectos"
                }
            })
        } 

        // Valida que la contraseña escrita por el usuario, sea la almacenada en la db
        if (! bcrypt.compareSync(body.password, usuarioDB.password)){
            return res.status(400).json({
                ok: false,
                err: {
                    message: "Contraseña incorrecta"
                }
            });
        }

        return res.json({
            ok: true,
            usuario: usuarioDB,
        })
    })

});

module.exports = app;

