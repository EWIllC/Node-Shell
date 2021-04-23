process.stdout.write("prompt > ");
const pwd = require("./pwd");
const fs = require("./fs");
const cat = require("./cat");

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();
  const params = cmd.split(" ");

  if (cmd === "pwd") {
    pwd();
  } else if (cmd === "ls") {
    fs();
  } else if (params[0] === "cat") {
    cat(params[1]);
  } else {
    process.stdout.write("You typed: " + cmd);
  }
});
