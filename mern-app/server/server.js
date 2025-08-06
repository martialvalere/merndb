require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();

// URI MongoDB Atlas
const mongoURI = process.env.MONGO_URI || 'mongodb+srv://valeremartialyao:F4WW8oslQ6sHbUAa@cluster0.xxxxx.mongodb.net/mern_db?retryWrites=true&w=majority';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connecté à MongoDB Atlas'))
.catch((err) => console.error('Erreur de connexion à MongoDB:', err));

// Middleware pour parser le JSON
app.use(express.json());

// Exemple de route
app.get('/', (req, res) => {
  res.send('API fonctionne !');
});

// Démarrer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});