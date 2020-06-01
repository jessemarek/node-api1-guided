//import express
const express = require('express')

//create a server
const server = express()

//middleware
server.use(express.json())

let hubs = [
    {
        id: 1,
        name: 'building apis with express',
        lessonId: 1,
        cohort: 'web 30'
    },
    {
        id: 2,
        name: "server routing with express",
        lessonId: 2,
        cohort: 'web 30'
    }
]

let lessons = [
    {
        id: 1,
        name: "lesson 1"
    },
    {
        id: 2,
        name: "lesson 2"
    }
]

//a function to handle GET requests to /
server.get('/', (req, res) => {
    res.send('Hello World!')
})

//Hubs
server.get('/hubs', (req, res) => {
    res.status(200).json(hubs)
})

server.post('/hubs', (req, res) => {
    const hub = req.body

    hubs.push(hub)

    res.status(201).json(hubs)
})

server.delete('/hubs/:id', (req, res) => {
    const id = req.params.id

    hubs = hubs.filter(h => h.id !== Number(id))

    res.status(200).json(hubs)
})

//Lessons
server.get('/lessons', (req, res) => {
    res.status(200).json(lessons)
})

server.post('/lessons', (req, res) => {
    const lesson = req.body

    lessons.push(lesson)

    res.status(201).json(lessons)
})

server.put('/lessons/:id', (req, res) => {
    const id = req.params.id

    lessons = lessons.map(l => (l.id === id) ? req.body : l)

    res.status(200).json(lessons)
})

server.delete('/lessons/:id', (req, res) => {
    const id = req.params.id

    lessons = lessons.filter(l => l.id !== Number(id))

    res.status(200).json(lessons)
})

//listen for requests
const port = 8000

server.listen(port, () => console.log(`\n == API on port ${port} == \n`))