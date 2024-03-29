const express = require ('express')
const colors  = require ('colors')
const moragan = require ('morgan')
const dotenv = require ('dotenv')

//dotenv config 
dotenv.config

//reset object 
const app = express();

//middlewares 
app.use(express.json());
app.use(moragan('dev'));

//routes 
app.get("/", (req,res) => {
    res.status(200).send({
        message: "Server running",
    });
});

//port 
const port =  process.env.PORT || 8080
app.listen(port, () =>{
    console.log(`Server Running in ${process.env.NODE_MODE} Mode on port ${process.env.PORT}`
    .bgCyan.white 

    );
});