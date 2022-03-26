import { Ingredient } from 'models/ingredient';

export function getIngredients() {
    return [...currentIngredients].sort((a, b) => a.name.localeCompare(b.name));
}

const currentIngredients: Ingredient[] = [
    { id: 1, name: 'Vodka', type: 'Vodka', ABV: 40 },
    { id: 2, name: 'Gin', type: 'Gin', ABV: 40 },
    { id: 4, name: 'Tequila', type: 'Spirit', ABV: 40 },
    { id: 67, name: 'Blue Curacao', type: 'Liqueur', ABV: null },
    { id: 71, name: 'Bourbon', type: 'Whiskey', ABV: null },
    { id: 106, name: 'Cherry', type: 'null', ABV: null },
    { id: 128, name: 'Coca-Cola', type: 'Soft Drink', ABV: null },
    { id: 250, name: 'Grenadine', type: 'Syrup', ABV: null },
    { id: 293, name: 'Lemon Juice', type: 'null', ABV: null },
    { id: 299, name: 'lemon', type: 'Fruit', ABV: null },
    { id: 300, name: 'Lemonade', type: 'Soft Drink', ABV: null },
    { id: 305, name: 'Light Rum', type: 'Rum', ABV: null },
    { id: 308, name: 'Lime Juice', type: 'null', ABV: null },
    { id: 312, name: 'Lime', type: 'Fruit', ABV: null },
    { id: 322, name: 'Maraschino Cherry', type: 'null', ABV: null },
    { id: 337, name: 'Mint', type: 'Flower', ABV: null },
    { id: 352, name: 'Orange Juice', type: 'null', ABV: null },
    { id: 359, name: 'Orange', type: 'Fruit', ABV: null },
    { id: 393, name: 'Pineapple Juice', type: 'null', ABV: null },
    { id: 409, name: 'Powdered Sugar', type: 'null', ABV: null },
    { id: 439, name: 'Salt', type: 'Mineral', ABV: null },
    { id: 455, name: 'Soda Water', type: 'null', ABV: null },
    { id: 470, name: 'Strawberries', type: 'Fruit', ABV: null },
    { id: 473, name: 'Strawberry Schnapps', type: 'Liquor', ABV: null },
    { id: 476, name: 'Sugar', type: 'null', ABV: null },
    { id: 483, name: 'Tabasco Sauce', type: 'null', ABV: null },
    { id: 492, name: 'Tomato Juice', type: 'Soft Drink', ABV: null },
    { id: 497, name: 'Tonic Water', type: 'Soft Drink', ABV: null },
    { id: 498, name: 'Triple Sec', type: 'Liqueur', ABV: null },
    { id: 529, name: 'Worcestershire Sauce', type: 'Sauce', ABV: null },
];

