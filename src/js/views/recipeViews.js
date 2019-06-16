import {DOMEls} from './base'

export const clearRecipe = () => {
    DOMEls.recipeDetails.innerHTML = ''
}

export const renderRecipe = recipe => {
    const markup = `
        <figure class="recipe-img">
            <img src="${recipe.img}" alt="" class="img">
            <div class="text">
                <div class="name">${recipe.title}</div>
            </div>
        </figure>
    `
    DOMEls.recipeDetails.insertAdjacentHTML('afterbegin', markup)
}