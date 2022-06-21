const {fetchBreedDescription} = require('./breedFetcher');

const breedName = process.argv[2];

const callback = function(error, description) {
  console.log(error, description);
};

fetchBreedDescription(breedName, callback);
