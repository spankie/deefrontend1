var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.session.user) {
    res.render('index', { title: 'Hall-Way', user: req.session });
  } else {
    res.render('index', { title: 'Hall-Way', user: {user: 'Guest'} });
  }
  
});

/* POST home page. */
router.post('/', function(req, res, next) {
  if(req.body.email == "spankie@gmail.com") {
    var sess = req.session; 
    sess.user = req.body.email;
    res.redirect('/users');
  } else {
    res.render('index', { title: 'Hall-Way', user: {user: 'Guest'}, err: 'Wrong Username' });
  }

});

module.exports = router;
