// express library laye
const express = require('express');

// creates a new router object
const router = express.Router();

// import from controllers floder
const homeController = require('../controllers/homeController');

//Home Routing 
router.get('/', homeController.indexFunction);
router.get('/about', homeController.aboutFunction);
router.get('/login', homeController.loginFunction);
router.get('/users', homeController.getAllUser);
router.post('/users', homeController.createUser);
// Implement other routes (GET /books/:id, PUT /books/:id, DELETE /books/:id) here...

module.exports = router;