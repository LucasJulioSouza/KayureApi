const axios = require('axios');

(async () => {
  try {
    const piadaResponse = await axios.get('https://v2.jokeapi.dev/joke/Any?lang=pt');
    const { setup, delivery } = piadaResponse.data;
    
    console.log(`Setup: ${setup}`);
    console.log(`Delivery: ${delivery}`);

    
    const dogImageResponse = await axios.get('https://dog.ceo/api/breeds/image/random');
    const dogImageUrl = dogImageResponse.data.message;
    console.log(`Dog Image URL: ${dogImageUrl}`);
  } catch (error) {
    console.error(error);
  }
})();
