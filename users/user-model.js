const db = require('../data/dbConfig')

module.exports = {
    getUsers,
    addUser,
    findUser,
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

function findUser(filter){
    return db('user').where(filter)
}

function createProfile(profile){
    return db('user_profile')
            .insert(profile)
            .then(ids => ({id: ids[0]}))
}