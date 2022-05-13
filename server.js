//___________________
//Dependencies
//___________________
const express = require('express');
const methodOverride  = require('method-override');
const mongoose = require ('mongoose');
const app = express ();
const db = mongoose.connection;
require('dotenv').config()

const Beers = require('./models/beerschema.js')
const seedData = require('./models/seed.js')

// import seedData
app.get('/seed',(req,res) => {
  Beers.create(seedData,(error,data) => {
    res.send('seed data added')
  })
})

//___________________
//Port
//___________________
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT

//___________________
//Database
//___________________
// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI;

// Connect to Mongo &
// Fix Depreciation Warnings from Mongoose
// May or may not need these depending on your Mongoose version

mongoose.connect('mongodb://localhost:27017/beers',() => {
  console.log('connected to local');
})
// mongoose.connect(MONGODB_URI , () => {
//   {console.log('connected to mongo atlas')}}
// )

// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
// db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

//___________________
//Middleware
//___________________

//use public folder for static assets
app.use(express.static('public'));

// populates req.body with parsed info from forms - if no data from forms will return an empty object {}
app.use(express.urlencoded({ extended: false }));// extended: false - does not allow nested objects in query strings
app.use(express.json());// returns middleware that only parses JSON - may or may not need it depending on your project

//use method override
app.use(methodOverride('_method'));// allow POST, PUT and DELETE from a form


//___________________
// Routes
//___________________
//localhost:3000

//add new entry
app.get('/library/addnew',(req,res) => {
  res.render('add.ejs',{
    titleTag:'Add to Library'
  })
})

//delete entry
app.get('/library/:id/delete',(req,res) => {
  Beers.findById(req.params.id,(error,data) => {
    res.render('delete.ejs',{
      beer:data
    })
  })
})

app.delete('/library/:id/',(req,res) => {
  Beers.findByIdAndRemove(req.params.id,(error,data) => {
    res.redirect('/library')
  })
})

//show entry
app.get('/library/:id/show',(req,res) => {
  Beers.findById({id:req.params.id},(error,selectedBeer) => {
    res.render('show.ejs',{
      titleTag: 'Beer Details',
      beer:selectedBeer
    })
  })
})

//edit entries
app.get('/library/:id/edit',(req,res) => {
  Beers.findById(req.params.id, (error,foundBeer) => {
  res.render('edit.ejs',{
    beer: foundBeer,
  })
})
})

app.put('/library/:id/', (req,res) => {
  Beers.findByIdAndUpdate(req.params.id, req.body,{new:true},(error,updatedBeer) => {
    res.redirect('/library/:id/show')
    })
  })



//home route
app.get('/home',(req,res) => {
    res.render('home.ejs',{
      titleTag:'Home'
    })
})

//library route
app.get('/library',(req,res) => {
  Beers.find({},(error,allBeers) => {
    res.render('index.ejs',
  {
    beer: allBeers,
    titleTag: 'Library'
  })
  })
})

app.post('/library',(req,res) => {
  Beers.create(req.body,(error,addNew) => {
    res.redirect('/library/')
  })
})




//___________________
//Listener
//___________________
app.listen(PORT, () => console.log( 'Listening on port:', PORT));
