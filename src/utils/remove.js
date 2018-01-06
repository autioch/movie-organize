const fs = require('fs');
const path = require('path');

module.exports = function remove(parentDir, fileName) {
  try {
    fs.unlinkSync(path.join(parentDir, fileName));
  } catch (err) {
    console.log(err.message);
  }
};
