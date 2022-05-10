var express = require('express')
var path = require("path")
var app = express()
var bodyParser = require('body-parser');
var mysql = require('mysql');

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());



// const { connected } = require('process');
var connection = mysql.createConnection({
host: 'localhost',
user: 'root',
password: 'Ankit@0409',
database: 'kwik'
})

connection.connect()
console.log("connected")


app.use(express.static(path.join(__dirname,"public")))
app.use(express.static(path.join(__dirname,"src")))

app.post('/auth', function(req, res) {
	var username = (req.body.login)
	var password = (req.body.password)
    var loginstatus = false;
	if (username && password) {
        connection.query('select * from logindetails;', function (error,row) {
            if (error) throw error;
            console.log(" User Input \n pnumber: " + username + " password: " + password)
            
            for(var i=0;i<row.length;i++){
                console.log(" From Database \n pnumber: " + row[i].contact + " password: " + row[i].password)
                if(parseInt(username) === row[i].contact && password === row[i].password)
                {
                    console.log(" Login success")
                    loginstatus=true
                    break
                } 
                else {
                    loginstatus=false
                }			
            }
            if(loginstatus===true)
            {
                res.redirect('/auth')
            } 
            else{
                res.send('<h4>Incorrect Username and/or Password!</h4><a href="/" >Login again</a>')
            }
			res.end()
		})
	} 
    else {
        console.log('Error in Authentication')
		res.send('Please enter Username and Password!')
		res.end()
	}
});
app.post('/reg', function(req, res) {
	var name = (req.body.name)
    var email = (req.body.email)
    var pnumber = (req.body.pnumber)
    var password = (req.body.password)
    var confpassword = (req.body.confpassword)
    if (password != confpassword) {
        
        res.send("<script>alert('Passwords didnt matched');</script>");
      }
    console.log("Query Running ....");
    console.log("INSERT INTO accountdetails  VALUES (\'" + name + "\',\'" + email + "\',\'" + pnumber + "\',\'" + password + "\');");
    connection.query("INSERT INTO accountdetails VALUES (\'" + name + "\',\'" + email + "\',\'" + pnumber + "\',\'" + password + "\');",(err)=>{
        if (err) throw err;
    })
    connection.query("INSERT INTO logindetails VALUES (\'" + pnumber + "\',\'" + password + "\');",(err)=>{
        if (err) throw err;
        res.redirect("/");
    })
    console.log("values Inserted to database");
});
app.post('/add', function(req, res) {
	var fname = (req.body.fname)
    var lname = (req.body.lname)
    var email = (req.body.email)
    var pnumber = (req.body.pnumber)
    var address = (req.body.add)
    var state = (req.body.state)
    var city = (req.body.city)
    var pin = (req.body.pin)
        

    console.log("Query Running ....");
    console.log("INSERT INTO checkout  VALUES (\'" + fname + "\',\'"+ lname + "\',\'" + email + "\',\'" + pnumber + "\',\'"+ address + "\',\'"+ state + "\',\'"+ city + "\',\'"+ pin + "\');");
    connection.query("INSERT INTO checkout VALUES (\'" + fname + "\',\'"+ lname + "\',\'" + email + "\',\'" + pnumber + "\',\'"+ address + "\',\'"+ state + "\',\'"+ city + "\',\'"+ pin  + "\');",(err)=>{
        if (err) throw err;
        res.redirect("/confirm.html");
    })
    console.log("Adress Inserted to database");
});
app.get('/add',(req,res)=>{
    res.sendFile(path.join(__dirname + '/src/confirm.html'));
})
app.get('/auth',(req,res)=>{
    res.sendFile(path.join(__dirname + '/src/index2.html'));
})
app.get('/reg',(req,res)=>{
    res.sendFile(path.join(__dirname + '/src/index.html'));
})
const port = process.env.PORT || 3000;
app.listen(3000 ,()=>{
    console.log("Server is up and running at http://127.0.0.1:3000/");
});