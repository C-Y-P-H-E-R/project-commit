const express = require("express")
const app = express()
const cors = require('cors')
// const hbs = require("hbs")
const LogInCollection = require("./mongo")
const port = process.env.PORT || 3001
app.use(express.json())
app.use(cors())

app.use(express.urlencoded({ extended: true }))


app.get('/signup', (req, res) => {
    res.send('connected!')
})

app.get('/', (req, res) => {
    res.render('login')
})

app.post('/signup', async (req, res) => {
    // console.log('backend',req.body)
    
    const data = {
        name: req.body.name,
        password: req.body.password
    }

    // console.log()

   try{
        const checking = await LogInCollection.findOne({ name: req.body.name })


        // console.log(checking)
        if(checking === null) {
            await LogInCollection.insertMany([data]);

            res.send({
                "status": 201,
                "message": "Okay!"
            })
        } else {
            res.send({
                "status": 301,
                "message" : "user already exists!!",
            })
        }

   }
   catch(error) {
        res.send({
            "message": error.message
        })
   }
})


app.post('/login', async (req, res) => {
    console.log(req.body)
    try {
        const check = await LogInCollection.findOne({ name: req.body.name })
        // console.log(check)

        if (check.password === req.body.password) {
            res.send({
                "status": 201,
                "message": "okay!!"
            })
        }

        else {
            res.send({
                "message": "incorrect password"}
            )
        }
    } 
    catch (e) {
        res.send({
            "message": e.message}
            )
    }
})

app.listen(port, () => {
    console.log('port connected');
})