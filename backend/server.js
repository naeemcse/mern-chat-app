const express = require("express")
const app = express()
const { chats } = require("./data/data")


app.get("/", (req, res) => {
    console.log("hello world")
    res.send("Hello World")
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






app.listen(5050, () => console.log("Server running on port 5050."))