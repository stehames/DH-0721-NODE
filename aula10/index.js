 //importando o modulo express
const express = require('express')
const uuid = require('uuid')

//instanciando/criando a aplicacao express e armazenado na variavel app
//para que seja possivel acessar os metodos/recursos do express
const app = express()

app.use(express.json());

app.post('/usuarios', (req,res) => {
    const{nome, sobrenome} = req.body;
    const usuario = {id}
})

app.listen(3333, () => {
    console.log('Servidor rodando na porta http://localhost:3333')
})