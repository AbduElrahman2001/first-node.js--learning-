
const request = require("request")
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
module.exports = forcast