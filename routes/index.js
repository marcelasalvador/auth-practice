// 1. server.js:  require express, set public folder, set router
//     1. create index.js, then in index.js require express and set router, render index.hbs add module.exports add home page routes

const express = require("express")
const router = express.Router()

router.get ("/", (req, res) => {
    // res.send("hello world")
    res.render("index")
})

module.exports = router
