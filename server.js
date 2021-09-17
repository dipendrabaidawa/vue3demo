const express = require('express')
const app = express()
const path = require('path');


app.use(express.static('client/dist'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
});

app.listen(process.env.PORT || 3001, () => console.log('👍'))
