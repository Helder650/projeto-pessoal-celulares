import express from "express"
import celularesRouter from "./routes/celulares"

const app = express()
app.use(express.json())

// Rotas
app.use("/celulares", celularesRouter)

app.get("/", (_, res) => res.send("API de Celulares funcionando!"))

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
})
