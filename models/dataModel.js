const mongoose = require('mongoose');

//Creating MongoDB Schema
const dataSchema = mongoose.Schema(
{

    city: String,
    weather: {
      main: String,
      description: String
    },
    temperature: Number,
    pressure: Number,
    humidity: Number,
    timestamp: { type: Date, default: Date.now }

}
);

//Creating Model
const dataModel = mongoose.model('Data', dataSchema);


//Exports
module.exports = dataModel;