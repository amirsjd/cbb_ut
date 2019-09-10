export default function(state = {}, action) {
    
    switch(action.type) {
        case 'PEOPLE_CHILDREN': 
            return {...state, peopleChildren: action.payload}
        case 'TOOLS_CHILDREN': 
            return {...state, toolsChildren: action.payload}
        default:
            return state
    }
} 