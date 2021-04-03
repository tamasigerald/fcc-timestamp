const bodyParser = require('body-parser');

const routes = require('../routes');

function expressLoader(app) {
    app.use(bodyParser.json());

    app.use(routes);

    app.use(function(req, res) {
        res.status(404).json({error: 'Page not found!'});
    })

    app.use(function(err, req, res) {
        console.error(err);
        res.status(500).json({error: err.message});
    });
}

module.exports = expressLoader;