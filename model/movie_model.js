// importar a lib do meu banco de dados
const mongoose = require('mongoose');

// Criar um objeto do tipo Schema
const moviesSchema = new mongoose.Schema({
  id: { type: Number, required: true },
    nome: { type: String, required: true },
    duracao: { type: Number, required: true },
    categoria: { type: String, required: true },
    classificacaoIndicativa: { type: String, required: true },
    detalhes: {
      diretor: { type: String, required: true },
      produtora: { type: String, required: true },
      atores: { type: String, required: true },
      avaliacoes: {
        media: { type: Number, required: true }
      }
    },
    imagem: { type: String, required: true }
  });

const Movie = mongoose.model('filmes', moviesSchema);
module.exports = Movie;