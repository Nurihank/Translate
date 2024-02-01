const express = require("express")
const translate = require('translate-google')
const bodyParser = require("body-parser"); //postmanden gelenler body haline getirebilmek için

const app = express(); 

app.use(express.json());    //verileri json formatına çeviriyor  
app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({
    extended:true
}))

app.listen(3000,()=>{ 
    console.log("3000 port dinleniyor")
})

const msg = "book" //postmanden gelenleri alabilmek için
const to = "ar"
 
async function trans(){
    const translation = await translate(msg, {from:"auto",to:to})
    console.log(translation)
}

trans();


app.post("/translate",async(req,res)=>{ 

    const msg = req.body.msg //postmanden gelenleri alabilmek için
    const to = req.body.to
    
    const translation = await translate(msg, {from:"auto",to:to})
    res.status(200).json({translation})
})