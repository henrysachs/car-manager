const express = require('express');
const bodyParser = require('body-parser');
const app = express();

/*
 * handels json parsing
 * Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
 */
app.use(bodyParser.json());
/* 
 * just allow string and array like objects in the req body but you cant have json in json objects
 * else there is the possibility for Cross-Site Request Forgery Attacks and more securing needs to be done
 */
app.use(bodyParser.urlencoded({
    extended: false
}));

app.get('/hello', (req, res) => {
    res.json({
        message: 'hello'
    });
});

let cars = [{
        id: 1,
        ps: 90,
        model: 'Polo',
        year: 2017,
        brand: 'Volkswagen'
    },
    {
        id: 2,
        ps: 110,
        model: 'Golf',
        year: 2018,
        brand: 'Volkswagen'
    },
    {
        id: 3,
        ps: 210,
        model: 'E220',
        year: 2017,
        brand: 'Mercedes'
    },
];

app.get('/cars', (req, res) => {
    res.json(cars);
});

app.post('/cars', (req, res) => {
    console.log(req.body);
    res.statusCode = 200;
    cars.push(req.body);
    res.json(cars);

});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log('server started on port ' + port)
})