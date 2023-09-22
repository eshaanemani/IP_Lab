function fetchDataFromAPI(apiUrl) {
  return new Promise((resolve, reject) => {
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`API request failed with status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        resolve(data); // Resolve the promise with the API data
      })
      .catch(error => {
        reject(error); // Reject the promise if any error occurs
      });
  });
}

// Usage
const apiUrl = 'https://openweathermap.org/api';

fetchDataFromAPI(apiUrl)
  .then(apiData => {
    console.log('API data:', apiData);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });
