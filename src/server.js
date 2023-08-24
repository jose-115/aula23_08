const express = require('express');
const app = express();
const PORT = 3000; // Escolha a porta que desejar
app.use(express.json())

let data = [];