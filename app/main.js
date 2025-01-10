const readline = require("readline");

const commands = ["exit", "echo"];

let terminal = true;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const promptUser = () => {
  rl.question("$ ", (answer) => {
    const promptArray = answer.split(" ");
    const userCommand = promptArray[0];
    const userInput = promptArray.slice(1);
    if (!commands.includes(userCommand)) {
      console.log(`${userCommand}: command not found`);
    } else if (userCommand === "exit") {
      rl.close();
      process.exit(0);
    } else if (userCommand === "echo") {
      console.log(userInput.join(" "));
    }
    if (terminal) {
      promptUser();
    }
  });
};

promptUser();
