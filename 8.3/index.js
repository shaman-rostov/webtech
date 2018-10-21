module.exports.changes = function($) {
$("button").click(function(){
    let size = $("#resizable").width();
if (size===100) { $("#resizable").width(200)}
else {$("#resizable").width(100)}
}
)};


