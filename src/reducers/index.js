import { combineReducers } from 'redux'

//// reducers
import news from './news_reducer'

const rootReducer = combineReducers({
    news
})

export default rootReducer 