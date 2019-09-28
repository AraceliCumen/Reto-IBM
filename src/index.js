import app from './app';
import '@babel/polyfill';

async function main () {
    await app.listen(3060);
    console.log('Server on port 3060');
};

main();