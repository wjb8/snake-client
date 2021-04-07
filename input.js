let connection;

/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.on('data', handleUserInput);
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  return stdin;
};

const handleUserInput = (key) => {
  if (key === '\u0003') { //=> if user input is ctrl+C, exit the program
    process.exit();
  }

  if (key === 'w') { //=> handle directional keys
    connection.write('Move: up');
  } else if (key === 'a') {
    connection.write('Move: left');
  } else if (key === 's') {
    connection.write('Move: down');
  } else if (key === 'd') {
    connection.write('Move: right');
  }
};

module.exports = { setupInput };