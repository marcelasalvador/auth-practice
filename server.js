// 1. server.js:  require express, set public folder, set router
//     1. create index.js, then in index.js require express and set router, add module.exports add home page routes

const express = require("express");
const app = express()

const indexRouter = require("./routes/index")

//3. tell server that we're using hbs syntax, set views directory, set public folder

app.set("view-engine", "hbs")
app.set("views", __dirname + "/views")
app.use(express.static("public"))

//8. Integrate MongoDB
// 1. npm i mongoose
// 2. server.js: require mongoose, setup connection to database
// const mongoose = require("mongoose")
// // const MongoStore = require('connect-mongo');

const db = mongoose.connect('mongodb://localhost:27017/auth-practice')
  .then(x => console.log(`connected to db ${x.connections[0].name}`))
  .catch(err => console.log(err));
  

//1 continued
app.use("/", indexRouter)

// 7. tell express to use form  from request variable inside of post method
app.use(express.urlencoded({ extended: false}))





// 4. create routes folder and routes for website pages. create views folder and .hbs files.Render hbs files. check browser to see if pages are rendering.
//     1. create layout.hbs, add boiletplate html and {{{body}}}

app.get("/", (req,res) => {
    res.render("index.hbs", {name: "marcela"})
})

app.get("/login", (req,res) => {
    res.render("login.hbs")
})

app.post("/login", (req,res) => {
    
})

app.get("/register", (req,res) => {
    res.render("register.hbs",(req,res)
    
    
    )
})

app.post("/register", (req,res) => {
    req.body.email
})

//2. start server in port 3000
app.listen(3000, console.log("server listening on port 3000"))
