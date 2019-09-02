import { combineReducers } from 'redux'

//// reducers
import info from './info_reducer'
import posts from './posts_reducer'

const rootReducer = combineReducers({
    info, posts
})

export default rootReducer 