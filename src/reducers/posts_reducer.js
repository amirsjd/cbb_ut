
export default function(state = {}, action) {
    
    switch(action.type) {
        case 'NEWS': 
            return {...state, news: action.payload}
        case 'BLOG': 
            return {...state, blog: action.payload}
        default:
            return state
    }
} 