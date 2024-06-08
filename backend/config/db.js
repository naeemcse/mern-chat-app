const mongoose = require('mongoose')
var colors = require('colors');
const connectDB = async ()=>{
    try{
        const conn = await  mongoose.connect(process.env.MONGODB_URI,{
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