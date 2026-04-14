require("dotenv").config();

const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 5000;
const basePath = path.join(__dirname, "templates");

// HABILITA O EXPRESS PARA SERVIR ARQUIVOS ESTÁTICOS DA PASTA "PUBLIC"
app.use(express.static("public"));

// ROTA PARA SERVIR O ARQUIVO HTML PÁGINA PRINCIPAL
app.get("/", (req, res) => {
  res.sendFile(`${basePath}/index.html`);
});

// ROTA PARA SERVIR O ARQUIVO HTML PÁGINA 404
app.use((req, res, next) => {
  res.status(404).sendFile(`${basePath}/404.html`);
});

// INICIA O SERVIDOR NA PORTA DEFINIDA
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
