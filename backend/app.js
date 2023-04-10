const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const mysql = require('mysql2');
const { compositeTrap } = require('./calculate/integration/Trapzoidal');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express')
const swgfile = require('./swagger.json')



const app = express();
app.use(cors());
app.use(bodyparser.json());


// const swaggerOptions = {
//     swaggerDefinition:{
//         info:{
//             title:'NUMER',
//             version: '1.0.0'
//         }
//     },
//     apis: ['./app.js'],
// };

// const swaggerSpec = swaggerJsDoc(swaggerOptions);

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swgfile));

/**  
* @swagger
* /test:
*   get:
*     description: Get all name
*     responses:
*        200:
*          description: SUCCESS
*/      

app.get('/test',(req,res)=>{
    res.send([
        {SUBJECT:'NUMER',FEELING: "ปวดหัว"}
    ])
})


/**
 * @swagger
 * /randomtrap:
 *   post:
 *     summary: สุ่มสมการ
 *     responses:
 *       200:
 *         description: เยี่ยมมากกกกกกกกกกกกกกก
 *     tags:
 *       - randomtrap
 */

app.post('/randomtrap',(req,res)=>{

    db.query(`SELECT * FROM intregrate ORDER BY RAND() LIMIT 1;`,(error, results, fields)=>{
        if(error){
            console.log('hehe');
        }   
        res.json(results);
    })
})

app.get('/simplefetch',(req,res)=>{
      db.query('SELECT * FROM intregrate',(err,result,fields)=>{
         if(err){
            console.log(err);
         }
         res.send(result)
      })
})



/**
 * @swagger
 * /caltrap:
 *   post:
 *     summary: "คำนวณ trap"
 *     consumes:
 *      - "application/json"
 *     produces:
 *      - "application/json"
 *     parameters:
 *      - in: body
 *        name: equation 
 *        description: "สมการ"
 *        required: true
 *        schema:
 *          type: object
 *          properties:
 *             equation:
 *                type: string
 *             xlower:
 *                type: number
 *             xupper:
 *                type: number
 *             n:
 *                type: number
 *     responses:
 *        200:
 *          description: "ผลลัพย์"
 * 
 * 
 */

app.post('/caltrap',(req,res)=>{
    const {equation,xlower,xupper,n} = req.body
    res.json(compositeTrap(equation,xlower,xupper,n))
})









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





  


app.listen(1234,()=>{
    console.log('RUNNING ON PORT 1234');
})
