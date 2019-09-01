import axios from 'axios'

const URL = 'http://cbb-ut.gigfa.com/wp-json'
const config = {
    headers: {
        Cookie: "__test=0f23a13eb65fac2dbc4e40796020d080;"
    },
    withCredentials: true
}
const catId = {
    news: 2
}

/* getters */

export function appInfo() {

    const req = axios.get(`${URL}/`)
                    .then(res => res.data)

    return {
        type: 'INFO', 
        payload: req
    }
}

export function getPostsList(category) {

    switch (category) {
        case 'NEWS': 
        const req = 
            axios.get(
                `${URL}/wp/v2/posts?categories=${catId.news}`, 
                config)
            .then(res => res.data)
        return {
            type: 'NEWS', 
            payload: req
        }
        default: return null
    }

}

/* cleaners */