const nodemailer = require('nodemailer')
const express = require("express")
const app = express()
const router = express.Router()
const path = require("path")

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname + "/home.html"))
})

app.get("/email.html", (req, res)=>{

    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth:{
            user: "alisson.tester69@gmail.com",
            pass: "1A2B3Clima"
        },
        tls:{
            rejectUnauthorized: false,
        }
    })
    
    function enviar(){
        transporter.sendMail({
           from: `Alisson Renan <alisson.tester69@gmail.com>`,
           to: "renalima.rl46@gmail.com",
           subject: `Spike - Mensagem de um usuário do seu portifólio chefe!`,
           text: `Teste do backend 2`, 
       
       }).then(m =>{
           console.log(m)
       }).catch(e =>{
           console.log(e)
       })
    
    }
    
    res.sendFile(path.join(__dirname + "/email.html"))
    enviar()
    console.log('enviado')
})

app.listen(8080, ()=>{
    console.log('foi na porta 8080')
})