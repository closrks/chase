var router = require('express').Router();

// these routes control login and can be rendered server
router.get('/', function(req, res, next) {
    res.render('index');
});

router.get('/login', function(req, res, next) {
    res.render('login', { message: null });
});

router.get('/signup', function(req, res, next) {
    res.render('signup');
});

router.get('/logout', function(req, res, next) {
    res.redirect('/');
});

// eventually this will serve the app bundle
router.get('/profile', function(req, res, next) {
    res.render('profile')
});


module.exports = router;