const express = require('express');
const app = express();
const port = 3000;

// Usando o middleware para interpretar JSON no corpo da requisição
app.use(express.json());

// Importando as rotas
const textoRoutes = require('./routes/textoRoutes.js');
const numeroRoutes = require('./routes/numeroRoutes');

// Rota para Hello World
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Usando as rotas
app.use('/texto', textoRoutes);
app.use('/numero', numeroRoutes);

// Iniciando o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
