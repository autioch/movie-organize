const path = require('path');

const dir = path.join('d:', 'movies', 'filmy');

/* Move files downloaded without folders. */
require('./src/moveToDirs')(dir);

/* Get the rename suggestions. */
require('./src/saveRenames')(require('./src/suggestRenames')(dir));

/* Rename items and remove spam. */
require('./src/cleanupItemsAndSpam')(dir, require('./renames.json'));
