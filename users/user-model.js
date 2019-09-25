const db = require('../data/dbConfig')

module.exports = {
    getUsers,
    getUserById,
    addUser,
    findUser,
    createProfile
}

function getUsers(){
    return db('user')
}

function getUserById(id){
    return db('user').where({id: Number(id)})
}

function addUser(user){
    return db('user')
            .insert(user)
            .then(ids => ({id: ids[0]}))
}

function findUser(filter){
    return db('user')
            .where(filter)
            .then(users => (users[0]))
            
}

function createProfile(profile){
    return db('user_profile')
            .insert(profile)
            .then(ids => ({id: ids[0]}))
}
