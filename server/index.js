import express from "express"
const app = express()

const PORT = 5000
app.use(express.static("../client"))

app.get("/", (req, res) => {
  res.json({ data: "Works!" })
})

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`))
