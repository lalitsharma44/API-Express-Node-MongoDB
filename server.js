require('./config/db');
const express = require('express')
const router = express.Router()

const path = require('path');
const bodyparser = require('body-parser')
const cors = require('cors');
const students = require('./students')
// const port = 8000

const app = express()
app.use(bodyparser.urlencoded({
    extended: true
}));

app.use(cors());
//  app.use(express.json)



//  parse requests of content-type - application/x-www-form-urlencoded
// app.use(bodyparser.urlencoded({ extended: true }))

app.use(bodyparser.json())



app.listen(4000, () => {
    console.log(`app listening at http://localhost:${4000}`)
})



app.get('/', (req, res) => {
    res.json({message:"hello lalit sharma"})
})


app.get('/api/data', (req, res) => {
    students.find(function(err,docs) {
        if (err) {
            res.send(err);
        } else {
            res.send(docs);
        }
    });
})

app.post('/api/students', (req, res) => {
    console.log(req.body)
    // if(!req.body.first_name) {
    //     res.status(400)
    //     return res.json({error:"first_name require"})
    // }
    //
    // const user = {
    //     id: students.length + 1,
    //     first_name: req.body.first_name,
    //     last_name: req.body.last_name,
    //     email: req.body.email
    // }
    //  // students.push(user)
    // res.json(user)
    // res.end()


    const prod=new students({
        // id: students.length + 1,
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        email: req.body.email,
        password: req.body.password
    });
    prod.save(function(err,result){
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
})


module.exports = router;
