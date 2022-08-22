const express = require('express');

const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, '/dist')));

const routs = [
  '/',
  '/sign-in',
  '/sign-up',
  '/profile',
  '/chat',
  '/profile',
  '/profile-change',
  '/change-password',
  '/500',
  '/404',
];

routs.forEach((route) => {
  app.get(route, (req, res) => {
    res.sendFile(path.join(__dirname, '/dist/index.html'));
  });
});
app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});
