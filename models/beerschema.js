const mongoose = require('mongoose')

const beerSchema = new mongoose.Schema({
    name: {type:String, required:true},
    style: {type:String, required:true},
    ibu: {type:Number, required:false},
    description: {type:String, required:true},
    abv: {type:String, required:true},
    img: {type:String, required:false}
});


const beerCollection = mongoose.model('Beers',beerSchema)

module.exports = beerCollection
