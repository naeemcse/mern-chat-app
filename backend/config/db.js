const mongoose = require('mongoose')
var colors = require('colors');
const connectDB = async ()=>{
    const uri = process.env.MONGODB_URI || "mongodb+srv://csenajmulislamnaeem:csenaeem019@cluster0.aqqhics.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    try{
        const conn = await  mongoose.connect(uri,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(colors.bgBlue(`Connected to MongoDB...:: ${conn.connection.host}`));

    }catch(err){
console.error("MongoDB connection error:", err.message);
process.exit();
    }
}

module.exports = connectDB;