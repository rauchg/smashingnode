
suite('net', function () {

  suite('Stream', function () {

    var client;

    suiteSetup(function () {
      client = net.connect(3000, 'localhost');
    });

    test('connect event', function (done) {
      client.on('connect', done);
    });

    test('receiving data', function (done) {
      client.write('');
      client.once('data', done);
    });

    suiteTeardown(function () {
      client.end();
    });

  });

});
