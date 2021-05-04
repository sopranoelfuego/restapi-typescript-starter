import express from 'express';
import log from './config/log';
import config from './config/config';
import router from './routes';

const app = express();

const NAMESPACE = 'server';
// logging
app.use((req, res, next) => {
    log.info(NAMESPACE, `METHOD - [${req.method}] URL - [${req.url}] IP - [${req.socket.remoteAddress}]`);

    res.on('finish', () => {
        log.info(NAMESPACE, `METHOD - [${req.method}] URL - [${req.url}] IP - [${req.socket.remoteAddress}]`, `STATUS - [${res.statusCode}]`);
    });
    next();
});

// middlware
app.use('/', router);
// setting server

app.listen(config.server.port, () => log.info(NAMESPACE, `server running on ${config.server.hostname} :${config.server.port}`));
