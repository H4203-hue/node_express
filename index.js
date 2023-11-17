const express = require("express")
const path = require("path")

const app = express()

const caminhoBase = path.join(__dirname, "templates")

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())

//GET e POST
app.post ('/cadastrar/salvar', (requisicao, resposta) =>{
    const nome = requisicao.body.nome
    const email = requisicao.body.email
    const senha = requisicao.body.senha
})

app.get('/cadastrar', (requisicao, resposta) => {
    resposta.sendFile(`${caminhoBase}/cadastro.html`)
})

// https://localhost:3000/usuarios/:20
app.get('/usuarios/:id', (requisicao, resposta) => {
    const id = requisicao.params.id

    console.log(`Acessando dados do usuário ${id}`)

    resposta.sendFile(`${caminhoBase}/usuarios.html`)
})

// https://localhost:3000
app.get('/', (requisicao, resposta) => { 
    resposta.sendFile(`${caminhoBase}/index.html`)
})

app.listen(3000, () => {
    console.log("servidor rodando na portal 3000!")
})