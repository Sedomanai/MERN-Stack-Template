const express = require('express');
const path = require('path');
const dir = path.resolve(__dirname);
const app = express();

app.use('/dist', express.static(path.join(dir, '..', 'dist')));
app.use('/public', express.static(path.join(dir, '..','public')));

const router = express.Router();
router.get('/', (req, res) => {
  res.sendFile( path.join(dir, '..','public', 'main.html'));
}); app.use('/', router);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
