const net = require('net');
/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: '135.23.222.131',
    port: 50542
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('connect', () => {
    console.log('Connection established!');
    conn.write('Name: JB');
  });

  conn.on('data', (data) => console.log('you ded cuz u idled'));

  return conn;
};

module.exports = { connect };