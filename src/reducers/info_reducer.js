
export default function(state = {}, action) {
    
    switch(action.type) {
        case 'INFO': 
            return {...state, info: action.payload}
        default:
            return state
    }
} 