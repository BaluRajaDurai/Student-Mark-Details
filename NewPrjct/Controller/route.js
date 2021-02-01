var express = require('express');
const router = express.Router();
const connection = require('../Model/database');
connection.connect(function(err)
{
    if(err)
        console.log(err);
    else
        console.log('Connected with Database');
});

router.get('/',function(req,res)
{
    res.send("Welcome To Server ");
});

router.get('/login',function(req,res)
{
    res.render('loginprjct');
});
router.post('/check', function(req,res)
{
    var email=req.body.email;
    var pwd = req.body.password;
    connection.query('SELECT * FROM studentdetails WHERE email LIKE ? AND password LIKE ?',[email,pwd],function(err,result)
    {
        if(result)
        {
            connection.query('SELECT studentdetails.name,studentdetails.rollno,studentdetails.email,studentmarks.subject1,studentmarks.subject2,studentmarks.subject3,studentmarks.subject4 FROM studentdetails JOIN studentmarks USING(rollno)',function(req,result1)
            {      
                res.render('Marksheet',{data:result1});
            });
        }
    });
});

router.get('/signup',function(req,res)
{
    res.render('signupprjct');
});

router.post('/validate',function(req,res)
{
    var name = req.body.name;
    var rollno=req.body.rollno;
    var email = req.body.email;
    var pwd = req.body.pass;
    connection.query('INSERT INTO studentdetails VALUES(?,?,?,?)',[rollno,name,email,pwd],function(err,result)
    {
        if(err)
            throw err;
        else
            console.log("Values Inserted Successfully");
    });
    res.render('loginprjct');
});

router.get('*',function(req,res)
{
    res.render('notfound');
});
module.exports = router;
