import axios from 'axios';

// Insira aqui sua api_key
const apiKey = '27b3720491843d47a6e61ac559efd810';

export default axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params:{
    api_key: apiKey,
  }
});
