require('dotenv').config()
const express = require('express')
const connectDB = require('./DB/connect')
const app = express()
const userRouter = require('./Routes/routes')
const estateRouter = require('./Routes/estateRouter')
const cors = require('cors');

//middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res)=>{
    res.setHeader("Access-Control-Allow-Credentials", "true")
})

//routes
app.use('/user', userRouter)
app.use('/estate', estateRouter)


const start = async () =>{
    const port = 3001 
    try {
        await connectDB(process.env.MONGO_URL);
        app.listen(port, () => console.log(`Server is running on port ${port}`))
    } catch (error) {
        console.error(error)
    }
}
start();
