const express = require('express');

const app = express();

console.log(process.env);

app.get('/', (req, res) => {
    res.send('Hello Express!');
});

const PORT = process.env.PORT || 8001

app.listen(PORT, () => {
    console.log(`Express server is listening on port ${PORT}!`);
});
