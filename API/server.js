const express = require('express');

const server = express();

server.use(express.json());

server.get('/test', (req,res) => {
    res.json('it working!')
})

//GET users
server.get('/api/users', (req,res) => {
    db.getUsers()
        .then(users => {
            res.status(200).json(users)
        })
        .catch(err => {
            res.status(500).json({message: "Fail to retrieve users"})
        })
})



















module.exports = server;