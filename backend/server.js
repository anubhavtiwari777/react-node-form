const express = require("express");
const PORT = process.env.PORT || 3008;
const app = express();
var bodyParser = require('body-parser')

const cors = require('cors')

app.use(cors())
app.use(bodyParser.json());
app.post('/api', (req, res) => {
    console.log(req.body)
    res.status(200).json({message: 'hello from server', data: req.body})

  });
  // TO CHECK RESPONCE on BROSWER
  app.get('/api', (req, res) => {
    res.status(200).json({message: 'Dummy Repsonce', data: { name: 'anubhva', Sname: 'Tiwari', email: 'anubhavtiwari1994@gmail.com', member: '4',location: 'Mumbai' }})

  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});