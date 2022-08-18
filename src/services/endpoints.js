import apiInstance from './apiIntance';

const getMovies = async () => apiInstance({ url: 'films' })

export default getMovies;