const express = require('express');
const router = express.Router();

// Importando o controlador
const numeroController = require('../controllers/numeroController');

// Rota para utilitário de número (minimum e maximum)
router.get('/:acao', numeroController.processarNumero);

module.exports = router;
