const express=require('express');
const app=express();
require('./connect/connect')
const Routes=require('./routes/route')

const PORT=5000;



app.use(express.json());
app.use("",Routes)

app.listen(PORT,()=>{
    console.log(`server is on ${PORT} `);
})