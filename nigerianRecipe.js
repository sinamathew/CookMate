import { createRecipe } from "./recipe.js";

// Recipe 1: Nigerian Jollof
const nigerianJollof = createRecipe("Nigerian Jollof", 
  "A delicious meal made with rice in Nigerian style.", 
  ['rice', 'vegetable oil', 'beef', 'ponmo', 'ogufe', 'salt', 'crayfish', 'green bean', 'carrot', 'onions', 'catfish', 'tomatoes', 'cameroon pepper'],
  ['get all necessary ingredients', 'wash and preboil your rice for 800 years', 'then wait...'],
  "I don't know yet", { cookTime: 'Eternity', serves: 4 });

// Recipe 2: Egusi Soup
const egusiSoup = createRecipe("Egusi Soup", 
  "A popular Nigerian soup made with melon seeds.", 
  ['egusi', 'palm oil', 'goat meat', 'stockfish', 'ponmo', 'spinach', 'onions', 'crayfish', 'salt', 'seasoning cubes'],
  ['blend the egusi', 'cook the meat and stockfish', 'add palm oil, egusi, and other ingredients', 'cook until done'],
  "Serve with pounded yam or fufu", { cookTime: '1 hour', serves: 6 });

// Recipe 3: Pounded Yam and Efo Riro
const poundedYamEfoRiro = createRecipe("Pounded Yam and Efo Riro", 
  "A classic Nigerian dish served with richly spiced vegetable stew.", 
  ['yam', 'water', 'spinach', 'palm oil', 'beef', 'stockfish', 'ponmo', 'onions', 'crayfish', 'pepper', 'salt'],
  ['boil the yam and pound until smooth', 'prepare the efo riro by frying palm oil, adding vegetables, and cooking the meat', 'serve together'],
  "Perfect for lunch or dinner", { cookTime: '1.5 hours', serves: 5 });

// Recipe 4: Suya
const suya = createRecipe("Suya", 
  "A spicy grilled meat skewer popular in Nigeria.", 
  ['beef', 'suya spice', 'vegetable oil', 'onions', 'cabbage', 'tomatoes', 'pepper'],
  ['slice the beef thinly', 'season with suya spice and let it marinate', 'grill until cooked', 'serve with sliced onions and vegetables'],
  "Best enjoyed as street food", { cookTime: '30 minutes', serves: 3 });

// Recipe 5: Moi Moi
const moiMoi = createRecipe("Moi Moi", 
  "A steamed bean pudding made from blended peeled beans.", 
  ['peeled beans', 'onions', 'bell peppers', 'palm oil', 'eggs', 'fish', 'salt', 'seasoning cubes'],
  ['blend beans with peppers and onions', 'mix in palm oil, fish, and seasoning', 'steam in a mold until set'],
  "Serve as a side dish or breakfast", { cookTime: '45 minutes', serves: 6 });

// Recipe 6: Akara
const akara = createRecipe("Akara", 
  "A popular Nigerian breakfast made from deep-fried bean paste.", 
  ['peeled beans', 'onions', 'pepper', 'salt', 'vegetable oil'],
  ['blend beans with onions and pepper', 'scoop into hot oil and fry until golden brown'],
  "Best served with pap or custard", { cookTime: '20 minutes', serves: 4 });

// Recipe 7: Jollof Spaghetti
const jollofSpaghetti = createRecipe("Jollof Spaghetti", 
  "A Nigerian twist on pasta, cooked in rich tomato sauce.", 
  ['spaghetti', 'tomato paste', 'vegetable oil', 'onions', 'pepper', 'garlic', 'beef', 'carrots', 'green beans'],
  ['boil spaghetti until al dente', 'fry tomato paste with onions and pepper', 'add spaghetti and stir well', 'serve hot'],
  "Quick and easy, perfect for a weekday meal", { cookTime: '25 minutes', serves: 4 });

// Recipe 8: Afang Soup
const afangSoup = createRecipe("Afang Soup", 
  "A nutritious soup made from Afang leaves and waterleaf.", 
  ['afang leaves', 'waterleaf', 'goat meat', 'stockfish', 'periwinkle', 'crayfish', 'palm oil', 'onions', 'pepper', 'seasoning cubes'],
  ['wash and slice the leaves', 'cook the meat and stockfish', 'add palm oil, leaves, and other ingredients', 'simmer until done'],
  "Serve with eba, fufu, or pounded yam", { cookTime: '1 hour', serves: 6 });

// Recipe 9: Ogbono Soup
const ogbonoSoup = createRecipe("Ogbono Soup", 
  "A thick and hearty Nigerian soup made from ground ogbono seeds.", 
  ['ogbono seeds', 'palm oil', 'beef', 'stockfish', 'ponmo', 'bitterleaf', 'crayfish', 'salt', 'pepper'],
  ['grind ogbono seeds into powder', 'cook the meat and stockfish', 'add palm oil, ogbono, and other ingredients', 'simmer until thickened'],
  "Best enjoyed with pounded yam or garri", { cookTime: '1 hour', serves: 5 });

// Recipe 10: Fried Rice
const friedRice = createRecipe("Fried Rice", 
  "A colorful and tasty Nigerian dish made with fried rice, vegetables, and meat.", 
  ['rice', 'vegetable oil', 'carrots', 'green peas', 'sweet corn', 'green beans', 'chicken', 'curry powder', 'thyme', 'salt', 'pepper'],
  ['cook the rice and set aside', 'fry the vegetables with spices', 'add the rice and stir well', 'serve with fried chicken or plantain'],
  "Perfect for parties and special occasions", { cookTime: '45 minutes', serves: 6 });
