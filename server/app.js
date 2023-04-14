const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');

const dir = path.resolve(__dirname);

app.use('/dist', express.static(path.join(dir, '..', 'dist')));
app.use('/public', express.static(path.join(dir, '..','public')));

const router = express.Router();
router.get('/', (req, res) => {  
  // const AppString = require('./ssr.js');
  // fs.readFile(path.join(dir, '..','public', 'main.html'), "utf8", (err, data) => {
  //   if (err) {
  //     console.error(err);
  //     return res.status(500).send("An error occurred");
  //   }
  //   return res.send(data.replace(
  //     `<div id="root"></div>`, 
  //     `<div id="root">${AppString()}</div>`
  //   ));
  // });

  res.sendFile( path.join(dir, '..','public', 'main.html'));
}); app.use('/', router);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
