const fs = require('fs');
const path = require('path');

module.exports = function mkdir(dir, dirName) {
  try {
    fs.mkdirSync(path.join(dir, dirName));
  } catch (err) {
    console.log(err.message);
  }
};
