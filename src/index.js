const app = require('./app');
require('./database');

async function main() {
    await app.listen(app.get('port'));
    console.log('servidor escuchando en el puerto ', app.get('port'));
}

main();