/**
 * Created by Shawn on 2014-09-16.
 */
    //this is the file that registers all the apis for the server - what to respond when a certain request is called.
    
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'Express' });
});


/* GET Hello World page. */
module.exports = router;