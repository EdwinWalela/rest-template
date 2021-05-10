require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 3000;
const DB_URI = process.env.DB_URI;

// Routes
const authRoutes = require("./routes/authentication");

app.use(cors());
app.use(express.urlencoded({extended:true}))
app.use(express.json());

app.use('/api/auth',authRoutes);

app.get('/',(req,res)=>{
    res.status(200).send({
        msg:"OK"
    })
})

app.listen(PORT,()=>{
    console.log(`Listening for requests on port ${PORT}`);
})