import { createAsparagus } from "./asparagus.js";
import { createCorn } from "./corn.js";
import { createPlan } from "./plan.js"
import { createPotato } from "./potato.js";
import { createSoybean } from "./soybean.js";
import { createSunflower } from "./sunflower.js";

const yearlyPlan = createPlan();
const asparagusSeed = createAsparagus();
const cornSeed = createCorn();
const potatoSeed = createPotato();
const soybeanSeed = createSoybean();
const sunflowerSeed = createSunflower();


console.log("Welcome to the main module")
console.log(asparagusSeed)
console.log(cornSeed)
console.log(potatoSeed)
console.log(soybeanSeed)
console.log(sunflowerSeed)

