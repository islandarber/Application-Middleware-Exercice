import express from 'express';

const app = express();
const port = 3000;

const secure = (req, res, next) => {
  const {token} = req.query;
  if (!token || token.length === 0) {
    res.status(403).send('access to the requested resource is forbidden.')
  }else {
    next()
  }
}

app.use(secure);
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at ${port}`);
} );