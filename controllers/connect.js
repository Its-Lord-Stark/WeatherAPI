const mongoose = require('mongoose')
async function connectDB()
{
await mongoose.connect(process.env.DATABASE_URL).then(console.log("Database connect"))
};


//Export
module.exports = connectDB;