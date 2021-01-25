import axios from 'axios'

export default axios.create({
    baseURL: 'https://react-quiz-7a604.firebaseio.com/'
})