const plantsInField = [];

export const addPlant = (seedData) => {
    if (Array.isArray(seedData)) {
        for (const seed of seedData) {
            plantsInField.push(seed);
        }
    } else {
        plantsInField.push(seedData);
    }
}

export const usePlants = () => {
    return [...plantsInField];
}