const db = require('../db/db.json');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

module.exports = app => {
    // api get route for getting already created notes
    app.get('/api/notes', (req, res) => {
        res.json(db);
    });
    
    // api post route to create new notes, store them in the database, and then display them on the page
    app.post('/api/notes', async (req, res) => {
        try {
            req.body.id = uuidv4();
            db.push(req.body);
            fs.writeFileSync('./db/db.json', JSON.stringify(db, null, 2)); 
            res.json(true);
        } catch (err) {
            console.log(err);
        };
    });
    // app delete route to delete notes from the database
    app.delete('/api/notes/:id', (req, res) => {
        const index = db.map((tasks) => { return tasks.id; }).indexOf(req.params.id);
        db.splice(index, 1);
        fs.writeFileSync('./db/db.json', JSON.stringify(db, null, 2));
        res.json(true);
    });
};
