const express = require('express');
const cors = require('cors');
require('dotenv').config()
const app = express();
const multer = require('multer');
const upload = multer({dest: 'uploads/'});

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', (req, res) => {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
  let fileName = req.file.originalname;
  let fileType = req.file.mimetype;
  let fileSize = req.file.size;
  res.json({name: fileName, type: fileType, size: fileSize});
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Your app is listening on port ' + port)
});
