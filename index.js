var express = require('express');
var app = express();

const keycloak = require('./config/keycloak-config.js').initKeycloak();
app.use(keycloak.middleware());

const testController = require('./controllers/test-controller.js');
app.use('/test', testController);

app.get('/', function (req, res) {
    console.log("Server is up!");
});

app.listen(3000);