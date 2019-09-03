export default function(state = {}, action) {
    
    switch(action.type) {
        case 'PEOPLE': 
            return {...state, peoplePage: action.payload}
        case 'TOOLS': 
            return {...state, toolsPage: action.payload}
        case 'ABOUT': 
            return {...state, aboutPage: action.payload}
        default:
            return state
    }
} 