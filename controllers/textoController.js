exports.processarTexto = (req, res) => {
    const acao = req.params.acao;  // 'lowercase' ou 'uppercase'
    const texto = req.body.texto; // Texto enviado no corpo da requisição
  
    if (!texto) {
      return res.status(400).send('Texto é obrigatório!');
    }
  
    let resultado;
    if (acao === 'lowercase') {
      resultado = texto.toLowerCase();
    } else if (acao === 'uppercase') {
      resultado = texto.toUpperCase();
    } else {
      return res.status(400).send('Ação inválida!');
    }
  
    res.send({ resultado });
  };
  