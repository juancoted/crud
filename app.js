require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const app = express()

//Config JSON response
app.use(express.json())

// Models
const User = require('./models/User')

// Open Route - Public Route
app.get('/', (req, res) => {
    res.status(200).json({ msg: 'Bem vindo a nossa API!'})
})
// Register User

app.post('/auth/register', async(req, res) => {
    const {name, email, password, confimpassword } = req.body

        // Validations
        if (!name) {
            return res.status(422).json( {msg:'O nome é obrigatório!'})
        }
})

// Credencials
const dbUser = process.env.DB_USER
const dbPass = process.env.DB_PASS

mongoose
    .connect(
        `mongodb+srv://${dbUser}:${dbPass}@cluster0.dm3xipe.mongodb.net/?retryWrites=true&w=majority`
        )
    .then(()=>{
    app.listen(3000)
    console.log("Conectou ao banco!")
}).catch((err) => console.log(err))

