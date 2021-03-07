import axios from  'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID B9W3bvlHGZpqH92zXCK9_-6TAXrtXTufHWdjG538yCU'
  }
})