var request = require("request")
// const url = "http://api.weatherstack.com/current?access_key=aa989e7f65325d582ccd986bd1e4080b&query=egypt"

// request({url , json : true } , (error ,response)=>{
//     // console.log(response.body)
//     // const opj = JSON.parse(response.body)    //old way to convert json to object
//     console.log(response.body.current.weather_descriptions[0])
// })
// /////////////////////////////////////////////////////////////////////////////////////
// const url = "https://api.weatherapi.com/v1/current.json?key=25842936e00e4ee0961120433231103&q=egypt"

// request({url , json : true } , (error ,response)=>{

//     // console.log(response.body.current)

//     if (error){
//         console.log("URL is wrong")
//     }
//     else if(response.body.error){
//         console.log(response.body.error.message)
//     }
//     else{
//         console.log(response.body.location.name , response.body.current.text)
//     }
// })
//////////////////////////////////////////////////////////////////////////////////////////////////////
const geocodeURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/egypt.json?access_token=pk.eyJ1IjoiYWJkZXJhaG1hbjIwMDEiLCJhIjoiY2xmNWM3Z3J6MWI5OTN5bnppdHphOW43MyJ9.jAuOvg6KdbWJysg0t9T77A"

request({url:geocodeURL,json:true} , (error , response)=>{
    if(error){
        console.log("url is wrong")
    }
    else if(response.body.message){
        console.log(response.body.message)
    }
    else if(response.body.features.length == 0){
        console.log("unable to find location")
    }
    else{
        console.log(response.body.features[0].center[1])
    }
})

//////////////////////////////////////////////////////////////////////////////////////////

const forcast = (latitude, longtitud , back)=>{
const url ="https://api.weatherapi.com/v1/current.json?key=25842936e00e4ee0961120433231103&q="+latitude+","+longtitud
request ({url,json:true} ,(error,response)=>{
    if (error){
        back("unable to connect url",undefined)
      }
    else if(response.body.error){
        back(response.body.message, undefined)
      }
    else{
       back(undefined,response.body.location.name+"is"+response.body.current.condition.text)
      }
})
}
const forcast = require("./forcast")
forcast(29.871903452398,26.4941838299718,(error,data)=>{
  console.log("ERROR: "+error)
  console.log("DATA: "+data)
})

module.exports = geocodeURL






