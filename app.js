const express = require('express');
const path = require('path');
const app = express();

app.use('/dist', express.static('dist'));
app.use('/public', express.static('public'));

const router = express.Router();
router.get('/', (req, res) => {
  res.sendFile( path.resolve('./public/main.html'));
}); app.use('/', router);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