// prettier-ignore
const Ingredients: Ingredient[] = [
    { id: 1, name: "Vodka", type: "Vodka", ABV: 40, },
    { id: 2, name: "Gin", type: "Gin", ABV: 40, },
    { id: 3, name: "Rum", type: "Rum", ABV: 40, },
    { id: 4, name: "Tequila", type: "Spirit", ABV: 40, },
    { id: 5, name: "Scotch", type: "Whisky", ABV: null, },
    { id: 6, name: "Absolut Kurant", type: "Vodka", ABV: 40, },
    { id: 7, name: "Absolut Peppar", type: "Vodka", ABV: 40, },
    { id: 8, name: "Absolut Vodka", type: "Vodka", ABV: 40, },
    { id: 9, name: "Advocaat", type: "Spirit", ABV: 17, },
    { id: 10, name: "Aejo Rum", type: "Rum", ABV: 38, },
    { id: 11, name: "Aftershock", type: "Spirit", ABV: 30, },
    { id: 12, name: "Agave Syrup", type: "Syrup", ABV: null, },
    { id: 13, name: "Ale", type: "Beer", ABV: 4, },
    { id: 14, name: "Allspice", type: "null", ABV: null, },
    { id: 15, name: "Almond Extract", type: "null", ABV: null, },
    { id: 16, name: "Almond Flavoring", type: "null", ABV: null, },
    { id: 17, name: "Almond", type: "null", ABV: null, },
    { id: 18, name: "Amaretto", type: "Liqueur", ABV: 28, },
    { id: 19, name: "Angelica Root", type: "null", ABV: null, },
    { id: 20, name: "Angostura Bitters", type: "Bitter", ABV: null, },
    { id: 21, name: "Anis", type: "null", ABV: null, },
    { id: 22, name: "Anise", type: "null", ABV: null, },
    { id: 23, name: "Anisette", type: "null", ABV: null, },
    { id: 24, name: "Aperol", type: "Liqueur", ABV: 11, },
    { id: 25, name: "Apfelkorn", type: "null", ABV: 18, },
    { id: 26, name: "Apple Brandy", type: "Brandy", ABV: 35, },
    { id: 27, name: "Apple Cider", type: "Cider", ABV: 5, },
    { id: 28, name: "Apple Juice", type: "null", ABV: null, },
    { id: 29, name: "Apple Schnapps", type: "Liquor", ABV: 18, },
    { id: 30, name: "Apple", type: "null", ABV: null, },
    { id: 31, name: "Applejack", type: "Beverage", ABV: 40, },
    { id: 32, name: "Apricot Brandy", type: "Brandy", ABV: 24, },
    { id: 33, name: "Apricot Nectar", type: "null", ABV: null, },
    { id: 34, name: "Apricot", type: "null", ABV: null, },
    { id: 35, name: "Aquavit", type: "null", ABV: null, },
    { id: 36, name: "Asafoetida", type: "null", ABV: null, },
    { id: 37, name: "Añejo Rum", type: "Rum", ABV: 38, },
    { id: 39, name: "Bacardi Limon", type: "Rum", ABV: 32, },
    { id: 40, name: "Bacardi", type: "Rum", ABV: 38, },
    { id: 43, name: "Baileys Irish Cream", type: "Liqueur", ABV: 13, },
    { id: 44, name: "Banana Liqueur", type: "Liqueur", ABV: null, },
    { id: 45, name: "Banana Rum", type: "Rum", ABV: null, },
    { id: 46, name: "Banana Syrup", type: "null", ABV: null, },
    { id: 47, name: "Banana", type: "null", ABV: null, },
    { id: 48, name: "Barenjager", type: "null", ABV: null, },
    { id: 49, name: "Basil", type: "null", ABV: null, },
    { id: 51, name: "Beef Stock", type: "null", ABV: null, },
    { id: 52, name: "Beer", type: "Beer", ABV: 4, },
    { id: 53, name: "Benedictine", type: "null", ABV: null, },
    { id: 54, name: "Berries", type: "null", ABV: null, },
    { id: 55, name: "Bitter lemon", type: "null", ABV: null, },
    { id: 56, name: "Bitters", type: "null", ABV: null, },
    { id: 57, name: "Black Pepper", type: "null", ABV: null, },
    { id: 58, name: "Black Rum", type: "Rum", ABV: null, },
    { id: 59, name: "Black Sambuca", type: "Sambuca", ABV: null, },
    { id: 60, name: "Blackberries", type: "null", ABV: null, },
    { id: 61, name: "Blackberry Brandy", type: "Brandy", ABV: null, },
    { id: 62, name: "Blackberry Schnapps", type: "Liquor", ABV: null, },
    { id: 63, name: "Blackcurrant Cordial", type: "null", ABV: null, },
    { id: 64, name: "Blackcurrant Schnapps", type: "Liquor", ABV: null, },
    { id: 65, name: "Blackcurrant Squash", type: "null", ABV: null, },
    { id: 66, name: "Blended Whiskey", type: "Whiskey", ABV: 40, },
    { id: 67, name: "Blue Curacao", type: "Liqueur", ABV: null, },
    { id: 68, name: "Blue Maui", type: "null", ABV: null, },
    { id: 69, name: "Blueberries", type: "null", ABV: null, },
    { id: 70, name: "Blueberry Schnapps", type: "Liquor", ABV: null, },
    { id: 71, name: "Bourbon", type: "Whiskey", ABV: null, },
    { id: 74, name: "Brandy", type: "Spirit", ABV: null, },
    { id: 77, name: "Brown Sugar", type: "null", ABV: null, },
    { id: 79, name: "Butter", type: "null", ABV: null, },
    { id: 80, name: "Butterscotch Schnapps", type: "Liquor", ABV: null, },
    { id: 81, name: "Cachaca", type: "Spirit", ABV: null, },
    { id: 82, name: "Calvados", type: "null", ABV: null, },
    { id: 83, name: "Campari", type: "null", ABV: null, },
    { id: 84, name: "Canadian Whisky", type: "Whiskey", ABV: null, },
    { id: 85, name: "Candy", type: "null", ABV: null, },
    { id: 86, name: "Cantaloupe", type: "null", ABV: null, },
    { id: 87, name: "Caramel Coloring", type: "null", ABV: null, },
    { id: 88, name: "Carbonated Soft Drink", type: "null", ABV: null, },
    { id: 89, name: "Carbonated Water", type: "null", ABV: null, },
    { id: 90, name: "Cardamom", type: "null", ABV: null, },
    { id: 93, name: "Cayenne Pepper", type: "null", ABV: null, },
    { id: 94, name: "Celery Salt", type: "null", ABV: null, },
    { id: 95, name: "Celery", type: "null", ABV: null, },
    { id: 96, name: "Chambord Raspberry Liqueur", type: "Liqueur", ABV: null, },
    { id: 97, name: "Champagne", type: "Wine", ABV: 13, },
    { id: 99, name: "Cherries", type: "null", ABV: null, },
    { id: 100, name: "Cherry Brandy", type: "null", ABV: null, },
    { id: 101, name: "Cherry Cola", type: "null", ABV: null, },
    { id: 102, name: "Cherry Grenadine", type: "null", ABV: null, },
    { id: 103, name: "Cherry Heering", type: "null", ABV: null, },
    { id: 104, name: "Cherry Juice", type: "null", ABV: null, },
    { id: 105, name: "Cherry Liqueur", type: "Liqueur", ABV: null, },
    { id: 106, name: "Cherry", type: "null", ABV: null, },
    { id: 112, name: "Chocolate Ice-cream", type: "null", ABV: null, },
    { id: 113, name: "Chocolate Liqueur", type: "Liqueur", ABV: null, },
    { id: 114, name: "Chocolate Milk", type: "null", ABV: null, },
    { id: 115, name: "Chocolate Syrup", type: "null", ABV: null, },
    { id: 116, name: "Chocolate", type: "null", ABV: null, },
    { id: 120, name: "Cider", type: "Cider", ABV: 4, },
    { id: 121, name: "Cinnamon Schnapps", type: "Liquor", ABV: null, },
    { id: 122, name: "Cinnamon", type: "null", ABV: null, },
    { id: 123, name: "Citrus Vodka", type: "Vodka", ABV: null, },
    { id: 124, name: "Clamato Juice", type: "null", ABV: null, },
    { id: 126, name: "Cloves", type: "null", ABV: null, },
    { id: 127, name: "Club Soda", type: "null", ABV: null, },
    { id: 128, name: "Coca-Cola", type: "Soft Drink", ABV: null, },
    { id: 130, name: "Cocktail Onion", type: "null", ABV: null, },
    { id: 131, name: "Cocoa Powder", type: "null", ABV: null, },
    { id: 132, name: "Coconut Cream", type: "null", ABV: null, },
    { id: 133, name: "Coconut Liqueur", type: "Liqueur", ABV: null, },
    { id: 134, name: "Coconut Milk", type: "null", ABV: null, },
    { id: 135, name: "Coconut Rum", type: "Rum", ABV: null, },
    { id: 136, name: "Coconut Syrup", type: "null", ABV: null, },
    { id: 137, name: "Coffee Brandy", type: "Brandy", ABV: null, },
    { id: 138, name: "Coffee Liqueur", type: "Liqueur", ABV: null, },
    { id: 139, name: "Coffee", type: "Coffee", ABV: null, },
    { id: 141, name: "Cognac", type: "Brandy", ABV: null, },
    { id: 142, name: "Cointreau", type: "Liqueur", ABV: 40, },
    { id: 143, name: "Cola", type: "Soft Drink", ABV: 0, },
    { id: 144, name: "Cold Water", type: "null", ABV: null, },
    { id: 145, name: "Condensed Milk", type: "null", ABV: null, },
    { id: 147, name: "Coriander", type: "null", ABV: null, },
    { id: 149, name: "Corn Syrup", type: "null", ABV: null, },
    { id: 151, name: "Cornstarch", type: "null", ABV: null, },
    { id: 152, name: "Corona", type: "Beer", ABV: 4, },
    { id: 154, name: "Cranberries", type: "null", ABV: null, },
    { id: 155, name: "Cranberry Juice", type: "Juice", ABV: null, },
    { id: 156, name: "Cranberry Liqueur", type: "Liqueur", ABV: null, },
    { id: 157, name: "Cranberry Vodka", type: "Vodka", ABV: null, },
    { id: 158, name: "Cream of Coconut", type: "null", ABV: null, },
    { id: 159, name: "Cream Sherry", type: "Sherry", ABV: null, },
    { id: 160, name: "Cream Soda", type: "null", ABV: null, },
    { id: 161, name: "Cream", type: "null", ABV: null, },
    { id: 162, name: "Creme De Almond", type: "null", ABV: null, },
    { id: 163, name: "Creme De Banane", type: "null", ABV: null, },
    { id: 164, name: "Creme De Cacao", type: "null", ABV: null, },
    { id: 165, name: "Creme De Cassis", type: "Liqueur", ABV: 15, },
    { id: 166, name: "Creme De Noyaux", type: "null", ABV: null, },
    { id: 167, name: "Creme Fraiche", type: "null", ABV: null, },
    { id: 168, name: "Crown Royal", type: "null", ABV: null, },
    { id: 169, name: "Crystal Light", type: "null", ABV: null, },
    { id: 171, name: "Cucumber", type: "null", ABV: null, },
    { id: 172, name: "Cumin Powder", type: "null", ABV: null, },
    { id: 173, name: "Cumin Seed", type: "null", ABV: null, },
    { id: 174, name: "Curacao", type: "null", ABV: null, },
    { id: 175, name: "Cynar", type: "null", ABV: null, },
    { id: 176, name: "Daiquiri Mix", type: "null", ABV: null, },
    { id: 177, name: "Dark Chocolate", type: "null", ABV: null, },
    { id: 178, name: "Dark Creme De Cacao", type: "null", ABV: null, },
    { id: 179, name: "Dark Rum", type: "Rum", ABV: 40, },
    { id: 180, name: "Dark Soy Sauce", type: "null", ABV: null, },
    { id: 181, name: "Demerara Sugar", type: "null", ABV: null, },
    { id: 186, name: "Dr. Pepper", type: "Soft Drink", ABV: null, },
    { id: 187, name: "Drambuie", type: "Liqueur", ABV: null, },
    { id: 188, name: "Dried Oregano", type: "null", ABV: null, },
    { id: 189, name: "Dry Vermouth", type: "Fortified Wine", ABV: null, },
    { id: 190, name: "Dubonnet Blanc", type: "null", ABV: null, },
    { id: 191, name: "Dubonnet Rouge", type: "null", ABV: null, },
    { id: 192, name: "Egg White", type: "null", ABV: null, },
    { id: 193, name: "Egg Yolk", type: "null", ABV: null, },
    { id: 194, name: "Egg", type: "null", ABV: null, },
    { id: 195, name: "Eggnog", type: "null", ABV: null, },
    { id: 199, name: "Erin Cream", type: "null", ABV: null, },
    { id: 200, name: "Espresso", type: "null", ABV: null, },
    { id: 201, name: "Everclear", type: "null", ABV: null, },
    { id: 203, name: "Fanta", type: "null", ABV: null, },
    { id: 205, name: "Fennel Seeds", type: "null", ABV: null, },
    { id: 207, name: "Firewater", type: "null", ABV: null, },
    { id: 208, name: "Flaked Almonds", type: "null", ABV: null, },
    { id: 210, name: "Food Coloring", type: "null", ABV: null, },
    { id: 211, name: "Forbidden Fruit", type: "null", ABV: null, },
    { id: 212, name: "Frangelico", type: "null", ABV: null, },
    { id: 215, name: "Fresca", type: "null", ABV: null, },
    { id: 216, name: "Fresh Basil", type: "Spice", ABV: null, },
    { id: 217, name: "Fresh Lemon Juice", type: "Juice", ABV: null, },
    { id: 220, name: "Fruit Juice", type: "Juice", ABV: null, },
    { id: 221, name: "Fruit Punch", type: "Juice", ABV: null, },
    { id: 222, name: "Fruit", type: "Fruit", ABV: null, },
    { id: 223, name: "Galliano", type: "Liqueur", ABV: null, },
    { id: 224, name: "Garlic Sauce", type: "Sauce", ABV: null, },
    { id: 226, name: "Gatorade", type: "Soft Drink", ABV: null, },
    { id: 228, name: "Ginger Ale", type: "Soft Drink", ABV: null, },
    { id: 229, name: "Ginger Beer", type: "Soft Drink", ABV: null, },
    { id: 230, name: "Ginger", type: "null", ABV: null, },
    { id: 231, name: "Glycerine", type: "null", ABV: null, },
    { id: 232, name: "Godiva Liqueur", type: "Liqueur", ABV: null, },
    { id: 233, name: "Gold rum", type: "Rum", ABV: null, },
    { id: 234, name: "Gold Tequila", type: "Tequila", ABV: null, },
    { id: 235, name: "Goldschlager", type: "Schnapps", ABV: 44, },
    { id: 237, name: "Grain Alcohol", type: "null", ABV: null, },
    { id: 238, name: "Grand Marnier", type: "Liqueur", ABV: null, },
    { id: 239, name: "Granulated Sugar", type: "null", ABV: null, },
    { id: 240, name: "Grape juice", type: "null", ABV: null, },
    { id: 241, name: "Grape soda", type: "null", ABV: null, },
    { id: 242, name: "Grapefruit Juice", type: "null", ABV: null, },
    { id: 243, name: "Grapes", type: "null", ABV: null, },
    { id: 245, name: "Green Chartreuse", type: "null", ABV: null, },
    { id: 246, name: "Green Creme de Menthe", type: "Liqueur", ABV: null, },
    { id: 247, name: "Green Ginger Wine", type: "null", ABV: null, },
    { id: 248, name: "Green Olives", type: "null", ABV: null, },
    { id: 250, name: "Grenadine", type: "Syrup", ABV: null, },
    { id: 252, name: "Ground Ginger", type: "null", ABV: null, },
    { id: 253, name: "Guava juice", type: "null", ABV: null, },
    { id: 254, name: "Guinness stout", type: "Stout", ABV: null, },
    { id: 255, name: "Guinness", type: "Stout", ABV: null, },
    { id: 256, name: "Half-and-half", type: "Soft Drink", ABV: null, },
    { id: 257, name: "Hawaiian punch", type: "null", ABV: null, },
    { id: 258, name: "Hazelnut liqueur", type: "null", ABV: null, },
    { id: 259, name: "Heavy cream", type: "Cream", ABV: null, },
    { id: 260, name: "Honey", type: "null", ABV: null, },
    { id: 261, name: "Hooch", type: "null", ABV: null, },
    { id: 264, name: "Hot Chocolate", type: "null", ABV: null, },
    { id: 265, name: "Hot Damn", type: "null", ABV: null, },
    { id: 266, name: "Hot Sauce", type: "null", ABV: null, },
    { id: 268, name: "Hpnotiq", type: "null", ABV: null, },
    { id: 269, name: "Ice-Cream", type: "null", ABV: null, },
    { id: 270, name: "Ice", type: "null", ABV: null, },
    { id: 271, name: "Iced tea", type: "null", ABV: null, },
    { id: 272, name: "Irish cream", type: "Liqueur", ABV: null, },
    { id: 273, name: "Irish Whiskey", type: "Whiskey", ABV: null, },
    { id: 275, name: "Jack Daniels", type: "Whiskey", ABV: null, },
    { id: 276, name: "Jello", type: "null", ABV: null, },
    { id: 277, name: "Jelly", type: "null", ABV: null, },
    { id: 278, name: "Jagermeister", type: "Liqueur", ABV: 35, },
    { id: 279, name: "Jim Beam", type: "Whiskey", ABV: null, },
    { id: 280, name: "Johnnie Walker", type: "Whiskey", ABV: null, },
    { id: 282, name: "Kahlua", type: "Liqueur", ABV: null, },
    { id: 283, name: "Key Largo Schnapps", type: "Liqueur", ABV: null, },
    { id: 284, name: "Kirschwasser", type: "null", ABV: null, },
    { id: 285, name: "Kiwi liqueur", type: "Liqueur", ABV: null, },
    { id: 286, name: "Kiwi", type: "null", ABV: null, },
    { id: 287, name: "Kool-Aid", type: "null", ABV: null, },
    { id: 288, name: "Kummel", type: "null", ABV: null, },
    { id: 289, name: "Lager", type: "Beer", ABV: 4, },
    { id: 293, name: "Lemon Juice", type: "null", ABV: null, },
    { id: 294, name: "Lemon Peel", type: "null", ABV: null, },
    { id: 295, name: "Lemon soda", type: "null", ABV: null, },
    { id: 296, name: "Lemon vodka", type: "null", ABV: null, },
    { id: 297, name: "Lemon-lime soda", type: "null", ABV: null, },
    { id: 298, name: "lemon-lime", type: "null", ABV: null, },
    { id: 299, name: "lemon", type: "Fruit", ABV: null, },
    { id: 300, name: "Lemonade", type: "Soft Drink", ABV: null, },
    { id: 303, name: "Licorice Root", type: "null", ABV: null, },
    { id: 304, name: "Light Cream", type: "null", ABV: null, },
    { id: 305, name: "Light Rum", type: "Rum", ABV: null, },
    { id: 306, name: "Lillet", type: "null", ABV: null, },
    { id: 307, name: "Lime juice cordial", type: "null", ABV: null, },
    { id: 308, name: "Lime Juice", type: "null", ABV: null, },
    { id: 309, name: "Lime liqueur", type: "Liqueur", ABV: null, },
    { id: 310, name: "Lime Peel", type: "null", ABV: null, },
    { id: 311, name: "Lime vodka", type: "Vodka", ABV: null, },
    { id: 312, name: "Lime", type: "Fruit", ABV: null, },
    { id: 313, name: "Limeade", type: "null", ABV: null, },
    { id: 314, name: "Madeira", type: "null", ABV: null, },
    { id: 315, name: "Malibu Rum", type: "Rum", ABV: 21, },
    { id: 317, name: "Mandarin", type: "null", ABV: null, },
    { id: 318, name: "Mandarine napoleon", type: "null", ABV: null, },
    { id: 319, name: "Mango", type: "null", ABV: null, },
    { id: 320, name: "Maple syrup", type: "null", ABV: null, },
    { id: 321, name: "Maraschino cherry juice", type: "null", ABV: null, },
    { id: 322, name: "Maraschino Cherry", type: "null", ABV: null, },
    { id: 323, name: "Maraschino Liqueur", type: "Liqueur", ABV: null, },
    { id: 324, name: "Margarita mix", type: "null", ABV: null, },
    { id: 325, name: "Marjoram leaves", type: "null", ABV: null, },
    { id: 326, name: "Marshmallows", type: "null", ABV: null, },
    { id: 327, name: "Maui", type: "null", ABV: null, },
    { id: 328, name: "Melon Liqueur", type: "Liqueur", ABV: null, },
    { id: 329, name: "Melon Vodka", type: "null", ABV: null, },
    { id: 330, name: "Mezcal", type: "null", ABV: null, },
    { id: 331, name: "Midori Melon Liqueur", type: "Liqueur", ABV: null, },
    { id: 332, name: "Midori", type: "Liqueur", ABV: null, },
    { id: 333, name: "Milk", type: "Drink", ABV: null, },
    { id: 336, name: "Mint syrup", type: "null", ABV: null, },
    { id: 337, name: "Mint", type: "Flower", ABV: null, },
    { id: 338, name: "Mountain Dew", type: "null", ABV: null, },
    { id: 344, name: "Nutmeg", type: "null", ABV: null, },
    { id: 346, name: "Olive Oil", type: "null", ABV: null, },
    { id: 347, name: "Olive", type: "null", ABV: null, },
    { id: 348, name: "Onion", type: "null", ABV: null, },
    { id: 350, name: "Orange Bitters", type: "null", ABV: null, },
    { id: 351, name: "Orange Curacao", type: "Liqueur", ABV: null, },
    { id: 352, name: "Orange Juice", type: "null", ABV: null, },
    { id: 353, name: "Orange liqueur", type: "Liqueur", ABV: null, },
    { id: 354, name: "Orange Peel", type: "null", ABV: null, },
    { id: 355, name: "Orange rum", type: "Rum", ABV: null, },
    { id: 356, name: "Orange Soda", type: "null", ABV: null, },
    { id: 357, name: "Orange spiral", type: "null", ABV: null, },
    { id: 358, name: "Orange vodka", type: "Vodka", ABV: null, },
    { id: 359, name: "Orange", type: "Fruit", ABV: null, },
    { id: 361, name: "Oreo cookie", type: "null", ABV: null, },
    { id: 362, name: "Orgeat Syrup", type: "Syrup", ABV: null, },
    { id: 363, name: "Ouzo", type: "Aperitif", ABV: 38, },
    { id: 364, name: "Oyster Sauce", type: "null", ABV: null, },
    { id: 365, name: "Papaya juice", type: "null", ABV: null, },
    { id: 366, name: "Papaya", type: "null", ABV: null, },
    { id: 367, name: "Parfait amour", type: "null", ABV: null, },
    { id: 372, name: "Passion fruit juice", type: "null", ABV: null, },
    { id: 373, name: "Passion fruit syrup", type: "null", ABV: null, },
    { id: 374, name: "Passoa", type: "Liqueur", ABV: 17, },
    { id: 375, name: "Peach brandy", type: "Brandy", ABV: null, },
    { id: 376, name: "Peach juice", type: "null", ABV: null, },
    { id: 377, name: "Peach liqueur", type: "Liqueur", ABV: null, },
    { id: 378, name: "Peach Nectar", type: "null", ABV: null, },
    { id: 379, name: "Peach Schnapps", type: "Liquor", ABV: null, },
    { id: 380, name: "Peach Vodka", type: "Vodka", ABV: null, },
    { id: 381, name: "Peach", type: "Fruit", ABV: null, },
    { id: 382, name: "Peachtree schnapps", type: "Liquor", ABV: null, },
    { id: 383, name: "Peanut Oil", type: "null", ABV: null, },
    { id: 386, name: "Pepper", type: "null", ABV: null, },
    { id: 387, name: "Peppermint extract", type: "null", ABV: null, },
    { id: 388, name: "Peppermint Schnapps", type: "Liquor", ABV: null, },
    { id: 389, name: "Pepsi Cola", type: "null", ABV: null, },
    { id: 390, name: "Pernod", type: "null", ABV: null, },
    { id: 391, name: "Peychaud bitters", type: "null", ABV: null, },
    { id: 392, name: "Pina colada mix", type: "null", ABV: null, },
    { id: 393, name: "Pineapple Juice", type: "null", ABV: null, },
    { id: 394, name: "Pineapple rum", type: "null", ABV: null, },
    { id: 395, name: "Pineapple vodka", type: "null", ABV: null, },
    { id: 396, name: "Pineapple-orange-banana juice", type: "null", ABV: null, },
    { id: 397, name: "Pineapple", type: "Fruit", ABV: null, },
    { id: 398, name: "Pink lemonade", type: "null", ABV: null, },
    { id: 399, name: "Pisang Ambon", type: "null", ABV: null, },
    { id: 400, name: "Pisco", type: "Brandy", ABV: null, },
    { id: 402, name: "Plain Chocolate", type: "null", ABV: null, },
    { id: 403, name: "Plain Flour", type: "null", ABV: null, },
    { id: 405, name: "Plums", type: "null", ABV: null, },
    { id: 406, name: "Port", type: "Fortified wine", ABV: null, },
    { id: 409, name: "Powdered Sugar", type: "null", ABV: null, },
    { id: 411, name: "Purple passion", type: "null", ABV: null, },
    { id: 412, name: "Raisins", type: "null", ABV: null, },
    { id: 413, name: "Raspberry cordial", type: "null", ABV: null, },
    { id: 414, name: "Raspberry Jam", type: "null", ABV: null, },
    { id: 415, name: "Raspberry Juice", type: "null", ABV: null, },
    { id: 416, name: "Raspberry Liqueur", type: "Liqueur", ABV: null, },
    { id: 417, name: "Raspberry schnapps", type: "Liquor", ABV: null, },
    { id: 418, name: "Raspberry syrup", type: "null", ABV: null, },
    { id: 419, name: "Raspberry Vodka", type: "Vodka", ABV: null, },
    { id: 421, name: "Red Chile Flakes", type: "null", ABV: null, },
    { id: 422, name: "Red Chili Flakes", type: "null", ABV: null, },
    { id: 423, name: "Red Hot Chili Flakes", type: "null", ABV: null, },
    { id: 425, name: "Red Wine", type: "Wine", ABV: 14, },
    { id: 426, name: "Rhubarb", type: "null", ABV: null, },
    { id: 427, name: "Ricard", type: "Aperitif", ABV: null, },
    { id: 429, name: "Rock Salt", type: "null", ABV: null, },
    { id: 430, name: "Root beer schnapps", type: "Liquor", ABV: null, },
    { id: 431, name: "Root beer", type: "Soft Drink", ABV: null, },
    { id: 432, name: "Roses sweetened lime juice", type: "null", ABV: null, },
    { id: 433, name: "Rosewater", type: "null", ABV: null, },
    { id: 435, name: "Rumple Minze", type: "null", ABV: null, },
    { id: 436, name: "Rye Whiskey", type: "Whiskey", ABV: null, },
    { id: 437, name: "Sake", type: "Rice wine", ABV: null, },
    { id: 439, name: "Salt", type: "Mineral", ABV: null, },
    { id: 440, name: "Sambuca", type: "Liqueur", ABV: 38, },
    { id: 441, name: "Sarsaparilla", type: "null", ABV: null, },
    { id: 442, name: "Schnapps", type: "Liquor", ABV: null, },
    { id: 443, name: "Schweppes Lemon", type: "null", ABV: null, },
    { id: 444, name: "Schweppes Russchian", type: "null", ABV: null, },
    { id: 448, name: "Sherbet", type: "null", ABV: null, },
    { id: 449, name: "Sherry", type: "Fortified Wine", ABV: null, },
    { id: 452, name: "Sirup of roses", type: "null", ABV: null, },
    { id: 453, name: "Sloe Gin", type: "Liqueur", ABV: null, },
    { id: 455, name: "Soda Water", type: "null", ABV: null, },
    { id: 456, name: "Sour Apple Pucker", type: "null", ABV: null, },
    { id: 457, name: "Sour Mix", type: "Soft Drink", ABV: null, },
    { id: 458, name: "Southern Comfort", type: "Liqueur", ABV: null, },
    { id: 459, name: "Soy Milk", type: "null", ABV: null, },
    { id: 460, name: "Soy Sauce", type: "null", ABV: null, },
    { id: 461, name: "Soya Milk", type: "null", ABV: null, },
    { id: 462, name: "Soya Sauce", type: "null", ABV: null, },
    { id: 464, name: "Spiced Rum", type: "null", ABV: null, },
    { id: 466, name: "Sprite", type: "null", ABV: null, },
    { id: 467, name: "Squeezed Orange", type: "null", ABV: null, },
    { id: 468, name: "Squirt", type: "null", ABV: null, },
    { id: 470, name: "Strawberries", type: "Fruit", ABV: null, },
    { id: 471, name: "Strawberry juice", type: "null", ABV: null, },
    { id: 472, name: "Strawberry liqueur", type: "Liquor", ABV: null, },
    { id: 473, name: "Strawberry Schnapps", type: "Liquor", ABV: null, },
    { id: 474, name: "Strawberry syrup", type: "null", ABV: null, },
    { id: 475, name: "Sugar Syrup", type: "null", ABV: null, },
    { id: 476, name: "Sugar", type: "null", ABV: null, },
    { id: 477, name: "Sunny delight", type: "null", ABV: null, },
    { id: 478, name: "Surge", type: "null", ABV: null, },
    { id: 479, name: "Swedish punsch", type: "null", ABV: null, },
    { id: 480, name: "Sweet and Sour", type: "Soft Drink", ABV: null, },
    { id: 481, name: "Sweet Cream", type: "null", ABV: null, },
    { id: 482, name: "Sweet Vermouth", type: "Fortified Wine", ABV: null, },
    { id: 483, name: "Tabasco Sauce", type: "null", ABV: null, },
    { id: 484, name: "Tang", type: "null", ABV: null, },
    { id: 485, name: "Tawny port", type: "Fortified Wine", ABV: null, },
    { id: 486, name: "Tea", type: "null", ABV: null, },
    { id: 487, name: "Tennessee whiskey", type: "Whiskey", ABV: null, },
    { id: 488, name: "Tequila rose", type: "null", ABV: null, },
    { id: 490, name: "Tia Maria", type: "null", ABV: null, },
    { id: 492, name: "Tomato Juice", type: "Soft Drink", ABV: null, },
    { id: 494, name: "Tomato", type: "null", ABV: null, },
    { id: 497, name: "Tonic Water", type: "Soft Drink", ABV: null, },
    { id: 498, name: "Triple Sec", type: "Liqueur", ABV: null, },
    { id: 499, name: "Tropicana", type: "null", ABV: null, },
    { id: 500, name: "Tuaca", type: "null", ABV: null, },
    { id: 502, name: "Vanilla extract", type: "null", ABV: null, },
    { id: 503, name: "Vanilla Ice-Cream", type: "null", ABV: null, },
    { id: 504, name: "Vanilla liqueur", type: "Liquor", ABV: null, },
    { id: 505, name: "Vanilla schnapps", type: "Liquor", ABV: null, },
    { id: 506, name: "Vanilla syrup", type: "null", ABV: null, },
    { id: 507, name: "Vanilla vodka", type: "Vodka", ABV: null, },
    { id: 508, name: "Vanilla", type: "null", ABV: null, },
    { id: 510, name: "Vermouth", type: "Fortified Wine", ABV: null, },
    { id: 511, name: "Vinegar", type: "null", ABV: null, },
    { id: 513, name: "Water", type: "Water", ABV: null, },
    { id: 514, name: "Watermelon schnapps", type: "Liquor", ABV: null, },
    { id: 515, name: "Whipped Cream", type: "Cream", ABV: null, },
    { id: 516, name: "Whipping Cream", type: "Cream", ABV: null, },
    { id: 519, name: "White chocolate liqueur", type: "null", ABV: null, },
    { id: 520, name: "White Creme de Menthe", type: "null", ABV: null, },
    { id: 521, name: "White grape juice", type: "null", ABV: null, },
    { id: 522, name: "White port", type: "Port", ABV: null, },
    { id: 523, name: "White Rum", type: "Rum", ABV: null, },
    { id: 524, name: "White Vinegar", type: "null", ABV: null, },
    { id: 525, name: "White Wine", type: "Wine", ABV: null, },
    { id: 526, name: "Wild Turkey", type: "Whisky", ABV: null, },
    { id: 527, name: "Wildberry schnapps", type: "Liquor", ABV: null, },
    { id: 528, name: "Wine", type: "Wine", ABV: 14, },
    { id: 529, name: "Worcestershire Sauce", type: "Sauce", ABV: null, },
    { id: 530, name: "Wormwood", type: "null", ABV: null, },
    { id: 531, name: "Yeast", type: "null", ABV: null, },
    { id: 532, name: "Yellow Chartreuse", type: "Liqueur", ABV: null, },
    { id: 533, name: "Yoghurt", type: "Cream", ABV: null, },
    { id: 534, name: "Yukon Jack", type: "Liqueur", ABV: null, },
    { id: 535, name: "Zima", type: "Beverage", ABV: null, },
    { id: 537, name: "Caramel Sauce", type: "Sauce", ABV: null, },
    { id: 538, name: "Chocolate Sauce", type: "Sauce", ABV: null, },
    { id: 539, name: "Lillet Blanc", type: "aperitif", ABV: null, },
    { id: 540, name: "Peach Bitters", type: "bitter", ABV: null, },
    { id: 541, name: "Mini-snickers bars", type: "Confectionery", ABV: null, },
    { id: 542, name: "Prosecco", type: "Wine", ABV: null, },
    { id: 543, name: "Salted Chocolate", type: "Confectionery", ABV: null, },
    { id: 544, name: "Martini Rosso", type: "Vermouth", ABV: null, },
    { id: 545, name: "Martini Bianco", type: "Vermouth", ABV: null, },
    { id: 546, name: "Martini Extra Dry", type: "Vermouth", ABV: null, },
    { id: 547, name: "Fresh Lime Juice", type: "Fruit", ABV: null, },
    { id: 548, name: "Fresh Mint", type: "Garnish", ABV: null, },
    { id: 549, name: "Rosemary", type: "Garnish", ABV: null, },
    { id: 550, name: "Habanero Peppers", type: "Garnish", ABV: null, },
    { id: 551, name: "Ilegal Joven mezcal", type: "Spirit", ABV: null, },
    { id: 552, name: "Elderflower cordial", type: "Cordial", ABV: null, },
    { id: 553, name: "Rosso Vermouth", type: "Fortified Wine", ABV: null, },
    { id: 554, name: "Creme de Violette", type: "Liqueur", ABV: null, },
    { id: 555, name: "Cocchi Americano", type: "Aperitif", ABV: null, },
    { id: 556, name: "White Vermouth", type: "Fortified Wine", ABV: null, },
    { id: 557, name: "Dry Curacao", type: "Liqueur", ABV: null, },
    { id: 558, name: "Nocino", type: "Liqueur", ABV: null, },
    { id: 559, name: "Averna", type: "Liqueur", ABV: null, },
    { id: 560, name: "Ramazzotti", type: "Liqueur", ABV: null, },
    { id: 561, name: "Fernet-Branca", type: "Liqueur", ABV: null, },
    { id: 562, name: "Allspice Dram", type: "Liquer", ABV: null, },
    { id: 563, name: "Falernum", type: "Syrup", ABV: null, },
    { id: 564, name: "Singani", type: "Liquor", ABV: null, },
    { id: 565, name: "Arrack", type: "Liquor", ABV: null, },
    { id: 566, name: "Blackstrap rum", type: "Rum", ABV: null, },
    { id: 567, name: "Ginger Syrup", type: "Syrup", ABV: null, },
    { id: 568, name: "Honey syrup", type: "Syrup", ABV: null, },
    { id: 569, name: "Blended Scotch", type: "Whiskey", ABV: null, },
    { id: 570, name: "Islay single malt Scotch", type: "Whiskey", ABV: null, },
    { id: 571, name: "151 proof rum", type: "Rum", ABV: null, },
    { id: 572, name: "7-up", type: "Soft Drink", ABV: null, },
    { id: 573, name: "Absinthe", type: "Spirit", ABV: null, },
    { id: 574, name: "Absolut citron", type: "Vodka", ABV: null, },
    { id: 575, name: "Creme de Mure", type: "Liquor", ABV: 16, },
    { id: 576, name: "Olive Brine", type: "Mixer", ABV: null, },
    { id: 577, name: "Pineapple Syrup", type: "Fruit Juice", ABV: null, },
    { id: 578, name: "St. Germain", type: "Liquor", ABV: null, },
    { id: 579, name: "Lavender", type: "Flower", ABV: null, },
    { id: 600, name: "Whiskey", type: "Whisky", ABV: 40, },
    { id: 601, name: "Whisky", type: "Whisky", ABV: 40, },
    { id: 602, name: "Pomegranate juice", type: "Fruit Juice", ABV: null, },
    { id: 603, name: "Watermelon", type: "fruit", ABV: null, },
    { id: 604, name: "Chareau", type: "Brandy", ABV: 25, },
    { id: 605, name: "Cinnamon Whisky", type: "Whisky", ABV: 33, },
    { id: 606, name: "Red Bull", type: "Soda", ABV: null, },
    { id: 607, name: "Diet Coke", type: "Soda", ABV: null, },
    { id: 608, name: "Rosemary Syrup", type: "Syrup", ABV: null, },
    { id: 608, name: "Carrot", type: "null", ABV: null, },
];
