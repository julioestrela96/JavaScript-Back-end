exports.processarNumero = (req, res) => {
    const acao = req.params.acao;  // 'minimum' ou 'maximum'
    const numeros = req.query.numeros; // Lista de números passada como query
  
    if (!numeros) {
      return res.status(400).send('Números são obrigatórios!');
    }
  
    const numerosArray = numeros.split(',').map(Number);
    
    if (numerosArray.some(isNaN)) {
      return res.status(400).send('Todos os valores devem ser números!');
    }
  
    let resultado;
    if (acao === 'minimum') {
      resultado = Math.min(...numerosArray);
    } else if (acao === 'maximum') {
      resultado = Math.max(...numerosArray);
    } else {
      return res.status(400).send('Ação inválida!');
    }
  
    res.send({ resultado });
  };
  