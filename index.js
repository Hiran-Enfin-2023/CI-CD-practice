const express = require('express');
const app = express();

const port = 5000;


app.get('/',(req,res)=>{
    res.send('Hello CI-CD Learning path');
})

app.post('/hello',(req,res)=>{
    const {name, email} = req.body;

    if(!name || !email){
        return "please enter details"
    }

    res.send({
        name:name,
        email:email
    })
})


app.listen(port,'0.0.0.0',()=>{
    console.log('Port listening on 5000')
})