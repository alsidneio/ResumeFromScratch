const express = require('express');
const path = require('path');
//initializing the app 
const app = express();

//Grabbing all static Assets
app.use(express.static('public'));


//load the view engine
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'pug');

//Home route 
app.get('/', (req,res) => {
    res.render('index')
});

//Starting the web server
app.listen(3000, () => console.log("Listening on port 3000"))