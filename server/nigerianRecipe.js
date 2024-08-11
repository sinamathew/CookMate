import { createRecipe } from "./recipe.js";

// Recipe 1: Nigerian Jollof
const nigerianJollof = createRecipe("Nigerian Jollof", 
  "A delicious and iconic Nigerian dish made with rice cooked in a flavorful tomato sauce.", 
  ['rice', 'vegetable oil', 'beef', 'ponmo', 'ogufe', 'salt', 'crayfish', 'green beans', 'carrots', 'onions', 'catfish', 'tomatoes', 'cameroon pepper'],
  ['Gather all necessary ingredients', 'Wash and preboil the rice', 'Prepare the sauce by frying onions and tomatoes', 'Add the rice to the sauce and cook until done'],
  "Serve with fried plantains or steamed vegetables. For a vegetarian version, omit the meat.", 
  { prepTime: '20 minutes', cookTime: '45 minutes', serves: 6, calories: 350, fat: '15g', protein: '20g', carbs: '40g', difficulty: 'Medium', cuisine: 'Nigerian', allergens: ['Fish'], tips: "For extra flavor, use freshly ground crayfish and add a bay leaf while cooking." });

// Recipe 2: Egusi Soup
const egusiSoup = createRecipe("Egusi Soup", 
  "A popular Nigerian soup made with melon seeds, packed with flavor and nutrition.", 
  ['egusi', 'palm oil', 'goat meat', 'stockfish', 'ponmo', 'spinach', 'onions', 'crayfish', 'salt', 'seasoning cubes'],
  ['Blend the egusi with water', 'Cook the meat and stockfish', 'Add palm oil and egusi, then simmer with vegetables until thickened'],
  "Serve with pounded yam, eba, or fufu. Add more spices for a kick.", 
  { prepTime: '15 minutes', cookTime: '1 hour', serves: 6, calories: 450, fat: '25g', protein: '30g', carbs: '25g', difficulty: 'Medium', cuisine: 'Nigerian', allergens: ['Fish'], tips: "For a thicker soup, let the egusi simmer longer." });

// Recipe 3: Pounded Yam and Efo Riro
const poundedYamEfoRiro = createRecipe("Pounded Yam and Efo Riro", 
  "A classic Nigerian dish served with richly spiced vegetable stew.", 
  ['yam', 'water', 'spinach', 'palm oil', 'beef', 'stockfish', 'ponmo', 'onions', 'crayfish', 'pepper', 'salt'],
  ['Boil the yam and pound until smooth', 'Prepare the efo riro by frying palm oil, adding vegetables, and cooking the meat', 'Serve together with the pounded yam'],
  "Perfect for lunch or dinner. Add shrimp for extra flavor.", 
  { prepTime: '20 minutes', cookTime: '1 hour 10 minutes', serves: 5, calories: 600, fat: '20g', protein: '35g', carbs: '70g', difficulty: 'Hard', cuisine: 'Nigerian', allergens: ['Fish'], tips: "Use a wooden mortar and pestle for the best pounded yam texture." });

// Recipe 4: Suya
const suya = createRecipe("Suya", 
  "A spicy grilled meat skewer popular in Nigeria, known for its rich and smoky flavor.", 
  ['beef', 'suya spice', 'vegetable oil', 'onions', 'cabbage', 'tomatoes', 'pepper'],
  ['Slice the beef thinly', 'Season with suya spice and let it marinate', 'Grill until cooked', 'Serve with sliced onions and vegetables'],
  "Best enjoyed as street food or at a barbecue. Serve with a cold drink.", 
  { prepTime: '10 minutes', cookTime: '20 minutes', serves: 4, calories: 300, fat: '18g', protein: '30g', carbs: '5g', difficulty: 'Easy', cuisine: 'Nigerian', allergens: 'None', tips: "For a smokier flavor, use a charcoal grill." });

// Recipe 5: Moi Moi
const moiMoi = createRecipe("Moi Moi", 
  "A steamed bean pudding made from blended peeled beans, enjoyed across Nigeria.", 
  ['peeled beans', 'onions', 'bell peppers', 'palm oil', 'eggs', 'fish', 'salt', 'seasoning cubes'],
  ['Blend beans with peppers and onions', 'Mix in palm oil, fish, and seasoning', 'Steam in a mold until set'],
  "Serve as a side dish or breakfast. Pair with rice or bread.", 
  { prepTime: '20 minutes', cookTime: '45 minutes', serves: 6, calories: 250, fat: '12g', protein: '15g', carbs: '20g', difficulty: 'Medium', cuisine: 'Nigerian', allergens: ['Fish', 'Eggs'], tips: "Use banana leaves instead of foil for a more traditional flavor." });

