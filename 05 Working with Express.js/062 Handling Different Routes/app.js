const express = require('express');

const app = express();

app.use('/',(req, res , next) => {
    console.log('always run');
    next();
});

app.use('/add-product',(req, res , next) => {
    console.log('product middleware');
    res.send('<h1>Add product page<h1>');
});

app.use('/',(req, res , next) => {
    console.log('In the another middleware');
    res.send('<h1>Hello from express!<h1>');
});

app.listen(3000);

