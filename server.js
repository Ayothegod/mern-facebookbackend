const express = require('express')
const app = express()
const port = process.env.PORT || 3001

app.get('/',(req,res) => {
    res.send("Hello to npm hello bro")
})

app.listen(port,() => console.log('Welcome to the web server'))