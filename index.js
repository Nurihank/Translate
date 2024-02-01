const express = require("express")

const app = express();

app.use(express.json());

app.listen(80,()=>{
    console.log("80 port dinleniyor")
})

