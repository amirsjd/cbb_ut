import { combineReducers } from 'redux'

//// reducers
import info from './info_reducer'
import posts from './posts_reducer'
import page from './page_reducer'
import pages from './pages_reducer'
import people from './people_reducer'

const rootReducer = combineReducers({
    info, posts, page, pages, people
})

export default rootReducer 