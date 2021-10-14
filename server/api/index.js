const app = require('./server');

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Movie app departed from port ${port}`))