const router = require('express').Router();
const profileAuth = require('../controllers/profileAuth');
const postAuth = require('../controllers/postAuth');
const protect = require('../middlewares/authMiddleware');

router.post('/register', profileAuth.register);
router.post('/login', profileAuth.login);
router.post('/logout', profileAuth.logout);
router.post('/refresh_token', profileAuth.generateToken);
router.get('/profile', protect, profileAuth.getProfile);

router.post('/add_post', postAuth.addPost)
router.get('/post', postAuth.getPosts)

module.exports = router;
