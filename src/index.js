const express = require('express');

const app = express();

app.get('/', (request, response) => {
    response.json({
        message: 'Hey World'
    });
});

app.listen(3333);