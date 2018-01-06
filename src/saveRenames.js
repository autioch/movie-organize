const fs = require('fs');

module.exports = function saveRenameSuggestions(renameSuggestions) {
  fs.writeFileSync('renames.json', JSON.stringify(renameSuggestions, null, '  '), 'utf-8');
};
