
export default function(state = {}, action) {
    
    switch(action.type) {
        case 'POSTS': 
            return {...state, posts: action.payload}
        default:
            return state
    }
} 