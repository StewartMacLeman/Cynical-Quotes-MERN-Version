const express = require('express');
const app = express();
const cors = require('cors');
const quotesRoutes = require('./routes/quotesRoutes')

app.use(cors());
app.use(express.json());
app.use('/', quotesRoutes);

app.listen(5000, () => console.log("The app is running on port 5000."));