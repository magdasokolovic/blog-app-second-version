const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const authRoute = require('./routes/auth')
const usersRoute = require('./routes/users')
const postRoute = require('./routes/posts')
const categoriesRoute = require('./routes/categories')
const multer = require('multer')


dotenv.config()
app.use(express.json())

mongoose.connect(process.env.MONGO_URL, 
    {useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true,
}).then(console.log('connected to MONGODB')).catch(err=>console.log("error: " + err))

// CREATE STORAGE OF IMAGES: 
const storage = multer.diskStorage({
    destination: (req, file, callback)=>{
        callback(null, "images")
    }, 
    filename: (req, file, callback)=>{
        callback(null, "helllo.jpg")
    }
})

const upload = multer({
    storage:storage
})

app.post('/api/upload', upload.single('file'), (req, res)=>{
    res.status(200).json('File has been uploaded')
})

app.use('/api/auth', authRoute)
app.use('/api/users', usersRoute)
app.use('/api/posts', postRoute)
app.use('/api/categories', categoriesRoute)


app.listen("5001", ()=>{
    console.log('backend is running on port 5001')
})