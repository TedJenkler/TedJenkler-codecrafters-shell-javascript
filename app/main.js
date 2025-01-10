const readline = require("readline");
const fs = require("fs");
const path = require("path");

const commands = ["exit", "echo", "type"];

let terminal = true;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const findPath = (command) => {
  const paths = process.env.PATH.split(path.delimiter);

  for (const dir of paths) {
    const fullPath = path.join(dir, command);
    if (fs.existsSync(fullPath)) {
      return fullPath;
    }
  }

  return null;
};

const promptUser = () => {
  rl.question("$ ", (answer) => {
    const promptArray = answer.split(" ");
    const userCommand = promptArray[0];
    const userInput = promptArray.slice(1).join(" ");
    if (!commands.includes(userCommand)) {
      console.log(`${userCommand}: command not found`);
    } else if (userCommand === "exit") {
      rl.close();
      process.exit(0);
    } else if (userCommand === "echo") {
      console.log(userInput);
    } else if (userCommand === "type") {
      if (commands.includes(userInput)) {
        console.log(`${userInput} is a shell builtin`);
      } else {
        const result = findPath(userInput);
        if (result !== null) {
          console.log(`${userInput} is ${result}`);
        } else {
          console.log(`${userInput}: not found`);
        }
      }
    }
    if (terminal) {
      promptUser();
    }
  });
};

promptUser();
