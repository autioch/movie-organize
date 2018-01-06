const fs = require('fs');
const path = require('path');

module.exports = function rename(parentDir, oldName, newName) {
  if (oldName === newName) {
    return;
  }
  try {
    fs.renameSync(path.join(parentDir, oldName), path.join(parentDir, newName));
  } catch (err) {
    console.log(err.message);
  }
};
