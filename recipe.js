class Recipe {
  #ingredents;
  #instructions;
  #dietInfo;

  constructor(name, description, ingredents, instructions, dietInfo, additionalInfo) {
    this.name = name;
    this.description = description;
    this.#ingredents = ingredents;
    this.#instructions = instructions;
    this.#dietInfo = dietInfo;
    this.additionalInfo = additionalInfo;
  }
}


const createRecipe = (name, description, ingredents, instructions, dietInfo, additionalInfo) => {
  return new Recipe(name, description, ingredents, instructions, dietInfo, additionalInfo);
}

const nigerianJollof = createRecipe("Nigerian Jollof", 
  "A delicious meal made with rice in Nigerian style.", 
  ['rice', 'vegetable oil', 'beef', 'ponmo', 'ogufe', 'salt', 'crayfish', 'green bean', 'carrot', 'onions', 'catfish', 'tomatoes', 'cammeroun pepper' ],
  ['get all neccesary ingredents', 'wash and preboil your rice for 800 years', 'then wait'],
  "I dont know yet", { cookTime: 'Eternity', serves: 4 });

console.log(nigerianJollof);
