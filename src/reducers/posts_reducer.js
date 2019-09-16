import { CATEGORIES } from '../actions'

export default function(state = {}, action) {
    
    switch(action.type) {
        case CATEGORIES.NEWS: 
            return {...state, news: action.payload}
        case CATEGORIES.BLOG: 
            return {...state, blog: action.payload}
        case CATEGORIES.EVENTS:
            return {...state, events: action.payload}
        default:
            return state
    }
} 