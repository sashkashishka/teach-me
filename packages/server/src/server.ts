import express from 'express';

const app = express();

app.use(express.static('public/'));

app.get('/ping', (req, res) => {
  res.json({
    body: 'pong',
  });
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
