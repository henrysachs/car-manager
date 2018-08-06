const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// create an instance of the express router which allows creating routes
var router = express.Router();


/*
 * handels json parsing
 * Parse incoming request bodies in a middleware before your handlers,
 * available under the req.body property.
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

router.route('/cars')
    .post((req, res) => {
        console.log(req.body);
        res.statusCode = 200;
        // if more than 10 items in the array remove the first one
        if (cars.length > 10) {
            cars.shift();
        }
        cars.push(req.body);
        res.json(cars);
    })
    .get((req, res) => {
        res.json(cars);
    })
    .delete((req, res) => {

        if (cars.length == 0) {
            // Errorhandling if no cars send 400 and json
            res.status(400);
            res.json({
                'error': 'no more cars to delete'
            });
        } else {
            res.status(200);
            cars.pop();
            res.json(cars);
        }
    });

/*
 * register our car routes and prefix them with /api
 */
app.use('/api', router);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log('server started on port ' + port);
});