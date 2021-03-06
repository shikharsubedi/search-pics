import React from 'react'
import axios from 'axios'
import SearchBar  from './SearchBar'
import SearchDisplay from './SearchDisplay'

class App extends React.Component {
  state = { imageData: null }
  onSearchSubmit = async (term) => {
    if(term.trim() === '') {
      return
    }
    try {
      const { data } =  await axios.get('https://api.unsplash.com/search/photos', {
      headers: {
        Authorization: 'Client-ID B9W3bvlHGZpqH92zXCK9_-6TAXrtXTufHWdjG538yCU'
      },
      params: {
        query: term
      }
    })
    
    if(!data || !Array.isArray(data.results) || !data.results.length) {
      this.setState({imageData: null})
      return
    }
    const imageData = data.results.map(result => (
      {
        url: result.urls.thumb,
        id: result.id,
        alt: result.alt_description
      }
    ))
    this.setState({ imageData })

    } catch(err) {
      console.log(err.message)
    }
    
    
  }
  render () {
    return (
      <>
        <div className='ui container' style={{ marginTop: '10px'}}>
          <SearchBar onSubmit={this.onSearchSubmit} />
        </div>
        <div class='ui container'>
          {(this.state.imageData) ?
            <SearchDisplay imageData={this.state.imageData} />
            : '' }
      </div>
      </>
    )
  } 
}

export default App