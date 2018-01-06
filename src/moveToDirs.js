const fs = require('fs');
const path = require('path');
const rename = require('./utils/rename');
const mkdir = require('./utils/mkdir');

const movieFormats = ['mkv', 'avi', 'mp4', 'mpg', 'rmvb'];
const relevantFormats = ['txt', 'srt'].concat(movieFormats);

function getFormat(file) {
  return path.extname(file).replace('.', '');
}

function getDirName(file) {
  return path.basename(file, path.extname(file));
}

module.exports = function moveToDirs(dirName) {
  const files = fs.readdirSync(dirName);

  files
    .filter((file) => movieFormats.indexOf(getFormat(file)) > -1)
    .forEach((file) => mkdir(dirName, getDirName(file)));

  files
    .filter((file) => relevantFormats.indexOf(getFormat(file)) > -1)
    .forEach((file) => rename(dirName, file, path.join(getDirName(file), file)));
};
