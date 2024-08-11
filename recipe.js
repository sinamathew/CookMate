class Recipe {
  // Created private properties
  #name;
  #description;
  #ingredents;
  #instructions;
  #dietInfo;
  #additionalInfo;

  // Initializing the class
  constructor(name, description, ingredents, instructions, dietInfo, additionalInfo) {
    this.name = name;
    this.description = description;
    this.#ingredents = ingredents;
    this.#instructions = instructions;
    this.#dietInfo = dietInfo;
    this.additionalInfo = additionalInfo;
  }

  // Getter methods for the private properties
  get name() {
    return this.#name
  }

  get description() {
    return this.#description;
  }

  get additionalInfo() {
    return this.#additionalInfo;
  }

  get ingredents() {
    return this.#ingredents;
  }

  get instructions() {
    return this.#instructions;
  }

  get dietInfo() {
    return this.#dietInfo;
  }
}


// A function to create new recipe
export const createRecipe = (name, description, ingredents, instructions, dietInfo, additionalInfo) => {
  return new Recipe(name, description, ingredents, instructions, dietInfo, additionalInfo);
}

