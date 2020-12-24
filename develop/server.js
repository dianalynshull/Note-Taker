const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.listen(PORT, () => {
    console.log('App is listening on PORT: ' + PORT);
});