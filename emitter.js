const EventEmitter = require ("events").EventEmitter;
let manager = new EventEmitter();
manager.on("request", (request) =>{
    request.data="data";
});

manager.on("request",(request)=>{
    request.response = request.data;
});


module.exports.manager = manager