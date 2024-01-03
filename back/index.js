const express = require("express")
const port = process.env.PORT
import userRoutes from "./routes/userRoutes"

const app = express()

app.use("/api/users", userRoutes)

app.get("/", (req,res) => res.send("Serveur prêt à l'action "))

app.listen(port, () => console.log(`Serveur en marche sur le port ${port}`))