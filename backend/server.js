const express = require("express")
var colors = require('colors');
// for .env file
require('dotenv').config()
const app = express()

const { chats } = require("./data/data")
const connectDB = require("./config/db")
const userRoutes = require("./route/userRoutes")
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
connectDB()

app.use(express.json()) ; // to accept JSON Data
app.get("/", (req, res) => {
    console.log("Server is Running")
    res.send("Server is Running")
})
app.get("/api/chats", (req, res) => {
    res.send(chats)
    // console.log(chats)
})

//  for spesicfiq id
app.get('/api/chat/:id', (req, res) => {
    // console.log(req.params.id)
    const singleChat = chats.find((chat) => chat._id === req.params.id) ;
    res.send(singleChat)
})



app.use('/api/user',userRoutes)




// Error Handling middlewares
app.use(notFound);
app.use(errorHandler);




const PORT = process.env.PORT ;

app.listen(PORT, () => console.log(colors.yellow("Server running on port: "+PORT)))