import { PEOPLE, CLEAR } from '../actions'

export default function(state = {}, action) {
    
    switch(action.type) {
        case PEOPLE.FACULTY + '_CHILDREN': 
            return {...state, children: action.payload}
        case PEOPLE.STAFF + '_CHILDREN': 
            return {...state, children: action.payload}
        case PEOPLE.PROFESSORS + '_CHILDREN': 
            return {...state, children: action.payload}
        case PEOPLE.GRADUATES + '_CHILDREN': 
            return {...state, children: action.payload}
        case CLEAR + '_CHILDREN': 
            return {...state, children: action.payload}
        default:
            return state
    }
} 