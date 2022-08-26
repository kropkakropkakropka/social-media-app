const router = require('express').Router();
const profileAuth = require('../controllers/profileAuth');
const postAuth = require('../controllers/postAuth');

router.post('/register', profileAuth.register);
router.post('/login', profileAuth.login);
router.post('/logout', profileAuth.logout);
router.post('/refresh_token', profileAuth.generateToken);
router.get('/profile', profileAuth.getProfile);

router.post('/add_post', postAuth.addPost)

module.exports = router;
