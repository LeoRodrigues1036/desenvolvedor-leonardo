const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Configura o middleware express.static para servir arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));


// Define rotas para diferentes arquivos HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/sobre', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'sobre.html'));
});

app.get('/portfolio', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'portfolio.html'));
});

app.get('/contato', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contato.html'));
});

app.listen(port);

