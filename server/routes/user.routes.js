const {register, login, logout} = require('../controller/user.controllers');

module.exports = app => {
    app.post("/api/user/register", register);
    app.post("/api/user/login", login);
    app.post("/api/user/logout", logout);
}

// Compare this snippet from server/routes/test.routes.js:
