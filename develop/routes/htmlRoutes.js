const path = require('path');

module.exports = app => {

    // html route for the index page
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });
    // html route for the notes page

    // html route to send any undefined routes to index

};