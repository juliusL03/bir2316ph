const server = require('./api/server');

// const HOST = '119.93.154.249';
// const PORT = 8888;

const HOST = 'localhost';
const PORT = 8887;

server.listen(PORT, () => console.log(`Server running at ${HOST}:${PORT}`));