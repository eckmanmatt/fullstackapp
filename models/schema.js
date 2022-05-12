const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
  drinkName: {type:String, required:true},
  alcoholic: {type:Boolean, required:true},
  description: {type:String, required: false},
  image: String,
  ingredients:[{
    ingredient: {type:String, required:true},
    quantity: {type: Number, required:false},
    quantityType: {type:String, required:false}
  }]
})

const recipeCollection = mongoose.model('Drinks',recipeSchema)

module.exports = recipeCollection
