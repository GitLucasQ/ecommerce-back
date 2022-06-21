const autocanon = require('autocannon');
const { PassThrough } = require('stream');

function run(url) {
    const buf = [];
    const outputStream = new PassThrough();

    const inst = autocanon({
        url,
        connections: 100,
        duration: 20
    });

    autocanon.track(inst, { outputStream });

    outputStream.on('data', data => buf.push(data));

    inst.on('done', () => {
        process.stdout.write(Buffer.concat(buf))
    })
}

console.log('Ejecutando test autocannon...');

run('http://localhost:8081/info');