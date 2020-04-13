import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID f8dXQmYWqpwWghPugKTNfGlMgvT3fOtZUSeNjy3FuEE'
    }
});