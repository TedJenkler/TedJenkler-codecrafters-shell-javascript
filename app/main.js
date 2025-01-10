const readline = require("readline");

const commands = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("$ ", (answer) => {
  const command = answer.split(" ")[0];
  if (!commands.includes(command)) {
    console.log(`${command}: command not found`);
  }
  rl.close();
});
