import express from "express"

const router = express.Router()

type Celular = {
  id: number
  modelo: string
  marca: string
  preco: number
};

let celulares: Celular[] = [
  { id: 1, modelo: "iPhone 14", marca: "Apple", preco: 4999 },
  { id: 2, modelo: "Samsung S23", marca: "Samsung", preco: 3899 },
  { id: 3, modelo: "Xiaomi Redmi Note 12", marca: "Xiaomi", preco: 1399 },
]

router.get("/", (_, res) => res.json(celulares))

router.get("/:id", (req, res) => {
  const celular = celulares.find(c => c.id === Number(req.params.id))
  if (!celular) return res.status(404).json({ erro: "Celular não encontrado" })
  res.json(celular)
})

router.post("/", (req, res) => {
  const novoCelular = req.body as Celular
  celulares.push(novoCelular)
  res.json(novoCelular)
})

export default router;
