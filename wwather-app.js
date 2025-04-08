const btnEl = document.querySelector('.js-button');
const inputEl = document.querySelector('.js-cityName')

btnEl.addEventListener('click', () => {weather()});

async function getCoordinates() {
  const limit = 5;
  const cityName = inputEl.value;
  const API = 'ad14c3f713a65d8d20f166d1b9b6661b';
  const cca2 = await getCountry();

  // response is a HTTP object, if you want to get the correct data from it use the method .json()
  const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=${limit}&appid=${API}`);

  const data = await response.json();
  // I set the limit to 5, which means the API will return a maximum of 5 results.
  // Each result is an object representing a place named "Kenya".
  // So, 'data' will be an array of up to 5 objects, and each object will have a 'name' property (e.g., name: "Kenya").

  const location = data.find(location => location.country === cca2)
  // 'location' is just a temporary variable used in .find() to represent each item in the array.
  // Some results named "Kenya" are from other countries, so we use .find() to get the one where country === 'KE'.
  // .find() loops through the array and returns the first object that matches this condition.
  const {lon, lat} = location;
    if (location){ 
      return {lon, lat}
    }else{
      console.log('location not found');
    }
  }
  async function weather() {
  const API = 'ad14c3f713a65d8d20f166d1b9b6661b';
  const  coords = await getCoordinates();
  console.log(coords);

  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${API}`);
  
  const data = await response.json();

  document.querySelector('.display')
    .innerText = data.weather[0].description
  console.log( data.weather[0].description);  
}
async function getCountry() {
  const name = inputEl.value;
  const response = await fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
   
   const data = await response.json();
   
   console.log(data[0].cca2)

   return data[0].cca2;
}