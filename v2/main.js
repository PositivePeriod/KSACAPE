const version = 'v2';

const path = require('path');
const express = require('express');
// const mainRouter = require(`./${version}/src/mainRouter`);
// const problemRouter = require(`./${version}/src/problemRouter`);

const app = express();

// app.set('views', path.join(__dirname, `${version}/views`));
// app.set('view-engine', 'ejs');

app.use('/assets', express.static(path.join(__dirname, `/assets`)));

// app.use('/problem', problemRouter);
// app.use('/', mainRouter)

var port = process.env.PORT || 8000;
app.listen(port, function() {
    console.log(`KSACAPE listening on port ${port}!`);
});