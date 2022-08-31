//importar express
const express = require('express')
//executar express
const app = express()

//configurar a porta
const porta = process.env.PORT || 3000

//imporatr o paciiote cosign
app.use(express.urlencoded({extended:false}))
const consign = require('consign')
//executar
consign().include('./routes').into(app)

//definir a pasta
app.use(express.static('./src/'))

//definir o express com url


//definir os conteudos do acesso externo
module.exports = {app, porta}