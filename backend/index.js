const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const corsOptions = {
  origin: 'http://localhost:4242'
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

require('./routes/auth.routes')(app);
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to jeoprady'
  });
});

const PORT = process.env.PORT || 3232;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
