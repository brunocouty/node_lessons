// import Express JS
const express = require('express');

const app = express();

// Enable routes to work with json received on thorought
app.use(express.json());

app.get('/project', (request, response) => {
    // Get request query params
    const query = request.query;
    // Get request query params by name and attr name to vars
    const { name_var_1, name_var_2 } = request.query;
    response.json({
        message: 'Hey dev!'
    });
});

// Send parameters on url
app.get('/project/:id', (request, response) => {
    // Get route params
    const params = request.params;
    // Get route params
    const { id, name } = request.params;
    response.json({
        message: 'Hey dev!'
    });
});

app.post('/project', (request, response) => {
    // Get post / put params
    const params = request.body;
    // Get post / put params
    const { id, name } = request.body;
    response.json({
        message: 'Hey dev!'
    });
});

// Listen a port
app.listen(3333, () => {
    // Run when app start
    console.log('👉🏻 Server started 😀!')
});