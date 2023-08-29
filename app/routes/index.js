const express = require('express');
const router = express.Router();
const login = require('./api/login');
const users = require('./api/users');

router.get('/', (req, res) => {
	res.send('Bienvenido a la API del boilerplate');
});
router.use('/login', login);
router.use('/users', users);

module.exports = router;