// Recipe 6: Akara
const akara = createRecipe("Akara", 
  "A popular Nigerian breakfast made from deep-fried bean paste, crispy on the outside and soft on the inside.", 
  ['peeled beans', 'onions', 'pepper', 'salt', 'vegetable oil'],
  ['Blend beans with onions and pepper', 'Scoop into hot oil and fry until golden brown'],
  "Best served with pap or custard. Can also be enjoyed with bread.", 
  { prepTime: '15 minutes', cookTime: '20 minutes', serves: 4, calories: 200, fat: '10g', protein: '10g', carbs: '15g', difficulty: 'Easy', cuisine: 'Nigerian', allergens: 'None', tips: "Ensure the oil is hot enough to prevent the akara from soaking up too much oil." });

// Recipe 7: Jollof Spaghetti
const jollofSpaghetti = createRecipe("Jollof Spaghetti", 
  "A Nigerian twist on pasta, cooked in a rich and spicy tomato sauce.", 
  ['spaghetti', 'tomato paste', 'vegetable oil', 'onions', 'pepper', 'garlic', 'beef', 'carrots', 'green beans'],
  ['Boil spaghetti until al dente', 'Fry tomato paste with onions and pepper', 'Add spaghetti and stir well, then serve hot'],
  "Quick and easy, perfect for a weekday meal. Garnish with fresh parsley.", 
  { prepTime: '10 minutes', cookTime: '25 minutes', serves: 4, calories: 350, fat: '12g', protein: '15g', carbs: '45g', difficulty: 'Easy', cuisine: 'Nigerian', allergens: 'None', tips: "For a creamier sauce, add a splash of coconut milk." });

// Recipe 8: Afang Soup
const afangSoup = createRecipe("Afang Soup", 
  "A nutritious soup made from Afang leaves and waterleaf, rich in flavor and nutrients.", 
  ['afang leaves', 'waterleaf', 'goat meat', 'stockfish', 'periwinkle', 'crayfish', 'palm oil', 'onions', 'pepper', 'seasoning cubes'],
  ['Wash and slice the leaves', 'Cook the meat and stockfish', 'Add palm oil, leaves, and other ingredients', 'Simmer until done'],
  "Serve with eba, fufu, or pounded yam. Add periwinkle for an authentic touch.", 
  { prepTime: '20 minutes', cookTime: '1 hour', serves: 6, calories: 400, fat: '18g', protein: '30g', carbs: '35g', difficulty: 'Medium', cuisine: 'Nigerian', allergens: ['Shellfish', 'Fish'], tips: "Add water sparingly to keep the soup thick and rich." });

// Recipe 9: Ogbono Soup
const ogbonoSoup = createRecipe("Ogbono Soup", 
  "A thick and hearty Nigerian soup made from ground ogbono seeds, perfect for a satisfying meal.", 
  ['ogbono seeds', 'palm oil', 'beef', 'stockfish', 'ponmo', 'bitterleaf', 'crayfish', 'salt', 'pepper'],
  ['Grind ogbono seeds into powder', 'Cook the meat and stockfish', 'Add palm oil, ogbono, and other ingredients', 'Simmer until thickened'],
  "Best enjoyed with pounded yam or garri. Store leftovers in the refrigerator for up to 3 days.", 
  { prepTime: '15 minutes', cookTime: '1 hour', serves: 5, calories: 450, fat: '22g', protein: '30g', carbs: '35g', difficulty: 'Medium', cuisine: 'Nigerian', allergens: ['Fish'], tips: "To prevent lumps, stir continuously when adding the ogbono powder." });

// Recipe 10: Fried Rice
export const friedRice = createRecipe("Fried Rice", 
  "A colorful and tasty Nigerian dish made with fried rice, vegetables, and meat, perfect for any occasion.", 
  ['rice', 'vegetable oil', 'carrots', 'green peas', 'sweet corn', 'green beans', 'chicken', 'curry powder', 'thyme', 'salt', 'seasoning cubes'],
  ['Cook the rice according to package instructions and set aside', 'Heat vegetable oil in a pan and sauté onions until translucent', 'Add diced chicken and cook through', 'Add carrots, green peas, sweet corn, and green beans, and stir-fry until tender', 'Add curry powder, thyme, salt, and seasoning cubes', 'Stir in the cooked rice and mix thoroughly', 'Cook for an additional 5 minutes, stirring occasionally'],
  "Serve hot with your favorite protein or as a standalone dish. Garnish with chopped scallions or parsley for extra flavor.", 
  { prepTime: '15 minutes', cookTime: '20 minutes', serves: 4, calories: 400, fat: '15g', protein: '20g', carbs: '50g', difficulty: 'Easy', cuisine: 'Nigerian', allergens: 'None', tips: "For best results, use day-old rice as it holds up better and doesn’t become mushy when stir-frying." });


export const availableRecipe = [nigerianJollof, egusiSoup, poundedYamEfoRiro, suya, moiMoi, akara, jollofSpaghetti, afangSoup, ogbonoSoup, friedRice] 