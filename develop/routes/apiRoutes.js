const db = require('../db/db.json');

module.exports = app => {
    // api get route for getting already created notes
    app.get('/api/notes', (req, res) => {
        res.json(db);
    });
    
    // api post route to create new notes, store them in the database, and then display them on the page
    app.post('/api/notes', async (req, res) => {
        try {
            db.push(req.body);
            res.json(true);
        } catch (err) {
            console.log(err);
        };
    });
    // app delete route to delete notes from the database
};
