import {DOMEls} from './base'
export const getInput = () => DOMEls.searchInput.value

export const clearResult = () => {
    DOMEls.recipeList.innerHTML = ''
}
export const clearInput = () => {
    DOMEls.searchInput.value = ''
}


const renderRecipe = recipe => {
    const marcup = `
        <li class="item">
            <a href="#${recipe.recipe_id}" class="link">
            <figure>
                <img src="${recipe.image_url}" alt="" class="recipe-img">
            </figure>
            <div class="details">
                <div class="name">${recipe.title}</div>
                <div class="text">${recipe.publisher}</div>
            </div>
            </a>
        </li>
    `
    DOMEls.recipeList.insertAdjacentHTML('beforeend', marcup)
}

export const renderResults = recipes => {
    recipes.forEach(renderRecipe)
}