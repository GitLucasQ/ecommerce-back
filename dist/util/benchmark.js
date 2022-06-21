"use strict";

var autocanon = require('autocannon');

var _require = require('stream'),
    PassThrough = _require.PassThrough;

function run(url) {
  var buf = [];
  var outputStream = new PassThrough();
  var inst = autocanon({
    url: url,
    connections: 100,
    duration: 20
  });
  autocanon.track(inst, {
    outputStream: outputStream
  });
  outputStream.on('data', function (data) {
    return buf.push(data);
  });
  inst.on('done', function () {
    process.stdout.write(Buffer.concat(buf));
  });
}

console.log('Ejecutando test autocannon...');
run('http://localhost:8081/info');