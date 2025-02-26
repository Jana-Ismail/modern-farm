import { usePlants } from "./field.js";
import { createPlan } from "./plan.js"
import { plantSeeds } from "./tractor.js";


const yearlyPlan = createPlan();
plantSeeds(yearlyPlan)
console.log(usePlants())


