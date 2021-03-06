import React from 'react'
import axios from 'axios'
import SearchBar  from './SearchBar'

class App extends React.Component {
  state = { images: [] }
  onSearchSubmit = async (term) => {
    const result =  await axios.get('https://api.unsplash.com/search/photos', {
      headers: {
        Authorization: 'Client-ID B9W3bvlHGZpqH92zXCK9_-6TAXrtXTufHWdjG538yCU'
      },
      params: {
        query: term
      }
    })
    
  }
  render () {
    return (
      <div className='ui container' style={{ marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    )
  } 
}

export default App