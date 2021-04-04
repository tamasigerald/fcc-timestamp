const express = require('express');
const cors = require('cors');

const config = require('./config');
const loader = require('./loader');

function serverBootstrap() {
    
    const app = express();
    app.use(cors());
    const server = app.listen(config.server.port);

    server.on('error', onError);
    server.on('listening', function() {
        console.info(`Server is listening on port ${config.server.port}`);
        loader(app);
    })

    function onError(err) {
        switch(err.code) {
            case 'EACCES':
                console.error('Requires elevated privileges!');
                break;
            case 'EADDRINUSE':
                console.error(`Port ${config.server.port} already in use!`);
            default:
                console.error(err);
        }
    }
}

serverBootstrap();