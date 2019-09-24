const server = require('./API/server')

const PORT = process.env.PORT || 5006

server.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}...`)
})

