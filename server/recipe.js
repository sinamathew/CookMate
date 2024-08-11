class Recipe {
  // Created private properties
  #name;
  #description;
  #ingredents;
  #instructions;
  #notes;
  #dietInfo;
  
  // Initializing the class
  constructor(name, description, ingredents, instructions, notes, dietInfo) {
    this.#name = name;
    this.#description = description;
    this.#ingredents = ingredents;
    this.#instructions = instructions;
    this.#notes = notes;
    this.#dietInfo = dietInfo;
  }

  // Getter methods for the private properties
  get name() {
    return this.#name
  }

  get description() {
    return this.#description;
  }

  get notes() {
    return this.#notes;
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

