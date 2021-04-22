const path = require('path');
const express = require('express');
const mainRouter = require('./v1/src/mainRouter');
const problemRouter = require('./v1/src/problemRouter');

const app = express();

app.use('/asset', express.static(path.join(__dirname, '/v1/asset')));
app.use('/problem', problemRouter);
app.use('/', mainRouter)

var port = process.env.PORT || 8000;
app.listen(port, function() {
    console.log(`KSACAPE listening on port ${port}!`);
});