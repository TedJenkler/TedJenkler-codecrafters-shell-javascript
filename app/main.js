const readline = require("readline");

const commands = ["exit"];

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
    } else if (command === "exit") {
      rl.close();
      process.exit(0);
    }
    if (terminal) {
      promptUser();
    }
  });
};

promptUser();
