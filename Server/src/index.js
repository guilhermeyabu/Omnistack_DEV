const express = require('express');
const cors = require('cors');
const routes = require("./routes");

// Instancia da aplicação.
const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

// App irá executar na porta 3333.
app.listen(3333);
