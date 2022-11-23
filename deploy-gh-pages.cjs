const ghpages = require('gh-pages');

ghpages.publish('./dist/', {
  message: 'chore: update gh-pages',
});
