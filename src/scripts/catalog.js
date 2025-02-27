// Optional function to return html to display each type of food
// only once, and the total number of harvested plants for each food type
export const Catalog = (outputTotalsObj) => {
    const container = document.querySelector(".container")
    
    let html = `
        <h2>Total Yearly Harvest Outputs</h2>
        <table class="output-table">
        <tr class="output-table-headers">
            <th>Food</th>
            <th>Quantity</th>
        </tr>
    `
    for (const [key, value] of Object.entries(outputTotalsObj)) {
        html += `
            <tr>
                <td class="food-type">${key}</td>
                <td class="food-output">${value}</td>
            </tr>
            `
    }

    html += `</table>`

    container.innerHTML += html
}

// Function to return html for each output plant as its own section/element
// for each occurrence

// export const Catalog = (harvestedPlantsArr) => {
//     const container = document.querySelector(".container")
    
//     let html = ""
//     html += harvestedPlantsArr.map(plant => {
//         return `
//             <section class="plant">${plant.type}</section>
//         `
//     }
//     ).join("")

//     container.innerHTML += html
// }
