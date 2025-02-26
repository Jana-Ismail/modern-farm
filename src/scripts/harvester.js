export const harvestPlants = (plantsArr) => {
    const plantsOutput = []
    for (const plantObj of plantsArr) {
        let output = plantObj.output

        if (plantObj.type === "Corn") {
            output = plantObj.output / 2
        }

        for (let i = 0; i < output; i++) {
            plantsOutput.push(plantObj);
        }
    }

    plantsOutput.sort((a, b) => a.type.localeCompare(b.type))

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

    return plantsOutput
}