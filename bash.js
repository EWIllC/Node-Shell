process.stdout.write("prompt > ");
const pwd = require("./pwd");
const fs = require("./fs");
const cat = require("./cat");
const curl = require('./curl')

const done = (output) => {
    process.stdout.write(output)
    process.stdout.write('\nprompt > ')
}

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();
  const params = cmd.split(" ");

  if (cmd === "pwd") {
    pwd(done);
  } else if (cmd === "ls") {
    fs(done);
  } else if (params[0] === "cat") {
    cat(params[1], done);
  } else if (cmd === 'curl') {
    curl(params[1], done)
  } else {
    done(`You typed: ${cmd}`);
  }
});

