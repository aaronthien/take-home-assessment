const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

const cors = require('cors');
app.use(express.json());
app.use(cors());

const loginRouter = require('./routes/loginRouter')

app.get('/', (req, res) => {
  res.send('Backend is working!');
});

app.use('/api/auth', loginRouter)

app.use((req, res) => res.status(404).json('No route'));



app.use((err, req, res, next) => {
    console.error(err);
    if (err.name) {
        res.status(err.status).send(err.message);
    }
    else {
        res.status(500).send('Something broke!');
    }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
