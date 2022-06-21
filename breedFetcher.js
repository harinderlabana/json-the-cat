const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    (error, response, body) => {
      if (error) {
        callback(error, null);
        return;
      }

      if (response.statusCode !== 200) {
        callback(response.statusCode, null);
        return;
      }

      const data = JSON.parse(body);
      if (!data.length) {
        callback(null, console.log('Breed not found.'));
        return;
      }

      callback(null, data[0].description);
    }
  );
};

module.exports = {fetchBreedDescription};
