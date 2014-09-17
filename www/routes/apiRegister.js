var mainService = require('./mainService.js').mainService();

exports.registerAll = function(app){
    app.get('/api/test', function(req, res){
        mainService.test(
            function(response){
                res.json(response);
            },
            function(error){
                res.status(500).send(error);
            }
        );
    });
    app.post('/api/file', function(req, res){
        var path = req.body.filePath;
        console.log(path);
        mainService.openFile(path,
            function(data){
                res.json(data);
            },
            function(err){
                res.status(500).send(err);
            }
        )
    })
};