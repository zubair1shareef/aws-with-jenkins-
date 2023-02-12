const express=require('express')
const dotenv=require('dotenv')
dotenv.config()
const app=express()
const port=4000;
app.get('/',(req,res)=>{
    res.send('<h1>aws deployment test</h1>')
})

app.listen(process.env.PORT,()=>{
    console.log(`server running on${process.env.MESSAGE} ${port}`)
})