const bodyParser = require('body-parser');
const path = require('path');


const routes = require('../routes');
const dirPath = path.join(__dirname, '../../views/404.html');

function expressLoader(app) {
    app.use(bodyParser.json());

    app.use(routes);

    app.use(function(req, res) {
        res.status(404).sendFile(dirPath);
    })

    app.use(function(err, req, res) {
        console.error(err);
        res.status(500).json({error: err.message});
    });
}

module.exports = expressLoader;