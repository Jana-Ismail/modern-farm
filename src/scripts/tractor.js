import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { addPlant } from "./field.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"

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