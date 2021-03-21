import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Serve is started');
});
app.listen(5000, () => {
    console.log('Server at http://localhost:5000');
});