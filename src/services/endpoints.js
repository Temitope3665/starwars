import apiInstance from './apiIntance';

export const getMovies = async () => apiInstance({ url: 'films' })
export const getSingleMovie = async (url) => apiInstance({ url: `${url}` })
