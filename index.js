var express = require("express")
var app = express()

app.use(express.json());

var Teste = require("./model/teste")

app.get("/teste", async function(req, res) {
    var teste = await Teste.find()
    res.send( teste )
})

app.get("/teste/:id", async function(req, res) {
    
    var id = req.params.id

    var teste = await Teste.findById( id )

    res.send( teste )

})

app.post("/teste", async function(req, res) {
    var {palavra, numero} = req.body

    var retorno = await Teste.create({ palavra, numero })
        console.log(retorno)

        res.send("Sucesso")
})

app.put("/teste", async function(req, res) {

    var { _id, palavra, numero } = req.body

    var dados = await Teste.findById( _id )

    dados.palavra = palavra

    dados.numero = numero

    var retorno = await dados.save()

    console.log( retorno )

    res.send("Alteracao do Teste")
})

app.delete("/teste", async function(req, res) {
    var _id = req.body._id
    console.log( _id )
    //Exclusão, exclusão mesmo
    var del = await Teste.deleteOne({ _id })
        console.log(del)

        res.send("Alteracao de Excluido")

})



app.listen(80, function(req, res) {
    console.log("Servidor Online")
})

