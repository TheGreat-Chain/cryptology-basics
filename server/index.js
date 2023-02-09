const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const MD5 = require('crypto-js/md5');
const SHA256 = require("crypto-js/sha256");
const RIPEMD160 = require("crypto-js/ripemd160");
const CryptoJS = require("crypto-js");
const jssha3 = require("js-sha3");

app.use(bodyParser.json());
app.use(cors());

app.post('/hash', (req, res) => {
    let algo = req.body.chosenAlgo;
    let content = req.body.content;
    console.log("req : " + algo + " , " + content);

    let result;
    if(algo === "md5") {
        result = MD5(content);
    } else if(algo == "sha256") {
        result = SHA256(content);
    } else if(algo == "keccak512") {
        result = jssha3.keccak512(content);
    } else if(algo == "ripemd160") {
        result = RIPEMD160(content);
    } else {
        res.json({ message : "L'algorithme sélectionné n'est pas traité."});
    }

    res.json({ message : result.toString() });
});

app.post('/encrypt', (req, res) => {
    let algo = req.body.chosenAlgo;
    let content = req.body.content;
    let key = req.body.key;
    console.log("req : ", req.body);

    let result;
    if(algo === "aes") {
        result = CryptoJS.AES.encrypt(content, key);
    } else if(algo == "rsa") {
        res.json({ message : "L'algorithme sélectionné n'est pas encore traité."});
    } else {
        res.json({ message : "L'algorithme sélectionné n'est pas traité."});
    }

    res.json({ message : result.toString() });
});



app.listen(3000, () => {
    console.log('Le serveur écoute sur le port 3000');
});
