const express = require('express');
const {json} = require('body-parser')
const cors =require('cors');
const session = require('express-session');
const passport = require('passport');
const massive = require('massive');
const strategy = require(`${__dirname}/strategy.js`);

const {connectionString}=require(`${__dirname}/config.js`)
const ic = require("./controllers/inventoryContr/inventoryContr");


const app = express();

app.use(json());
app.use(cors());
app.use(session({
    secret: 'suh dude',
    resave: false,
    saveUninitialized: false,
    cookie:{
        maxAge:100000
    }
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use( strategy );

massive(connectionString)
.then(db => {
  app.set("db", db);
})
.catch(console.log);



passport.serializeUser((user,done)=>{
    done(null,{
        id: user.id, 
        displayName: user.displayName,
        nickname: user.nickname, 
        email: user.email
    });
});

passport.deserializeUser((obj,done)=>{
    done(null,obj);
});


app.get('/login', passport.authenticate('auth0',{
    successRedirect:'http://localhost:3001/',
    failureRedirect:'/login',
    failureFlash: true
}));

app.get('/me', (req,res,next)=>{
    if(!req.user){
        res.redirect('/login')
    }else{
        return res.status('200').send(JSON.stringify(req.user,null,10));
    }
})


//inventory endpoints
//read
app.get('/api/inventory',ic.getDB)
//update
//app.put('/api/inventory/:id')
/////////////////////////////////////////////////////////////////////////
//cart endpoints


app.get('/api/test', (req,res)=>{
    res.status(200).json({message:'"hey you"-the backend'});
})

const port = 3001;
app.listen( port, () => { console.log(`"Asuh dude" - port ${port}`); } );