import {key, proxy} from '../config'
import axios from 'axios'
export default class Search {
    constructor(query) {
        this.query = query
    }
    async getResult() {
        
        try {
            const res = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${this.query}`)
            this.result = res.data.recipes
            console.log(this.result)
        }catch (err) {
            alert(err)
        }
    }
}