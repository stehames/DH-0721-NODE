const express = require('express')
 const bodyParser = require('body-parser')
 const app = express()
 
app.use(bodyParser.urlencoded({ extended: true }))

 let nomes = ["Stephanie", "Nick", "Raphael", "George"]
 
 app.get('/usuarios', (req, res) => {
     return res.send('hello');
 })
 app.set('view engine', 'ejs')

app.get('/', (req,res) => {
    res.render('index.ejs')
})

app.post('/show', (req,res) => {
    console.log(req.body)
})
 app.listen(3333, () => {
     console.log('Servidor rodando na porta http://localhost:3333')
 })
 
 
 // app.post('/usuario', (req, res) => {
 //     res.send(["Stephanie", "Nick", "Raphael", "George"])
 // });
 
 // app.put('/usuarios/:id', (req, res) => {
 //     return res.send(nomes);
 //  })
  
  //app.delete('usuarios/:id')
 
 
 

