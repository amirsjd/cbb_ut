import { combineReducers } from 'redux'

//// reducers
import info from './info_reducer'
import news from './news_reducer'

const rootReducer = combineReducers({
    info, news
})

export default rootReducer 