const express = require('express');
const router = express.Router();
const login = require('./api/login');

router.get('/', (req, res) => {
	res.send('Bienvenido a la API del boilerplate');
});
router.use('/login', login);

module.exports = router;
