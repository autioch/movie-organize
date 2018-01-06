const fs = require('fs');
const suggestRename = require('./suggestRename');
const parseFiles = require('./parseFiles');
const path = require('path');

module.exports = function suggestRenames(dirName) {
  const folders = fs.readdirSync(dirName);

  return folders.map((folderName) => {
    const { folderYear, suggestion } = suggestRename(folderName);
    const { year, files } = parseFiles(folderYear, fs.readdirSync(path.join(dirName, folderName)));

    return {
      year,
      originalName: folderName,
      suggestion,
      files
    };
  });
};
