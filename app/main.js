const readline = require("readline");

const commands = [];

let terminal = true;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const promptUser = () => {
  rl.question("$ ", (answer) => {
    const command = answer.split(" ")[0];
    if (!commands.includes(command)) {
      console.log(`${command}: command not found`);
    }
    if (terminal) {
      promptUser();
    } else {
      rl.close();
    }
  });
};

promptUser();
