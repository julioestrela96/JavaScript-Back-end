const express = require('express');
const router = express.Router();

// Importando o controlador
const textoController = require('../controllers/textoController');

// Rota para utilitário de texto (lowercase e uppercase)
router.post('/:acao', textoController.processarTexto);

module.exports = router;
