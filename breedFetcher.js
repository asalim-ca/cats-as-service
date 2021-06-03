const request = require('request');

const URL = 'https://api.thecatapi.com/v1/breeds/search';

const fetchBreedDescription = function(breedName, callback) {
  request(`${URL}?q=${breedName}`, (error, response, body) => {
    if (error) callback(error, null);
    else {
      let result = JSON.parse(body);
      if (!result.length) callback('invalid/non-existent', null)
      else callback(null, result[0]['description'])
    }
  });
};

module.exports = { fetchBreedDescription };