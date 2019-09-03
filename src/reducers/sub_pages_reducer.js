export default function(state = {}, action) {
    
    switch(action.type) {
        case 'PEOPLE_PAGES': 
            return {...state, peoplePage: action.payload}
        case 'TOOLS_PAGES': 
            return {...state, toolsPage: action.payload}
        default:
            return state
    }
} 