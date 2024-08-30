const express = require('express');
const router = require('./router');

const app = express();

app.use(express.json());

app.use('/api', router);

module.exports = app;

if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}