const express = require('express');
const path = require('path');

const app = express();

// Servir arquivos estáticos da pasta 'dist'
app.use(express.static(path.join(__dirname)));


app.get('/dados/procedimentos/:filename', (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(__dirname, 'dados', 'procedimentos', filename);
  res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'inline'); // Tentar abrir no navegador
    res.sendFile(filePath);
});




// Rotas para remover extensões .html
app.get('/index', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/entrada1', (req, res) => {
  res.sendFile(path.join(__dirname, '/entrada1.html'));
});

app.get('/saida1', (req, res) => {
  res.sendFile(path.join(__dirname, '/saida1.html'));
});

// Inicializar o servidor na porta 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
