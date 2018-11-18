const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 1337;

app.use(express.static(path.join(__dirname, 'my-app/build')));

app.get('/list', (req, res) => {
    o = {name: 'alvin', age: 30};
    res.send(o);
});

// pipe whatever shit to index.html
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname, 'my-app/build/index.html'));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))