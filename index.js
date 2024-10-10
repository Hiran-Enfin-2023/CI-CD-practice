const express = require('express');
const app = express();

const port = 3000;

app.get('/',(req,res)=>{
    res.send('Hello CI-CD Leaners');
})

app.post('/hello',(req,res)=>{
    const {name, email} = req.body;

    res.send({
        name:name,
        email:email
    })
})


app.listen(3000,()=>{
    console.log('Port listening on 3000')
})