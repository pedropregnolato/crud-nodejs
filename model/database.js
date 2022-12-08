const mongoose = require("mongoose")

try {

    const path = "mongodb+srv://pregs:pregnolato@pregs.htg8o38.mongodb.net/?retryWrites=true&w=majority"
    mongoose.connect(
        path
    )

    console.log("Conexão com o Mongo OK")
}
catch (e) {
    console.log(e)
}

mongoose.Promise = global.Promise

module.exports = mongoose