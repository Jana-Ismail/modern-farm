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
    return plantsOutput
}