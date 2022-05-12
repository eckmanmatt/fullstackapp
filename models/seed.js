module.exports = [
  {
    name: "Manhattan",
    recipe: "Add the bourbon (or rye), sweet vermouth and both bitters to a mixing glass with ice, and stir until well-chilled.
    Strain into a chilled coupe. Garnish with a brandied cherry or a lemon twist.",
    ingredients:[{
      ingredient: 'Rye Whiskey',
      quantity: 2,
      quantityType: 'ounces',
    },
    {
      ingredient: 'sweet vermouth',
      quantity: 1,
      quantityType: 'ounce',
    },
    {
      ingredient: 'Angostura bitters',
      quantity: 2,
      quantityType: 'dashes',
    },
    {
      ingredient: 'orange bitters',
      quantity: 1,
      quantityType: 'dash',
    }],
    garnishes:
    [{
      garnish: true,
      garnishName: 'brandied cherry or lemon twist',
    }]
  },
  {
    name: "Cosmopolitan",
    recipe: "Add the vodka, Cointreau, lime juice, and cranberry juice cocktail into a shaker with ice and shake until well-chilled. Strain into a chilled cocktail glass. Garnish with a lime wedge.",
    ingredients:[{
      ingredient: 'Citron Vodka',
      quantity: 1.5,
      quantityType: 'ounces',
    },
    {
      ingredient: 'Cointreau',
      quantity: .75,
      quantityType: 'ounces',
    },
    {
      ingredient: 'lime juice',
      quantity: .75,
      quantityType: 'ounce',
    },
    {
      ingredient: 'cranberry juice cocktail',
      quantity: .5,
      quantityType: 'ounce',
    }],
    garnishes:
    [{
      garnish: true,
      garnishName: 'lime wedge',
    }]
  }]
