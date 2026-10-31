const express = require("express")
const app = express();
const cors = require("cors")
const PORT = 5000




// middleware
app.use(cors())
app.use(express.json())



app.get("/", (req, res)=>{
    res.send("Studio's Express server is running")
})




app.listen(PORT, (req, res)=>{
    console.log("express server is running at ", PORT)
})