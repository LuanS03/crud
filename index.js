 // config iniciais
 const { Console } = require('console')
const express = require('express')
 const { default: mongoose } = require('mongoose')
 const app = express()
 
  // Forma de ler JSQ / middlewars
 app.use(
     express.urlencoded({
         extended: true
     })
 )

     app.use(express.json())

  // rota inicial / endpoint
     app.get('/', (req, res) =>(

        // mostrar req
    
        res.json({message: 'oi express!'})

     ))
  // entregar uma porta
  const DB_USER = 'Kincas'
  const DB_PASSWORD = 'dXtZL3Z4IG0mHGcJ'
  mongoose.connect('mongodb+srv://Kincas:dXtZL3Z4IG0mHGcJ@apiclus.ztfws.mongodb.net/bancodaapi?retryWrites=true&w=majority')
 .then(() => {
     console.log("Conectamos ao MongoDB!")
    app.listen(3000)
 })
 .catch((err) => console.log(err))
