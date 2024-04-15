const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const functions = require('./functions');
const mysql_config = require('./mysql_config');
const app = express();


app.listen(3000, () => {
    console.log('Servidor em execução.');
})

app.use(cors());


// Criação da conexão
const connection = mysql.createConnection(mysql_config);

//Definindo uma rota
app.get('/', (req, res) => {

    connection.query('SELECT * FROM tasks', (err, results) => {
        // Cuidar do erro
        if (err) {
            res.json(functions.response('Deu ruim', 'Erro: ' + err.message));
        } else {
            res.json(functions.response('Deu boa', 'Taks listadas com sucesso.', results));
        }
    })
    
})











// // Criando um objeto para todos os endpoints da api
// let result = {
//     status: 'Sucesso',
//     message: null,
//     data: null
// }
// // Fazendo a conexão
// connection.query('SELECT * FROM tasks', (err, results) => {
//     // Cuidar do erro
//     if (err) {
//         result.status = 'Erro';
//         result.message = 'Erro na obtenção das tarefas';
//         result.data = [];
//         //res.send(result);
//         res.json(result);
//     } else {
//         result.status = 'Sucesso';
//         result.message = 'Tarefas obtidas com sucesso';
//         result.data = results;
//         //res.send(result);
//         res.json(result);
//     }
// })