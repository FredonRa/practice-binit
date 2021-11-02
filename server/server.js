const express = require("express");
const http = require("http"); 
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(cors());
app.use(require('./routes/login'));
app.use(require('./routes/register'));
app.use(require('./routes/users'));

// support parsing of application/json type post data
const server = http.createServer(app);

mongoose.connect("mongodb://localhost:27017/tasks", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (err) => {
  if (err) throw err;
  console.log("Base de datos online");
});

server.listen(3000, () => console.log("servidor inicializado en el puerto 3000", ))