const express = require('express');
const bcrypt = require('bcryptjs');
const Usuario = require('./../models/user');
const app = express();

app.post('/register', function (req, res) {
    let body = req.body;
    console.log(body)
    let { username, email, password, role } = body;

    let usuario = new Usuario({
      username,
      email,
      password: bcrypt.hashSync(password, 10),
      role, 
    });

    usuario.save((err, usuarioDB) => {
      if (err) {
          return res.status(400).json({
              ok: false,
              err: {
                message: "El mail ingresado ya está en uso"
              }
          });
      }

      res.json({
          ok: true,
          usuario: usuarioDB
      });
    })
});



module.exports = app;

