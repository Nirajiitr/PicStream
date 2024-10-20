import express, { urlencoded } from "express"
import "dotenv/config"

const PORT = process.env.PORT
const app = express()

//middlewere
app.use(express.json())
app.use(urlencoded({extended : true}))
const option ={
    origin : process.env.FRONTEND_BASE_URL,
    credentials : true
}
app.use(option)
//routes


//server

app.listen(PORT || 5000, ()=>{
    console.log(`server is listening no port: ${PORT}`)
})

