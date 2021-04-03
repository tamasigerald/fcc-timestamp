const expressLoader = require('./loaders/expressLoader');

function loader(app) {

    expressLoader(app);
    console.info('Express ready!');

}

module.exports = loader;