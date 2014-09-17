var walk = require('walk');
var fs = require('fs');
var files   = [];

exports.mainService = function(){
    var pub = {
        openFile : function(path, callback) {
            fs.readFile(path, 'utf8', function (err, data) {
                bufferString = data.toString();
                bufferStringSplit = bufferString.split('\n');
                callback(bufferString);
            })
        },
        test : function(callback){
            callback('success');
        }
    };
    return pub;
}