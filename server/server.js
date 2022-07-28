// import dependencies
const express = require("express")
const app = express()
const cors = require("cors")

// mongoose config
require('./configs/mongoose.config')

// express config
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))


// get the routes
const Routes = require('./routes/')
Routes(app)

// listen to port
app.listen(8000, () => console.log("Listening to port 8000"))