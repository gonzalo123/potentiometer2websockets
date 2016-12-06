var autobahn = require('autobahn'),
    connection = new autobahn.Connection({
            url: 'ws://0.0.0.0:8080/ws',
            realm: 'iot'
        }
    ),
    mem;

connection.onopen = function (session) {
    session.register('iot.serial.get', function () {
        return mem;
    });
};

connection.open();