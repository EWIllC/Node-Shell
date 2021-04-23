const fs = require("fs");

module.exports = function (path, done) {
  fs.readFile(path, "utf8", (err, data) => {
    if (err) throw err;
    done(data)
    // process.stdout.write(data);
  });
};
