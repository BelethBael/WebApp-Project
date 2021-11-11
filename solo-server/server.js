const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "123456789",
    database : "cdkey",
})

app.get('/showdata', (req,res) => {
    db.query("SELECT * from product", (error, result) => {
        if(error){
            console.log(error);
        }
        else{
            // console.log(result);
            res.send(result)
        }
    })
})

// email: ""
// id: 6650
// img: "https://cdn.discordapp.com/attachments/381078258562760716/907145514787692594/elden-ring-pc-game-steam-cover.png"
// invoiceID: "331450"
// name: "ELDEN RING"
// platform: "STEAM"
// price: 1499
// quantity: 2
// region: "WORLDWIDE"

app.post('/create_invoice', (req, res) => {
    const data = req.body;
    // console.log(data);
    for(let i = 0; i<data.length; i++){
        // console.log(data[i])
        const invoiceID = data[i].invoiceID
        const id = data[i].id
        const quantity = data[i].quantity
        const email = data[i].email

        db.query("INSERT INTO invoice (invoiceID, id, quantity, email) VALUES(?,?,?,?)", [invoiceID,id,quantity,email])
    }
    console.log("Post Success!!!");
    // res.send("asdasd")
})

// DELETE FROM `invoice` WHERE invoiceID='331450'

app.listen('3001', ()=> {
    console.log("Server is running on post 3001");
})