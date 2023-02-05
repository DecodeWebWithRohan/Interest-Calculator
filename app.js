/**
 * Module dependencies and constant configs
 */

const path = require('path');
const express = require('express');

const ROOT_DIR = path.resolve(__dirname, 'public');
const PORT = process.env.PORT || 4200;

/**
 * Initiate an express app
 */
const app = express();
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'Get, PUT, POST, DELETE, PATCH, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, Observe, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);

    if (req.method === 'OPTIONS') {
        res.status(200);
        res.end();
    } else {
        next();
    }
});

app.use(express.static(ROOT_DIR));

/**
 * Configure routes
 */
app.get('/', (req, res) => res.sendFile('index.html', { root: ROOT_DIR }));

/**
 * Handle errors by adding it as a middleware
 */
app.use((err, req, res, next) => {
    res.status(err.status || 500).send('Some error has occured.');
});

/**
 * Start the app by listening to a specific port
 */
app.listen(PORT, () => console.log('Server running at port: ' + PORT));
