const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, IIS with Node.js!');
});

const PORT = 3000; // Cambia si necesitas otro puerto
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
