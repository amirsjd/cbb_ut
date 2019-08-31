import axios from 'axios'

const URL = 'http://cbb-ut.gigfa.com/wp-json'

// getters
export function newsList() {

    const request = axios.get(`${URL}/news?_limit=5`)
                    .then(response => response.data)
    return {
        type: 'NEWS', //title,content
        payload: request
    }
}

// cleaners