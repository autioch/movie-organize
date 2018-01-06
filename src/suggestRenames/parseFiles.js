const suggestRename = require('./suggestRename');
const path = require('path');

const SPAM_EXTENSIONS = ['.nfo', '.sfv', '.ini', '.db'];

function isSpam(suggestion, extension) {
  const torrentInName = suggestion.toLowerCase().indexOf('torrent') > -1;
  const spamExtension = SPAM_EXTENSIONS.indexOf(extension.toLowerCase()) > -1;

  return torrentInName || spamExtension ? true : undefined;// eslint-disable-line no-undefined
}

function parseFileName(fileName) {
  const extension = path.extname(fileName);
  const { year, suggestion } = suggestRename(path.basename(fileName, extension));

  return {
    originalName: fileName,
    suggestion,
    year,
    extension: extension.toLowerCase(),
    spam: isSpam(suggestion, extension)
  };
}

function getYear(folderYear, fileNameSuggestions) {
  if (folderYear) {
    return folderYear;
  }

  const fileWithYear = fileNameSuggestions.find(({ year }) => !!year);

  if (fileWithYear) {
    return fileWithYear.year;
  }

  return undefined; // eslint-disable-line no-undefined, consistent-return
}

module.exports = function parseFiles(folderYear, files) {
  const fileNameSuggestions = files.map(parseFileName);
  const year = getYear(folderYear, fileNameSuggestions);
  const yearString = year ? `[${year}] ` : '';

  return {
    year,
    files: fileNameSuggestions.map(({ originalName, suggestion, extension, spam }) => ({
      originalName,
      suggestion: `${yearString}${suggestion}${extension}`,
      spam
    }))
  };
};
