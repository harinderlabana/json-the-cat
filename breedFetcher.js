const request = require('request');
const breedFetcher = process.argv.slice(2)[0];

request(
  `https://api.thecatapi.com/v1/breeds/search?q=${breedFetcher}`,
  (error, response, body) => {
    //check for error or if statusCode is not 200
    if (error || (response && response.statusCode !== 200)) {
      console.error(error);
    } else {
      //convert JSON to object
      const data = JSON.parse(body);
      //scan through data object
      for (const element of data) {
        //look for description key
        for (const key in element) {
          if (key === 'description') {
            //return description text
            return console.log(element[key]);
          }
        }
      }
      //if breed not found return this message
      return console.log(`Breed type not found. Please try again.`);
    }
  }
);
