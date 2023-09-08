const express = require('express')
const app = express()
const port = 5000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.get('/sales', (req, res) => {
  res.send({
    name : "abdo",
    age :22,
  })
})
app.get('/about', (req, res) => {
  res.send('<h2>abdo</h2> <button>click</button>')
})
///////////////////////////////

const path = require ("path")

const x = path.join(__dirname,"../public")
app.use(express.static(x))
///////////////////////////////////////////

app.set("view engine", "hbs")

const viewsDirectory = path.join(__dirname , "../static/views")
app.set("views" , viewsDirectory)

var hbs = require("hbs")
const { title } = require('process')

const partialsPath = path.join(__dirname , "../static/partials")
hbs.registerPartials(partialsPath)
//////////////////////////////////////////////
app.get("/service", (req , res)=>{
  res.render("service",{
    model : 2021,
    name : "BMW",
    title :"service"
  })
})
///////////////////////
app.get("/plog" , (req ,res)=>{
  res.render("plog",{
    name : "this is plog page",
    title :"plog"
  })
})
//////////////////////////request//////////////////////////////////////

const geocode = require("./tools/forcast")
const forcast = require("./tools/forcast")

app.get("/weather" , (req , res)=>{
  if (!req.query.address){
    return res.send({
      error:"you must enter an address"
    })
  }
  geocode(res.query.address , (error , data)=>{
    if(error){
      return res.send({error})
    }
    forcast(data.latitude , data.longtitud ,(error,forcastData)=>{
      if(error){
        return res.send(error)
      }
      res.send({
        forcast : forcastData,
        location : req.query.address
      })
    })
  })
})










//////////////error///
app.get('*' , (req, res)=>{
  res.send("404 page not fund")
})
////////////////////////////////
app.listen(port, () => {
  console.log(`all done ${port}`)
})