const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

app.post('/', (req, res) => {
    res.json({ message: 'Réponse à la requête POST' });
});

app.listen(3000, () => {
    console.log('Le serveur écoute sur le port 3000');
});
