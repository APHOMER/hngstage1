const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());


app.get('/hngstageone', (req, res) => {
    const data = {
        slackUsername: 'APHOMER',
        backend: true,
        age: 26,
        bio: 'My character is more important than my Learning'
    };
    const { slackUsername, backend, age, bio } = data;
    return res.json(data);
});



app.listen(port, () => {
    console.log(`HNG internship stage1  is working on port ${port}`)
})
