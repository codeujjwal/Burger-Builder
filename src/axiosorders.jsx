import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://reactburger-ab06a.firebaseio.com/'
});

export default instance;