const express = require("express");
const app = express();
const port = 8000;
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('./server/config/mongoose.config');
require('dotenv').config();
console.log(process.env.SECRET_KEY);

app.use(cookieParser());
app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));

const routes = require('./server/routes/project.routes');
require('./server/routes/user.routes')(app);
routes(app);

app.listen(port, () => console.log('we are running on port 8000'))