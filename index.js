const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
require("dotenv").config()
const app = express()
// const path = require("path")
app.use(express.static("dist"))
app.use(cors({ origin: "https://hosting-practice-r7w8.onrender.com" }))

app.use(express.json()) // 👈 body parser
app.use("/api/notes", require("./routes/todo.routes"))

mongoose.connect(process.env.MONGO_URL)
mongoose.connection.once("open", () => {
    console.log("db connected")
    app.listen(process.env.PORT, console.log("server running on 5000"))
})