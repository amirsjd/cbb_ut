import axios from 'axios'

/* Constants */

const PORT = window.location.port

const BASE_URL = (PORT === '8080') ? 
    'http://cbb-ut.gigfa.com' : 
    window.location.origin

const URL = BASE_URL + '/wp-json'
const URL2 = BASE_URL + '/wp-json/wp/v2'
const config = { 
    headers: {
        
    },
    withCredentials: true
}

export const CLEAR = 'CLEAR'

export const CATEGORIES = {
    NEWS:       'NEWS',
    BLOG:       'BLOG',
    EVENTS:     'EVENTS',
}

export const PAGES = {
    ABOUT:      'ABOUT',
    CONTACT:    'CONTACT',
    SITEMAP:    'SITEMAP',
    PRIVACY:    'PRIVACY',
    PEOPLE:     'PEOPLE',
    TOOLS:      'TOOLS',
}

export const PEOPLE = {
    FACULTY:    'FACULTY',
    STAFF:      'STAFF',
    PROFESSORS: 'PROFESSORS',
    GRADUATES:  'GRADUATES',
}


/* Functions */

const getCatId = (slug) => 
    axios.get(
        `${URL2}/categories?slug=${slug}`, //chngd
        config
    ).then(res => res.data[0].id)
    
const getPageId = (slug) => 
    axios.get(
        `${URL2}/pages?slug=${slug}`,
        config
    ).then(res => res.data[0].id)



/* getters */

export function getInfo() {

    const req = axios.get(
        `${URL}/`, config
        ).then(res => res.data)

    return {
        type: 'INFO', 
        payload: req
    }
}

export function getPostsByCat(slug,page,per_page) {

    const req = getCatId(slug)
        .then((id) => {

            const CAT = `categories=${id}`
            const PAGE = page? `&page=${page}` : ''
            const PER_PAGE = per_page? `&per_page=${per_page}` : ''

            return axios.get(
                `${URL2}/posts?${CAT}${PAGE}${PER_PAGE}`, 
                config
            ).then(res => 
                res.data
            )}
        )

    return {
        type: `${slug}`, 
        payload: req
    }
}

export function getPage(slug) {

    const req = axios.get(
        `${URL2}/pages?slug=${slug}`, 
        config
    ).then(res => res.data[0])

    return {
        type: `${slug}`,
        payload: req
    }
}


// for People, Tools, People children
export function getPageChildren(slug,page,per_page) {
    
    const req = getPageId(slug)
    .then((id) => {

        const PARENT = `parent=${id}`
        const PAGE = page? `&page=${page}` : ''
        const PER_PAGE = per_page? `&per_page=${per_page}` : ''

        return axios.get(
            `${URL2}/pages?${PARENT}${PAGE}${PER_PAGE}`, 
            config
        )
        .then(res => 
            res.data
        )}
    )

    return {
        type: `${slug}_CHILDREN`, 
        payload: req
    }
}

export function getMedia(id) {

    const req = axios.get(
        `${URL2}/media/${id}`, 
        config
    ).then(res => res.data)

    return {
        type: 'MEDIA',
        id: id,
        payload: req
    }
}

/* cleaners */

export function clearLastChildren() {
    return {
        type: `CLEAR_CHILDREN`, 
        payload: null
    }
}


/* -- Search -- */

//export function findPostsByCat(cat) 