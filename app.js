require("dotenv").config();
const _ = require("lodash");
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const fs = require("fs");
const https = require("https");
const ejs = require("ejs");
const app = express();
// const md5 = require("md5");
const bcrypt = require("bcrypt");
const saltRounds = 10;

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

///////////////////////////custDB section///////////////////////////////////////

const mongoose = require("mongoose");
// const encrypt = require("mongoose-encryption");
mongoose.connect("mongodb://127.0.0.1:27017/custDB", {useNewUrlParser: true});

const custSchema = new mongoose.Schema({
    email: String, 
    password: String
});

// custSchema.plugin(encrypt, {secret: process.env.SECRET, encryptedFields:["password"]});

const Cust = mongoose.model("Cust", custSchema); 

app.get("/", function(req, res){
    res.render("homesec");
});
app.get("/register", function(req, res){
    res.render("register");
});
app.get("/login", function(req, res){
    res.render("login");
});


app.post("/register", function(req, res){
    bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
        const newUser = new Cust({
            email: req.body.username, 
            password: hash
        });
        newUser.save(function(err){
            if(!err)
                res.render("home");
            else
                res.send(err);
        })
    });
});
app.post("/login", function(req, res){

    const username = req.body.username;
    const password = req.body.password;

    Cust.findOne({email: username}, function(err, foundUser){
        if(err)
            console.log(err);
        else{   //registered user
            if(foundUser){
                bcrypt.compare(password, foundUser.password, function(err, result) {//successful authentication
                    if(result == true)
                        res.render("home");// result == true
                });
                
            }
        }
    })
})
///////////////////////////////////////////////////////////////////////////////////////////


app.get("/home", function(req, res){
    res.render("home");
});
app.get("/search", function(req, res){
    fs.readFile('items.json', function(error, data){
        if(error){
            res.status(500).end()
        }
        else{
            res.render('search', {
                // stripePublicKey: stripePublicKey,
                items: JSON.parse(data)
            })
        }
    })
});
app.get("/product", function(req, res){
    fs.readFile('items.json', function(error, data){
        if(error){
            res.status(500).end()
        }
        else{
            res.render('product.ejs', {
                // stripePublicKey: stripePublicKey,
                items: JSON.parse(data)
            })
        }
    })
});
app.get("/hoodies", function(req, res){
    fs.readFile('items.json', function(error, data){
        if(error){
            res.status(500).end()
        }
        else{
            res.render('hoodies.ejs', {
                // stripePublicKey: stripePublicKey,
                items: JSON.parse(data)
            })
        }
    })
});
app.get("/dresses", function(req, res){
    fs.readFile('items.json', function(error, data){
        if(error){
            res.status(500).end()
        }
        else{
            res.render('dresses.ejs', {
                // stripePublicKey: stripePublicKey,
                items: JSON.parse(data)
            })
        }
    })
});
app.get("/cart", function(req, res){
    fs.readFile('items.json', function(error, data){
        if(error){
            res.status(500).end()
        }
        else{
            res.render('cart', {
                // stripePublicKey: stripePublicKey,
                items: JSON.parse(data)
            })
        }
    })
});
app.get("/wishlist", function(req, res){
    // fs.readFile('items.json', function(error, data){
    //     if(error){
    //         res.status(500).end()
    //     }
    //     else{
    //         res.render('wishlist', {
    //             // stripePublicKey: stripePublicKey,
    //             items: JSON.parse(data)
    //         })
    //     }
    // });
    res.render("wishlist");
});
app.get("/contact", function(req, res){
    res.render("contact");
});
app.get("/faq", function(req, res){
    res.render("faq");
});

app.post("/contact", function(req, res){
    console.log(" Request posted!");
    var name = req.body.name;
    var email = req.body.mail;
    var query = req.body.query;

    console.log(name, email + "\n" + query);
});


app.listen(3000, function(err){
    if(err){
        console.log(err);
    }else{
        console.log("Server Running");
    }
});
