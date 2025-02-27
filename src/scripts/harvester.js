const outputTotals = {
    Asparagus: 0,
    Corn: 0,
    Potato: 0,
    Soybean: 0,
    Sunflower: 0,
    Wheat: 0
}

let plantObjId = 0

export const harvestPlants = (plantsArr) => {
    const plantsOutput = []
    for (const plantObj of plantsArr) {
        let output = plantObj.output;
        const plantType = plantObj.type;

        if (plantType === "Corn") {
            output = plantObj.output / 2;
        }

        for (let i = 0; i < output; i++) {
            plantObjId++
            const harvestedPlant = {...plantObj, id: plantObjId}
            plantsOutput.push(harvestedPlant);    
            outputTotals[`${plantType}`] += 1;
        }
    }

    // option to sort harvested plants output
    // alphabetically by type
        // plantsOutput.sort((a, b) => a.type.localeCompare(b.type))

        // ||

        // plantsOutput.sort((a, b) => {
        //     const typeA = a.type
        //     const typeB = b.type

        //     if (typeA < typeB) {
        //         return -1;
        //     }
        //     if (typeA > typeB) {
        //         return 1
        //     }
        //     return 0;
        // });
    console.log(outputTotals)
    return plantsOutput
}

export const getYearlyOutputTotals = () => {
    return {...outputTotals}
}