import { PEOPLE } from '../actions'

export default function(state = {}, action) {
    
    switch(action.type) {
        case PEOPLE.FACULTY + '_CHILDREN': 
            return {...state, faculty:    action.payload}
        case PEOPLE.STAFF + '_CHILDREN': 
            return {...state, staff:      action.payload}
        case PEOPLE.PROFESSORS + '_CHILDREN': 
            return {...state, professors: action.payload}
        case PEOPLE.GRADUATES + '_CHILDREN': 
            return {...state, graduates:  action.payload}
        default:
            return state
    }
} 