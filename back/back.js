const express = require("express") 
const app = express()
const question = require('./question.json')
const cors = require('cors')
const bodyParser = require('body-parser');
const fs = require ("fs")

app.use(express.static('client/build'));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());


app.get("/question/:id",(req,res)=>{
    id=param
    question.find(quest => quest.id ===id)
})
app.get("/question",(req,res)=>{
    res.json(question)
})
app.post("/add",(req,res)=>{
    console.log(req.body)
    let setQuestion = question
    
    setQuestion.push(req.body)

    setQuestion = JSON.stringify(setQuestion,null,2)
    fs.writeFileSync("./question.json",setQuestion)
    res.status(201).json(setQuestion)
   
})
app.listen(5000,()=>{
    console.log("Server listening port 5000")
})