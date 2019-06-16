import * as searchView from './views/searchViews'
import * as recipeView from './views/recipeViews'
import Recipe from './models/Recipe'
import {DOMEls} from './views/base'
import Search from './models/Search'


const state = {}

const controlSearch = async () => {
    const query = searchView.getInput()
    if (query) {
        state.search = new Search(query)
        searchView.clearResult()
        searchView.clearInput()
        try {
            await state.search.getResult()
            searchView.renderResults(state.search.result)
        } catch (err) {
            alert(err)
        }
        
    }
}

DOMEls.searchForm.addEventListener('submit', (e) => {
    e.preventDefault()
    controlSearch()
})

const controlRecipe = async () => {
    const id = window.location.hash.replace('#', '')
    console.log(id)

    if (id) {
        recipeView.clearRecipe()
        state.recipe = new Recipe(id)
        await state.recipe.getRecipe()
        recipeView.renderRecipe(state.recipe) 
        
    }
}

window.addEventListener('hashchange', controlRecipe)
window.addEventListener('load', controlRecipe)

// //////////  flitering the recipe /////////////
// let recipeName = ['pizza', 'amala', 'hot dog', 'doughnut', 'rice', 'fried chicken']
// document.querySelector('form').addEventListener('input', (e)=> {
//     document.querySelector('.filters').innerHTML = ''
//     let filters = recipeName.filter((name)=>{
//         return name.includes(e.target.value)
//     })
    
//     if (e.target.value !== '') {
//         document.querySelector('.filters').style = 'opacity: 1;'
//         filters.forEach((recipe)=>{
//             const filterate = document.createElement('p')
//             filterate.textContent = recipe
//             document.querySelector('.filters').appendChild(filterate)
//             filterate.addEventListener('click', ()=>{
//                 e.target.value = filterate.textContent
//                 document.querySelector('.filters').innerHTML = ''
//             })
//         })
//     } else {
//         document.querySelector('.filters').innerHTML = ''
//     }
// })

// document.querySelector('input').select()

