import axios from 'axios'

/* Constants */

const URL = 'http://cbb-ut.gigfa.com/wp-json'
const URL2 = 'http://cbb-ut.gigfa.com/wp-json/wp/v2'
const config = { withCredentials: true, }

export const PAGES = {
    ABOUT: 'ABOUT',
    CONTACT: 'CONTACT',
    SITEMAP: 'SITEMAP',
    PRIVACY: 'PRIVACY',
    PEOPLE: 'PEOPLE',
    TOOLS: 'TOOLS',
}

export const CATEGORIES = {
    NEWS: 'NEWS',
    BLOG: 'BLOG'
}

/* Functions */

const getCatIdBySlug = (cat) => 
    axios.get(
        `${URL2}/categories?slug=${cat}`, //chngd
        config
    )
    .then(res => res.data[0].id)

/* getters */

export function getInfo() {

    const req = axios.get(`${URL}/`, config)
                .then(res => res.data)

    return {
        type: 'INFO', 
        payload: req
    }
}

export function getPostsByCat(cat,page,per_page) {

    const req = getCatIdBySlug(cat)
        .then((id) => {

            const CAT = `categories=${id}`
            const PAGE = page? `&page=${page}` : ''
            const PER_PAGE = per_page? `&per_page=${per_page}` : ''

            return axios.get(
                `${URL2}/posts?${CAT}${PAGE}${PER_PAGE}`, 
                config
            )
            .then(res => 
                res.data
            )}
        )

    return {
        type: `${cat}`, 
        payload: req
    }
}

export function getPageBySlug(slug) {

    const req = axios.get(
        `${URL2}/pages?slug=${slug}`, 
        config
    ).then(res => res.data)

    return {
        type: `${slug}`,
        payload: req
    }
}

/* -- Search -- */

export function findPostsByCat(cat) {

    const url = `${URL2}/posts?categories=`

    let req = getCatIdBySlug(cat)
        .then((id) => 
            axios.get(
                url + id, 
                config
            )
            .then(res => 
                res.data
            )
        )

    return {
        type: `${cat}`, 
        payload: req
    }
}

/* cleaners */