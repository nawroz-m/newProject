const express = require('express')
const path = require('path')
const cons = require('consolidate')
const hbs = require('hbs')

const app = express()

const port = process.env.PORT || 3000
//Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//Setup handlebars engine and views location

app.engine('html', cons.swig)
app.set('view engine', 'html')
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)





//Setup static directory to serve
app.use(express.static(publicDirectoryPath))


// Weather Rout
app.get('/', (req, res)=>{
    res.render('index',{
        title: 'Weather',
        name: 'Nawroz'
    
    })
})





app.get('/weather', (req, res)=>{
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address!!'
        })
    }

    // geocode(req.query.address, (error, {latitude, longitude, location})=>{
    //     if(error){
    //         return res.send({error})
    //     }

    //     forecast(latitude, longitude, (error, forecastData) =>{
    //         if(error){
    //             return res.send({error})
    //         }
    //         res.send({
    //             forcast: forecastData,
    //             location,
    //             address: req.query.address
    //         })
    //     })
    // })
    res.render('index', {
        title: 'Weather',
        name: 'Nawroz',
        address: req.query.address
    })
})

// Car and Vehicles rout
app.get('/cars&vehicles', (req, res)=>{
    res.render('cars&vehicles', {
        title: 'Car & Vehicles',
        name: 'Nawroz',
        vehicleText: 'This is some car and vehicles staf text.'
    })
})

app.get('/forSale', (req, res)=>{
    res.render('forSale', {
        title: 'For Sale',
        name: 'Nawroz',
        saleText: 'This is some thing for sale text.'
    })
})

app.get('/jobs', (req, res)=>{
    res.render('jobs', {
        title: 'Jobs',
        name: 'Nawroz',
        jobsText: 'This is some thing for job text.'
    })
})

app.get('/services', (req, res)=>{
    res.render('services', {
        title: 'Services',
        name: 'Nawroz',
        servicesText: 'This is some Services text.'
    })
})

app.get('/comunity', (req, res)=>{
    res.render('comunity', {
        title: 'Comunity',
        name: 'Nawroz',
        comunityText: 'This is the comunity text.'
    })
})

app.get('/about', (req, res)=>{
    res.render('about', {
        title: 'About',
        name: 'Nawroz',
        aboutText: "This is some about text."
    })
})


// app.get('/about', (req, res)=>{
//     res.sendFile(path.join(__dirname, '../views/about.html'))
// })

app.get('/contact', (req, res)=>{
    res.render('contact', {
        title: 'Contacts',
        name: 'Nawroz',
        contactText: "This is some Contact text."
    })
})

app.get('/help', (req, res)=>{
    res.render('help', {
        title: 'Help',
        name: 'Nawroz',
        helpText: 'This is some helpful text.'
    })
})

app.get('/help/*', (req, res)=>{
    res.render('my404',{
        title: "404",
        name: 'Error Handler',
        errorMessage: 'Help article not found!'
    })
})

app.get('*', (req, res)=>{
    res.render('my404', {
        title: '404',
        name: 'Error Handler',
        errorMessage: 'Page not found!'
    })
})


app.listen(port, ()=>{
    console.log("Server is connected to port "+port)
})