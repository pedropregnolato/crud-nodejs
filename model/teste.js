var mongoose = require("./database")

var Teste = mongoose.Schema(
    {
        palavra: String,
        numero: Number
    }
)

const Testes = mongoose.model('teste', Teste)

module.exports = Testes