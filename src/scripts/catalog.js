export const Catalog = (harvestedPlantsArr) => {
    const container = document.querySelector(".container")
    
    let html = ""
    html += harvestedPlantsArr.map(plant => {
        return `
            <section class="plant">${plant.type}</section>
        `
    }
    ).join("")

    container.innerHTML += html
}
