// Import the express module
const express = require('express')
const apiRouter = require('./api/routes')

// Create a new express app
const app = express()

// Create a handler function, parameter required are request (req) and response (res)
function rootHandler(req, res) {
    res.send('Hello World!')
}

// Create a route
app.get('/', rootHandler)

// Or you can write the handler function directly in the route

app.get('/about', function (req, res) {
    res.send("This is the about page")
})

// You can use the arrow function to create a new function
const contactHandler = (req, res) => {
    res.send("This is the contact page")
}

app.get('/contact', contactHandler)

// You can also use the arrow function directly in the route
app.get('/portfolio', (req, res) => {
    res.send("This is the portfolio page")
})

// Use an external router
app.use('/api', apiRouter)

// Don't forget to tell your app to listen to a certain port
app.listen(3000, () => {
    console.log(`App is listening on port 3000`)
})
