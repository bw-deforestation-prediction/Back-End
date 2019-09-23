const db = require('../data/dbConfig')

module.exports = {
    getUsers,
    addUser,
    // findUserById,
    createProfile
}

function getUsers(){
    return db('user')
}

function addUser(user){
    return db('user')
            .insert(user)
            .then(ids => ({id: ids[0]}))
}

function createProfile(profile){
    return db('user_profile')
            .insert(profile)
            .then(ids => ({id: ids[0]}))
}