import axios from 'axios'

const BACKEND_URL = 'http://194.58.108.167:5053/'
const REQUEST_TIMEOUT = 2000

const instance = axios.create({
	baseURL: BACKEND_URL,
	timeout: REQUEST_TIMEOUT,
})

export default instance
