import { PAGES } from '../actions' 

export default function(state = {}, action) {
    
    switch(action.type) {
        case PAGES.ABOUT: 
            return {...state, aboutPage:    action.payload}
        case PAGES.CONTACT: 
            return {...state, contactPage:  action.payload}
        case PAGES.PEOPLE: 
            return {...state, peoplePage:   action.payload}
        case PAGES.PRIVACY: 
            return {...state, privacyPage:  action.payload}
        case PAGES.SITEMAP: 
            return {...state, sitemapPage:  action.payload}
        case PAGES.TOOLS: 
            return {...state, toolsPage:    action.payload}
        default:
            return state
    }
} 