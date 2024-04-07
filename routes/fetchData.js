const axios = require('axios')
const dataModel = require('../models/dataModel')
const express = require('express');
const Api = process.env.OPENWEATHER_API_KEY;
const router = express.Router();


//First route to post the details in local database from third party API
router.post('/takestore/:city' , async(req,res)=>{
    try
    {
    const city = req.params.city;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api}`;
   
    const response = await axios.get(url);
    const dataObject = response.data;

    const weatherData = new dataModel(
        {
            city: dataObject.name,
            weather:{
                main:dataObject.weather[0].main,
                description: dataObject.weather[0].description,
            },
            temperature: dataObject.main.temperature,
            pressure: dataObject.main.pressure,
            humidity: dataObject.main.humidity,
        }
    );
    await weatherData.save();
    res.send("Data stored succesfully");
}
catch (error)
{
console.error('Error in request',error);
res.status(500).send('Error fetchin data');
}

});



//Seccond route to fetch that data and show on screen

router.get('/fetch/:city' , async(req,res)=>{
    try{
    const city = req.params.city;
    
        const response = await dataModel.findOne({'city':city});
        res.json(response);
    }
    catch(error){
    console.error('Error retrieving data:', error);
    res.status(500).send('Error retrieving data');
    }
})




//Exports
module.exports = router;