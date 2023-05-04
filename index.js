const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const data = require('./chef-data.json');

app.get('/', (req, res)=>{
    res.send('Hello Server');
})

app.get('/data', (req, res)=>{
    res.send(data);
})

app.get('/data/:id', (req, res) =>{
    const id = req.params.id;
    const singleData = data.find(sd => sd._id === id);
    res.send(singleData);
})

app.listen(port, ()=>{
         console.log(`Server is running: ${port}`);
})