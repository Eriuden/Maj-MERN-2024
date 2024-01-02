const express = require("express")
const port = process.env.PORT

const app = express()

app.get("/", (req,res) => res.send("Serveur prêt à l'action "))

app.listen(port, () => console.log(`Serveur en marche sur le port ${port}`))