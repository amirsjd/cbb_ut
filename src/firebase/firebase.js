import * as firebase from 'firebase'

import config from './config.json'

// initialize firebase app
firebase.initializeApp(config)

// db namespaces
const firebaseDB = firebase.database()
const googleAuth = new firebase.auth.GithubAuthProvider();

const firebaseNews = firebaseDB.ref('News')
const firebaseBlog = firebaseDB.ref('Blog')
const firebaseRoles = firebaseDB.ref('Roles')

const firebaseLooper = (snapshot) => {
    const data = [] 
    snapshot.forEach((childSnapshot) => {
        data.push({
            ...childSnapshot.val(),
            id: childSnapshot.key
        })
    })
    return data
}

export {
    firebase,
    firebaseDB,
    googleAuth,
    firebaseNews,
    firebaseBlog,
    firebaseRoles,
    firebaseLooper
}