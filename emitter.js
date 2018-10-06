const EventEmitter = require ("events").EventEmitter;
let manager = new EventEmitter();
manager.on("request", (request) =>{
    request.data="data";
    manager.response = request;//.data;
   // console.log(manager.response);
});


//manager.emit("request", {myData:"Моя дата"});

module.exports.manager = manager