import axios from 'axios'

/* Constants */

const URL = 'http://cbb-ut.gigfa.com/wp-json'
const config = {
    headers: {
        //'Access-Control-Allow-Origin': '*'
    },
    withCredentials: true
}

const pageIds = {
    people: 52,
    about: 10,
    tools: 7
}

/* Functions */

const getCatsIds = (cat) => 
    axios.get(
        `${URL}/wp/v2/categories?slug="${cat}"`, 
        config
    )
    .then(res => res.data[0].id)

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

export function getPostsByCat(cat) {

    const url = `${URL}/wp/v2/posts?categories=`

    let req = getCatsIds(cat).then((id) => 
                    axios.get(
                        url + id, 
                        config
                    ).then(res => res.data)
                )

    return {
        type: `${cat}`, 
        payload: req
    }
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