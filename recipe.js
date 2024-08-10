class Recipe {
  constructor(name, description, ingredents, instructions, dietInfo) {
    this.name = name;
    this.description = description;
    this.ingredents = ingredents;
    this.instructions = instructions;
    this.dietary_info = dietInfo;
  }
}


const createRecipe = (name, description, ingredents, instructions, dietInfo) => {
  return new Recipe(name, description, ingredents, instructions, dietInfo);
}

const nigerianJollof = createRecipe("Nigerian Jollof", "A delicious meal made with rice in Nigerian style.", ['rice', 'onga', 'salt', 'cray fish', 'green bean', 'carrot'], "I dont know", "I dont know");

console.log(nigerianJollof);
