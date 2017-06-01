'use strict'
const express = require('express'),
      app = express(),
      multer = require('multer'),
      upload = multer({ dest: 'uploads/' }),
      port = process.env.PORT || 8080;

app.use(express.static('./public'));

app.post('/get-file-size', upload.single('file'), (req, res) => {
  res.json({ size: req.file.size });
});

app.listen(port, () => {
  console.log("Funcionando en puerto " + port);
});
