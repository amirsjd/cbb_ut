import { combineReducers } from 'redux'

//// reducers
import info from './info_reducer'
import posts from './posts_reducer'
import page from './page_reducer'

const rootReducer = combineReducers({
    info, posts, page
})

export default rootReducer 