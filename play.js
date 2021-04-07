const  { connect } = require('./client');

const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  }
};

/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = () => {
  const stdin = process.stdin;
  stdin.on('data', handleUserInput);
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  return stdin;
};


console.log('Connecting ...');

connect();

setupInput();