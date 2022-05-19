const express = require('express')
const router = express.Router()
const Beers = require('../models/beerschema.js')

const seedData = require('../models/seed.js')



// import seedData
router.get('/seed',(req,res) => {
  Beers.create(seedData,(error,data) => {
    res.send('seed data added')
  })
})





//delete entry
router.get('/library/:id/delete',(req,res) => {
  Beers.findById(req.params.id,(error,data) => {
    res.render('delete.ejs',{
      beer:data,
      titleTag:'Delete'
    })
  })
})

router.delete('/library/:id/',(req,res) => {
  Beers.findByIdAndRemove(req.params.id,(error,data) => {
    res.redirect('/beer/library/')
  })
})



//show entry
router.get('/library/:id/show',(req,res) => {
  Beers.findById(req.params.id,(error,selectedBeer) => {
    res.render('show.ejs',{
      titleTag: 'Beer Details',
      beer:selectedBeer
    })
  })
})



//edit entries
router.get('/library/:id/edit',(req,res) => {
Beers.findById(req.params.id, (error,foundBeer) => {
  res.render('edit.ejs',{
    beer: foundBeer,
    titleTag: 'Edit'
  })
})
})

router.put('/library/:id/', (req,res) => {
  Beers.findByIdAndUpdate(req.params.id, req.body,{new:true},(error,updatedBeer) => {
    if(error){
      console.log(error);
    }else{
    res.redirect('/beer/library/')
  }
    })
  })

// redirect
router.get('/',(req,res) => {
  res.redirect('/beer/home')
})


  //home route
  router.get('/home',(req,res) => {
      res.render('home.ejs',{
        titleTag:'Home'
      })
  })



  //library route
  router.get('/library',(req,res) => {
    Beers.find({},(error,allBeers) => {
      res.render('index.ejs',
    {
      beer: allBeers,
      titleTag: 'Library'
    })
    })
  })

  //add new entry
  router.get('/library/addnew',(req,res) => {
    res.render('add.ejs',{
      titleTag:'Add to Library'
    })
  })

  router.post('/library/',(req,res) => {
    Beers.create(req.body,(error,addNew) => {
      res.redirect('/beer/library')
    })
  })




  module.exports = router
