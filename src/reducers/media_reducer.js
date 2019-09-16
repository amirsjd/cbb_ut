
export default function(state = [], action) {
    
    switch(action.type) {
        case 'MEDIA': 
            return [
                ...state, {
                    id: action.id, 
                    payload: action.payload
                }
            ]
        default:
            return state
    }
} 