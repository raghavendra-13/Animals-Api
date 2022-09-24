const express = require('express');
const app = express();
const { default: mongoose } = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());

//Import Routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);
//app.use('/animals',animalsRoute);



//Routes
app.get('/', (req,res) => {
    res.send('We are on home');
});



//Connection to Database
mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log("connected to DB!");
})

//Listening of port on server
app.listen(3000);