const mongoose = require('mongoose')

const recipeSchema = new Schema({
    name: {type: String, required: true },
    description: {type:String, required: false},
    alcoholic:{type:Boolean, required: true},
    recipe: {type: String, required: true },
    ingredients:
      [{
        ingredientName: String,
        quantity: {type: Number, required:false},
        quantityType: {type: String, required: false},
      }],
    garnishes:[{
            garnish:{type:Boolean, required:false},
              garnishName:{type:String, required:false}
            }],
});


const recipeCollection = mongoose.model('Drinks',recipeSchema)

module.exports = recipeCollection
