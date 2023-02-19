const _ = require("lodash");
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const fs = require("fs");
const https = require("https");
const ejs = require("ejs");
const app = express();

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
    res.render("home");
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
