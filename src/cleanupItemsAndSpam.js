const path = require('path');
const rename = require('./utils/rename');
const remove = require('./utils/remove');

function renameFiles(folderName, files) {
  files.forEach((fileRename) => {
    if (fileRename.spam) {
      remove(folderName, fileRename.originalName);
    } else {
      rename(folderName, fileRename.originalName, fileRename.suggestion);
    }
  });
}

module.exports = function cleanupItemsAndSpam(dir, renames) {
  renames.forEach(({ originalName, suggestion, files }) => {
    renameFiles(path.join(dir, originalName), files);
    rename(dir, originalName, suggestion);
  });
};
