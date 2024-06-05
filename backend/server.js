const express = require("express")
// for .env file
require('dotenv').config()

const app = express()
const { chats } = require("./data/data")
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

const PORT = process.env.PORT ;

app.listen(PORT, () => console.log("Server running on port: "+PORT))