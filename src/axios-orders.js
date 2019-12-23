import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://jewen-react-my-burger.firebaseio.com/'
});

export default instance;