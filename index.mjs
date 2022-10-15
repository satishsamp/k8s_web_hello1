import express from 'express'
import os from 'os'

// adding status code here.
// here i am adding text from Lenovo laptop
// this is second comment from Lenovo laptop.
const app = express()
const PORT = 3000
app.get("/",(req,res)=> {
    const helloMessage =`Hello from the ${os.hostname}`
    console.log(helloMessage)
    res.send(helloMessage)
})

app.listen(PORT,()=>{
    console.log(`Web server is listening at port ${PORT}`)
})