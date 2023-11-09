const express = require("express")
const path = require("path")

const app = express()

const caminhoBase = path.join(__dirname, "templates")

app.get('/', (requisicao, resposta) => {
    resposta.send("Estou funcionando com express")
    console.sendFile(`${caminhoBase}/index.html`)
})

app.listen(3000, () => {
    console.log("servidor rodando na portal 3000!")
})
""