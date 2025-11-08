const express = require('express');
const urlRoutes = require('./routes/url.routes');
const errorHandler = require('./middlewares/error.middleware');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/url', urlRoutes);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});