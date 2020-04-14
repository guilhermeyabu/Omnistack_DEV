const express = require('express');

// Instancia da aplicação.
const app = express();

// (/) é a rota padrão, rota raiz
app.get('/', (request, response) =>  {
    return response.json({
        evento: 'Server Semana Omnistack',
        aluno: 'Yabunito'
    })
});

// App irá executar na porta 3333.
app.listen(3333);
