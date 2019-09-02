import axios from 'axios'

/* Constants */

const URL = 'http://cbb-ut.gigfa.com/wp-json'
const config = {
    headers: {
        Cookie: "__test= 82bedf416aff4e3e4cb1734660a46f2a"
    },
    withCredentials: true
}
const catIds = {
    news: 2,
    blog: 3
}

const pageIds = {
    people: 52,
    about: 10,
    tools: 7
}

/* Functions */

const catsSwitch = (cat) => {
    switch (cat) {
        case 'NEWS': return catIds.news
        case 'BLOG': return catIds.blog
        default: return null
    }
}

const pagesSwitch = (page) => {
    switch (page) {
        case 'PEOPLE': return pageIds.people
        case 'ABOUT': return pageIds.about
        case 'TOOLS': return pageIds.tools
        default: return null
    }
}

/* getters */

export function getInfo() {

    const req = axios.get(`${URL}/`, config)
                .then(res => res.data)

    return {
        type: 'INFO', 
        payload: req
    }
}

export function getPostsByCats(cats) {

    let catIdsList = cats.map(cat => catsSwitch(cat))

    let catsList = catIdsList.map(id => id + ',' )

    const req = axios.get(
            `${URL}/wp/v2/posts?categories=${catsList}`, 
            config
        ).then(res => res.data)

    return {
        type: 'POSTS', 
        payload: req
    }
}

export function getNews() {

}

export function getBlog() {

}

export function getPage(page) {
    const pageId = pagesSwitch(page)

    const req = axios.get(
        `${URL}/wp/v2/pages/${pageId}`, 
        config
    ).then(res => res.data)

    return {
        type: `${page}`,
        payload: req
    }
}

export function getPagesByParent(parent) {
    const parentId = pagesSwitch(parent)

    const req = axios.get(
        `${URL}/wp/v2/pages?parent=${parentId}`, 
        config
    ).then(res => res.data)

    return {
        type: `${parent}_PAGES`,
        payload: req
    }
}

/* cleaners */