const express = require("express")
const {notFound, errorHandler} = require("./middleware/errorMiddleware")
const port = process.env.PORT
import cookieParser from "cookie-parser"
import userRoutes from "./routes/userRoutes"
import connectDB from "./config/db"

connectDB()

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use(cookieParser())

app.use("/api/users", userRoutes)

app.get("/", (req,res) => res.send("Serveur prêt à l'action "))

app.use(notFound)
app.use(errorHandler)

app.listen(port, () => console.log(`Serveur en marche sur le port ${port}`))