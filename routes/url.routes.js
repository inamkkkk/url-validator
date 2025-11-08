const express = require('express');
const urlController = require('../controllers/url.controller');

const router = express.Router();

router.post('/validate', urlController.validateUrl);

module.exports = router;