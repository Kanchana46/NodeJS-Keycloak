var session = require('express-session');
var Keycloak = require('keycloak-connect');

let _keycloak;

var keycloakConfig = {
    clientId: 'node-app',
    bearerOnly: true,
    serverUrl: 'http://localhost:8080',
    realm: 'Demo-Realm',
    realmPublicKey: 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAvFmhE5GFUUy8rVFwd3yULpzw+PSY+9Yq0E19GvTorQK8InA2JvroNdjr3ur6iM0nkFJjIR23VSKyuwTWzQ3veVlUuAR7ocO+BvFvZdbHbPLIQT9wT3ETvsuT3EmV6Z6svmgf8pgc+ag19J9hqE1F+HxwM9fIyPMTQFeR2HuEEsu9qyLwv4/xs3ekQ3x+fsdaQ76gr3PG6a/g5JxRU3HbjLpy+2xMXVn0vHnezkZzDax3HmlrlCVsHSIdmnBWF2eojKhhV9nCmVXfX6F3a7wM34/OUXNA6DpY8bw384q/orBxle4JCIsiyYnnz9FFV6Gij7FR7YjKyn5TAp/jqaHv/wIDAQAB'

};

function initKeycloak() {
    if (_keycloak) {
        console.warn("Trying to init Keycloak again!");
        return _keycloak;
    }
    else {
        console.log("Initializing Keycloak...");
        var memoryStore = new session.MemoryStore();
        _keycloak = new Keycloak({ store: memoryStore }, keycloakConfig);
        return _keycloak;
    }
}

function getKeycloak() {
    if (!_keycloak) {
        console.error('Keycloak has not been initialized. Please called init first.');
    }
    return _keycloak;
}

module.exports = {
    initKeycloak,
    getKeycloak
};