# express-routes-object

Returns a json of routes from [express router](https://expressjs.com/en/api.html#express.router).


Example:

```
const express = require('express');
const router = express.Router();

const getRoutes = require('express-routes-object');

router.get('/route-1', (req, res) => {
    res.render('route-1.njk')
});

router.get('/route-2', (req, res) => {
    res.render('route-2.njk');
})

router.get('/routes', (req, res) => {
    res.json(getRoutes(router););
});


module.exports = router
```

Example output:

```
[
    {
        path: "/route-1",
        stack: [
            {
                name: "<anonymous>",
                keys: [ ],
                regexp: {
                fast_star: false,
                fast_slash: false
            },
            method: "get"
            }
        ],
        methods: {
            get: true
        }
    },
        {
        path: "/route-2",
        stack: [
            {
                name: "<anonymous>",
                keys: [ ],
                regexp: {
                fast_star: false,
                fast_slash: false
            },
            method: "get"
            }
        ],
        methods: {
            get: true
        }
    }
]
```