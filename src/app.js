import express  from 'express'
const app = express()

app.get('/', function (req, res) {
    console.log('first');
	console.log('first');
  res.send('Hello MenuDep');
});

app.listen(3000)
