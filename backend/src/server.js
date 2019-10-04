const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://kaka:dickjack12@omnistack-zvo3l.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// req.query = acessar query params (to filter)
// req.params = acessar route params (put and post)
// req.body = acessar body requisition

app.use(express.json());
app.use(routes);

app.listen(4500);