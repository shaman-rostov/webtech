const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest
module.exports.request = function() {
    let req = new XMLHttpRequest()
    req.open("GET", "http://localhost:300", true);
    var body=       req.send();
    req.open("POST", "http://localhost:3000/test", true);
    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    req.send(body);

}   