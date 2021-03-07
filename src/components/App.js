import React from 'react'
import unsplash from '../api/unsplash'
import SearchBar  from './SearchBar'
import ImageList from './ImageList'

class App extends React.Component {
  state = { images: [] }
  onSearchSubmit = async (term) => {
    if(term.trim() === '') {
      return
    }
    try {
      const { data } =  await unsplash.get('/search/photos', {
        params: {
          query: term
        }
      })
      console.log(data.results)
      this.setState({ images: data.results })

    } catch(err) {
      console.log(err.message)
      return
    }  
  }
  render () {
    return (
      <>
        <div className='ui container' style={{ marginTop: '10px'}}>
          <SearchBar onSubmit={this.onSearchSubmit} />
        </div>
        <ImageList images={this.state.images} />
      </>
    )
  } 
}

export default App