const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const mysql = require('mysql2');
const { compositeTrap } = require('./calculate/integration/Trapzoidal');


const app = express();
app.use(cors());
app.use(bodyparser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user:'root',
  database: 'numer'
});

db.connect((err)=> {
  if (err) console.log(err);
  console.log('hehe');
});



app.post('/hehe',(req,res)=>{
    const {equation} = req.body

    let sql = `SELECT * FROM intregrate WHERE Equation = ?`
    db.query(sql,[equation],(error, results, fields)=>{
        if(error) {
            console.log('กาก');
        }   
        res.json(results)
    })
})

app.post('/caltrap',(req,res)=>{
    const {equation,xlower,xupper,n} = req.body
    res.json(compositeTrap(equation,xlower,xupper,n))
})

app.post('/randomtrap',(req,res)=>{

    db.query(`SELECT * FROM intregrate ORDER BY RAND() LIMIT 1;`,(error, results, fields)=>{
        if(error){
            console.log('hehe');
        }   
        res.json(results);
    })
})



  


app.listen(1234,()=>{
    console.log('RUNNING ON PORT 1234');
})
