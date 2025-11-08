const validator = require('../utils/validator');
const axios = require('axios');

exports.validateUrl = async (req, res, next) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: 'URL is required' });
  }

  if (!validator.isValidURL(url)) {
    return res.status(400).json({ error: 'Invalid URL format' });
  }

  try {
    const response = await axios.get(url);
    const accessible = response.status === 200;
    res.json({ valid: true, accessible });
  } catch (error) {
    if (error.response) {
      res.json({ valid: true, accessible: false });
    } else {
        console.error(error);
      next(error);
    }
  }
};