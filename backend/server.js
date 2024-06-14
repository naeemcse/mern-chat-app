const express = require("express")
var colors = require('colors');
// for .env file
require('dotenv').config()
const app = express()

const { chats } = require("./data/data")
const connectDB = require("./config/db")
const userRoutes = require("./route/userRoutes")
const chatRoutes = require("./route/chatRoutes")
const messageRoutes = require("./route/messageRoutes")
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

// User related API
app.use('/api/user',userRoutes)
// Chat related API
app.use('/api/chat',chatRoutes)
// Message sending reciving API
app.use('/api/message',messageRoutes)

// Error Handling middlewares
app.use(notFound);
app.use(errorHandler);


const PORT = process.env.PORT ;

const server =  app.listen(PORT, () => console.log(colors.yellow("Server running on port: "+PORT)))
const io = require("socket.io")(server, {
    pingTimeout: 60000,
    cors: {
        origin: "http://localhost:5173",
        // credentials: true,
    },
});

io.on("connection", (socket) => {
    console.log("Connected to socket.io");
    socket.on("setup", (userData) => {
        socket.join(userData._id);
        socket.emit("connected");
    });

    socket.on("join chat", (room) => {
        socket.join(room);
        console.log("User Joined Room: " + room);
    });
    socket.on("typing", (room) => socket.in(room).emit("typing"));
    socket.on("stop typing", (room) => socket.in(room).emit("stop typing"));

    socket.on("new message", (newMessageRecieved) => {
        var chat = newMessageRecieved.chat;

        if (!chat.users) return console.log("chat.users not defined");

        chat.users.forEach((user) => {
            if (user._id == newMessageRecieved.sender._id) return;

            socket.in(user._id).emit("message recieved", newMessageRecieved);
        });
    });

    socket.off("setup", () => {
        console.log("USER DISCONNECTED");
        socket.leave(userData._id);
    });
});