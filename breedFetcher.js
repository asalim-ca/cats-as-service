const request = require('request');

const URL = 'https://api.thecatapi.com/v1/breeds/search';
const breed = process.argv[2];


const breedDetailsFromApi = function(breed, callback) {
  request(`${URL}?q=${breed}`, (error, response, body) => {
    if (error) console.log(error);
    else callback(body);
  });
};

breedDetailsFromApi(breed, (data) => console.log(JSON.parse(data)[0]['description']));