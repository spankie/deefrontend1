var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  if(req.session.user) {
    var sess = req.session;
    res.send('Hello ' + sess.user);
  }
  
});

module.exports = router;
