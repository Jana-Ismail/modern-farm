import { createAsparagus } from "./asparagus.js"
import { createCorn } from "./corn.js"
import { addPlant, usePlants } from "./field.js"
import { createPotato } from "./potato.js"
import { createSoybean } from "./soybean.js"
import { createSunflower } from "./sunflower.js"
import { createWheat } from "./wheat.js"

export const plantSeeds = (yearlyPlanArray) => {
    for (let i = 0; i < yearlyPlanArray.length; i++) {
        for (let j = 0; j < yearlyPlanArray[i].length; j++) {
            if (yearlyPlanArray[i][j] === "Asparagus") {
                const asparagusSeed = createAsparagus()
                addPlant(asparagusSeed)
            } else if (yearlyPlanArray[i][j] === "Corn") {
                const cornSeeds = createCorn()
                addPlant(cornSeeds)
            } else if (yearlyPlanArray[i][j] === "Potato") {
                const potatoSeed = createPotato()
                addPlant(potatoSeed)
            } else if (yearlyPlanArray[i][j] === "Soybean") {
                const soybeanSeed = createSoybean()
                addPlant(soybeanSeed)
            } else if (yearlyPlanArray[i][j] === "Sunflower") {
                const sunflowerSeed = createSunflower()
                addPlant(sunflowerSeed)
            } else if (yearlyPlanArray[i][j] === "Wheat") {
                const wheatSeed = createWheat()
                addPlant(wheatSeed)
            }
        }
    }
    // usePlants()
}