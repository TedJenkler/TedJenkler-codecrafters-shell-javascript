const readline = require("readline");

const commands = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("$ ", (answer) => {
  rl.close();
});

const main = (rl) => {
  if (commands.includes(rl.question)) {
    console.log(`invalid_command: ${rl.question.split(" ")[0]} not found`);
  }
};

main();
