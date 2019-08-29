import axios from 'axios'

const URL = 'http://192.168.1.103:2020'

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